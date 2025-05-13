export interface Product {
  id: number;
  title: string;
  price: number;
  brand: string;
}
export interface DeleteConfirmationProps {
  confirmDeleteId: number | null;
  handleDelete: (id: number) => void;
  handleCancel: () => void;
  productId: number;
}

export interface ProductResponse {
  products: Product[];
  total: number;
}

export interface CategoryResponse {
  categories: string[];
}

export interface FilterProps {
  categories: string[];
  categoryFilter: string;
  setCategoryFilter: React.Dispatch<React.SetStateAction<string>>;
  applyFilter: () => void;
  clearFilter: () => void;
}
export type Props = {
  productId: number;
  rowNumber: number;
  onDeleted: (id: number) => Promise<void>;
};

export interface PaginationProps {
  page: number;
  total: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  limit: number;
}