
export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  date: string;
  categories: string[];
  readTime: number;
  pinned?: boolean;
}

export interface Category {
  name: string;
  color: string;
  count: number;
}
