import React from 'react';
import { Product } from '../../types/marketplace';
import { formatINR, calculateMonthlyEmi } from '../../api/marketplaceApi';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  const bestPlan = product.emiPlans.reduce((prev, curr) => {
    const prevEmi = calculateMonthlyEmi(product.price, prev);
    const currEmi = calculateMonthlyEmi(product.price, curr);
    return currEmi < prevEmi ? curr : prev;
  }, product.emiPlans[0]);

  const lowestEmi = bestPlan ? calculateMonthlyEmi(product.price, bestPlan) : null;

  return (
    <div
      onClick={() => onSelect(product)}
      className="group flex flex-col cursor-pointer rounded-[20px] border border-zinc-200/90 bg-white p-4 shadow-fi-card transition-all hover:border-fi-purple/40 hover:shadow-md active:scale-[0.99]"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(product);
        }
      }}
    >
      <div className="relative h-40 sm:h-48 w-full flex items-center justify-center overflow-hidden rounded-xl bg-zinc-50 p-3">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain transition-transform duration-200 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="mt-3 flex flex-1 flex-col justify-between">
        <div>
          <h3 className="text-sm font-bold text-gray-900 group-hover:text-fi-purple transition-colors line-clamp-1">
            {product.name}
          </h3>
          <p className="mt-1.5 text-base font-extrabold text-gray-900 tracking-tight">
            {formatINR(product.price)}
          </p>
        </div>

        {lowestEmi && (
          <div className="mt-2.5 w-fit rounded-full bg-fi-badgeBg px-2.5 py-1 text-[11px] font-semibold text-fi-purple">
            No-cost EMI from {formatINR(lowestEmi)}/mo
          </div>
        )}
      </div>
    </div>
  );
};
