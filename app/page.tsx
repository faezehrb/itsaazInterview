'use client';

import React, { useEffect, useState } from 'react';
import { fetchProducts, fetchCategories, deleteProduct } from '@/lib/api';
import Header from '@/components/Header';
import Filter from '@/components/CategoryFilter';
import Pagination from '@/components/Pagination';
import DeleteProduct from '@/components/DeleteProduct';
import {Product} from '@/types/products';


export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const limit = 10;

  const getData = (pageNumber = page, category = categoryFilter) => {
    fetchProducts(pageNumber, category, limit)
      .then((data) => {
        setProducts(data.products);
        setTotal(data.total);
      })
      .catch((err) => console.error(err));
  };

  const applyFilter = () => {
    setPage(1);
    getData(1, categoryFilter);
  };

  const clearFilter = () => {
    setCategoryFilter('');
    setPage(1);
    getData(1, '');
  };

  useEffect(() => {
    getData(page, categoryFilter);
  }, [page]);

  useEffect(() => {
    fetchCategories()
      .then(setCategories)
      .catch((err) => console.error(err));
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await deleteProduct(id); 
      setProducts(prev => prev.filter(product => product.id !== id));
      setTotal(prev => prev - 1);
    } catch (error) {
      console.error('خطا در حذف:', error);
    }
  };

  return (
    <>
      <Header />
      <Filter
        categories={categories}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        applyFilter={applyFilter}
        clearFilter={clearFilter}
      />
      <div className="w-full overflow-x-auto relative">
        <table className="min-w-[600px] w-full rounded-md">
          <thead>
            <tr className="bg-[#1E1E6E] text-center text-white">
              <th className="p-5">Brand</th>
              <th className="p-5">Price</th>
              <th className="p-5">Title</th>
              <th className="p-5">Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id} className="text-center hover:bg-gray-100 even:bg-[#E8E8E8]">
                <td className="p-5">{product.brand}</td>
                <td className="p-5">${product.price}</td>
                <td className="p-5">{product.title}</td>
                <td className="p-5 flex justify-center relative">
                  <DeleteProduct productId={product.id} rowNumber={index + 1} onDeleted={handleDelete} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination page={page} total={total} setPage={setPage} limit={limit} />
    </>
  );
}
