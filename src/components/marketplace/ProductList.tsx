import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Product } from '../../types/marketplace';
import { ProductCard } from './ProductCard';

interface ProductListProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const ProductList: React.FC<ProductListProps> = ({ products, onSelectProduct }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full flex flex-col gap-5">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-center gap-[10px] h-[46px] w-full sm:max-w-sm rounded-full border border-gray-200 bg-white px-4 shadow-sm">
          <Search className="h-[17px] w-[17px] text-gray-400 shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search marketplace products..."
            className="flex-1 bg-transparent border-0 outline-none text-[13.5px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-0"
          />
        </div>

        <p className="text-[20px] font-semibold leading-[1.2] tracking-[-0.018em] text-gray-900">
          1Fi Marketplace
        </p>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center rounded-[20px] border border-zinc-200 bg-white px-6 py-16 text-center shadow-fi-card">
          <div className="mb-3.5 flex h-14 w-14 items-center justify-center rounded-full bg-fi-badgeBg text-fi-purple">
            <Search className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-bold tracking-tight text-gray-900">
            No products found
          </h3>
          <p className="mt-1.5 max-w-[30ch] text-[13.5px] leading-relaxed text-gray-500">
            Try searching with a different product name or keyword.
          </p>
        </div>
      )}
    </div>
  );
};
