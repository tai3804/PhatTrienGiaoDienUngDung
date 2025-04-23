import { useState, useEffect } from 'react';
import { useProductContext } from '../hooks/useProductContext';
import ProductForm from './ProductForm';

export default function ProductList() {
  const { 
    products, 
    loading, 
    error, 
    fetchProducts, 
    addProduct, 
    removeProduct, 
    updateProduct 
  } = useProductContext();

  const [editingProduct, setEditingProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = products
    .filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(p => categoryFilter === 'all' || p.category === categoryFilter);

  const categories = [...new Set(products.map(p => p.category))];

  const handleEdit = (product) => setEditingProduct(product);
  const handleUpdate = (product) => {
    updateProduct(product);
    setEditingProduct(null);
  };

  const handleAdd = (product) => {
    addProduct(product);
    setIsAddModalOpen(false);
  };

  const totalProducts = products.length;
  const totalStock = products.reduce((sum, p) => sum + p.stock, 0);

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error) return <div className="text-center py-8 text-red-500">{error}</div>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold mb-8 text-center">Product Management</h1>

      <div className="mb-4 text-gray-700 font-medium">
        Tổng sản phẩm: {totalProducts} | Tổng tồn kho: {totalStock}
      </div>

      <div className="mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <input
            type="text"
            placeholder="Search products..."
            className="flex-1 px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="all">All Categories</option>
            {categories.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow"
        >
          Add Product
        </button>
      </div>

      {/* Edit Product Form */}
      {editingProduct && (
        <div className="mb-6 border rounded-lg p-4 shadow bg-gray-50">
          <h2 className="text-xl font-semibold mb-2">Edit Product</h2>
          <ProductForm 
            product={editingProduct}
            onSubmit={handleUpdate}
            onCancel={() => setEditingProduct(null)}
          />
        </div>
      )}

      {/* Add Product Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-lg shadow-lg relative">
            <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
            <ProductForm 
              onSubmit={handleAdd}
              onCancel={() => setIsAddModalOpen(false)}
            />
          </div>
        </div>
      )}

      {/* Product Table */}
      <div className="overflow-x-auto rounded-lg shadow border mt-4">
        <table className="min-w-full bg-white text-sm text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 border">Image</th>
              <th className="px-4 py-3 border">Name</th>
              <th className="px-4 py-3 border">Price</th>
              <th className="px-4 py-3 border">Category</th>
              <th className="px-4 py-3 border">Stock</th>
              <th className="px-4 py-3 border text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.length > 0 ? (
              filteredProducts.map(product => (
                <tr key={product.id} className="hover:bg-gray-50 transition">
                  <td className="px-4 py-2 border">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-14 h-14 rounded object-cover border"
                    />
                  </td>
                  <td className="px-4 py-2 border font-medium">{product.name}</td>
                  <td className="px-4 py-2 border text-blue-600">{product.price.toLocaleString()} đ</td>
                  <td className="px-4 py-2 border">{product.category}</td>
                  <td className="px-4 py-2 border">{product.stock}</td>
                  <td className="px-4 py-2 border text-center space-x-2">
                    <button
                      onClick={() => handleEdit(product)}
                      className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => removeProduct(product.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-6 text-gray-500">
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
