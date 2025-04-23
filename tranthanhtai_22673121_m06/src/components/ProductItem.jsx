import React from "react";

export default function ProductItem({ product, onEdit, onDelete }) {
  return (
    <tr className="hover:bg-gray-50 transition">
      <td className="px-4 py-2 border">
        <img
          src={product.image}
          alt={product.name}
          className="w-14 h-14 rounded object-cover border"
        />
      </td>
      <td className="px-4 py-2 border font-medium">{product.name}</td>
      <td className="px-4 py-2 border text-blue-600">
        {product.price.toLocaleString()} đ
      </td>
      <td className="px-4 py-2 border">{product.category}</td>
      <td className="px-4 py-2 border">{product.stock}</td>
      <td className="px-4 py-2 border text-center space-x-2">
        <button
          onClick={() => onEdit(product)}
          className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded transition"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(product.id)}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
