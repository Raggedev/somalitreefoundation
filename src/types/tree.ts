export interface TreeUseAndApplication {
  description: string;
  tags: string[];
}

export interface Tree {
  name: string;
  useAndApplication: TreeUseAndApplication;
  imageUrl?: string;
}

export interface TreeFilters {
  searchTerm: string;
  tags: string[];
}