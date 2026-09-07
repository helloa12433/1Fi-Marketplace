import React, { useState, useEffect } from 'react';
import { HeaderBanner } from '../layout/HeaderBanner';
import { TopBrands } from './TopBrands';
import { NearbyStores } from './NearbyStores';
import { ProductList } from '../marketplace/ProductList';
import { ProductDetails } from '../marketplace/ProductDetails';
import { LoadingSkeleton } from '../common/LoadingSkeleton';
import { ErrorMessage } from '../common/ErrorMessage';
import { Product } from '../../types/marketplace';
import { fetchProducts } from '../../api/marketplaceApi';

export type ShopTab = 'top-brands' | 'nearby-stores' | 'marketplace';

export const ShopPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ShopTab>('marketplace');
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const loadMarketplaceProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchProducts();
      setProducts(data);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'An error occurred while loading products');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMarketplaceProducts();
  }, []);

  const handleTabChange = (tab: ShopTab) => {
    setActiveTab(tab);
    setSelectedProduct(null);
  };

  return (
    <div className="relative pb-10">
      <HeaderBanner />

      <div className="relative z-[2] -mt-6 sm:-mt-5 flex justify-center px-1">
        <div
          className="flex w-full max-w-lg gap-1 rounded-full border border-fi-tabBorder bg-fi-tabBg p-1.5 shadow-[0_1px_3px_rgba(113,44,220,0.06)]"
          role="tablist"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'top-brands'}
            onClick={() => handleTabChange('top-brands')}
            className={`relative flex-1 rounded-full py-[10px] text-center text-xs sm:text-sm font-semibold tracking-[-0.005em] transition-all ${
              activeTab === 'top-brands'
                ? 'bg-white text-fi-purple shadow-fi-tab'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Top Brands
            {activeTab === 'top-brands' && (
              <span className="absolute bottom-1.5 left-1/2 h-[2.5px] w-[20px] -translate-x-1/2 rounded-full bg-fi-purple" />
            )}
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'nearby-stores'}
            onClick={() => handleTabChange('nearby-stores')}
            className={`relative flex-1 rounded-full py-[10px] text-center text-xs sm:text-sm font-semibold tracking-[-0.005em] transition-all ${
              activeTab === 'nearby-stores'
                ? 'bg-white text-fi-purple shadow-fi-tab'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Nearby Stores
            {activeTab === 'nearby-stores' && (
              <span className="absolute bottom-1.5 left-1/2 h-[2.5px] w-[20px] -translate-x-1/2 rounded-full bg-fi-purple" />
            )}
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'marketplace'}
            onClick={() => handleTabChange('marketplace')}
            className={`relative flex-1 rounded-full py-[10px] text-center text-xs sm:text-sm font-semibold tracking-[-0.005em] transition-all ${
              activeTab === 'marketplace'
                ? 'bg-white text-fi-purple shadow-fi-tab'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            1Fi Marketplace
            {activeTab === 'marketplace' && (
              <span className="absolute bottom-1.5 left-1/2 h-[2.5px] w-[20px] -translate-x-1/2 rounded-full bg-fi-purple" />
            )}
          </button>
        </div>
      </div>

      <div className="mt-5">
        {activeTab === 'top-brands' && <TopBrands />}

        {activeTab === 'nearby-stores' && <NearbyStores />}

        {activeTab === 'marketplace' && (
          <>
            {loading ? (
              <LoadingSkeleton />
            ) : error ? (
              <ErrorMessage message={error} onRetry={loadMarketplaceProducts} />
            ) : selectedProduct ? (
              <ProductDetails
                product={selectedProduct}
                onBack={() => setSelectedProduct(null)}
              />
            ) : (
              <ProductList
                products={products}
                onSelectProduct={(product) => setSelectedProduct(product)}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};
