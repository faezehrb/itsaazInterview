const BASE_URL = 'https://dummyjson.com/products';

export const fetchProducts = async (
  page: number,
  category: string,
  limit: number
) => {
  const skip = (page - 1) * limit;
  const url = category
    ? `${BASE_URL}/category/${category}?limit=${limit}&skip=${skip}`
    : `${BASE_URL}?limit=${limit}&skip=${skip}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
};

export const fetchCategories = async () => {
  const res = await fetch(`${BASE_URL}/category-list`);
  if (!res.ok) throw new Error('Failed to fetch categories');
  return res.json();
};

export const deleteProduct = async (id: number) => {
  const res = await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Failed to delete product');
  return res.json();
};