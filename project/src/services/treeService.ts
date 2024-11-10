import { collection, getDocs, query, limit, startAfter, orderBy, DocumentData, QueryDocumentSnapshot, getCountFromServer } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Tree } from '../types/tree';

export class TreeService {
  private static lastDoc: QueryDocumentSnapshot<DocumentData> | null = null;
  private static readonly COLLECTION_NAME = 'trees';
  private static cachedCount: number | null = null;

  static async getTotalCount(): Promise<number> {
    if (this.cachedCount !== null) return this.cachedCount;
    
    try {
      const treesRef = collection(db, this.COLLECTION_NAME);
      const snapshot = await getCountFromServer(treesRef);
      this.cachedCount = snapshot.data().count;
      return this.cachedCount;
    } catch (error) {
      console.error('Error getting total count:', error);
      throw new Error('Failed to get total count');
    }
  }

  static async getTrees(itemsPerLoad: number = 10): Promise<Tree[]> {
    try {
      const treesRef = collection(db, this.COLLECTION_NAME);
      const q = query(
        treesRef,
        orderBy('name'),
        limit(itemsPerLoad)
      );
      
      const snapshot = await getDocs(q);
      
      if (snapshot.empty) {
        return [];
      }

      // Store the last document for pagination
      this.lastDoc = snapshot.docs[snapshot.docs.length - 1];
      
      return snapshot.docs.map(doc => ({
        id: doc.id,
        name: doc.data().name,
        useAndApplication: doc.data().useAndApplication
      }));
    } catch (error) {
      console.error('Error fetching trees:', error);
      throw new Error('Failed to fetch trees');
    }
  }

  static async getMoreTrees(itemsPerLoad: number = 10): Promise<Tree[]> {
    if (!this.lastDoc) {
      return [];
    }

    try {
      const treesRef = collection(db, this.COLLECTION_NAME);
      const q = query(
        treesRef,
        orderBy('name'),
        startAfter(this.lastDoc),
        limit(itemsPerLoad)
      );
      
      const snapshot = await getDocs(q);
      
      if (snapshot.empty) {
        this.lastDoc = null;
        return [];
      }

      // Update the last document reference for the next pagination
      this.lastDoc = snapshot.docs[snapshot.docs.length - 1];
      
      return snapshot.docs.map(doc => ({
        id: doc.id,
        name: doc.data().name,
        useAndApplication: doc.data().useAndApplication
      }));
    } catch (error) {
      console.error('Error fetching more trees:', error);
      throw new Error('Failed to fetch more trees');
    }
  }

  static resetPagination() {
    this.lastDoc = null;
    this.cachedCount = null;
  }
}