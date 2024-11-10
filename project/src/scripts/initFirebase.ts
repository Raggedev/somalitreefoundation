import { collection, getDocs, writeBatch, doc, query, where, deleteDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { trees } from '../data/trees';

const COLLECTION_NAME = 'trees';

async function cleanupDuplicates() {
  const treesRef = collection(db, COLLECTION_NAME);
  const snapshot = await getDocs(treesRef);
  
  // Create a map to track unique tree names
  const uniqueTrees = new Map();
  const duplicateDocs = [];

  // Identify duplicates
  snapshot.docs.forEach(doc => {
    const data = doc.data();
    if (!uniqueTrees.has(data.name)) {
      uniqueTrees.set(data.name, doc.id);
    } else {
      duplicateDocs.push(doc.ref);
    }
  });

  // Delete duplicates in batches
  const batchSize = 500;
  for (let i = 0; i < duplicateDocs.length; i += batchSize) {
    const batch = writeBatch(db);
    duplicateDocs.slice(i, i + batchSize).forEach(docRef => {
      batch.delete(docRef);
    });
    await batch.commit();
  }

  console.log(`Cleaned up ${duplicateDocs.length} duplicate entries`);
}

export async function initializeFirebaseData() {
  try {
    // First, clean up any existing duplicates
    await cleanupDuplicates();

    // Check if we have the correct number of trees
    const treesRef = collection(db, COLLECTION_NAME);
    const snapshot = await getDocs(treesRef);
    
    if (snapshot.size === trees.length) {
      console.log('Correct number of trees already exists in Firestore');
      return;
    }

    // If we have incorrect number of trees, delete all and re-initialize
    const batch = writeBatch(db);
    snapshot.docs.forEach(doc => {
      batch.delete(doc.ref);
    });
    await batch.commit();

    // Initialize with fresh data
    const newBatch = writeBatch(db);
    let batchCount = 0;
    const batchLimit = 500;

    for (const tree of trees) {
      // Check if this tree name already exists
      const q = query(treesRef, where('name', '==', tree.name));
      const existingDocs = await getDocs(q);
      
      if (existingDocs.empty) {
        const newDocRef = doc(collection(db, COLLECTION_NAME));
        newBatch.set(newDocRef, {
          name: tree.name,
          useAndApplication: tree.useAndApplication
        });

        batchCount++;
        
        if (batchCount === batchLimit) {
          await newBatch.commit();
          batchCount = 0;
        }
      }
    }

    if (batchCount > 0) {
      await newBatch.commit();
    }

    console.log('Successfully initialized Firestore with tree data');
  } catch (error) {
    console.error('Error initializing Firestore:', error);
    throw error;
  }
}