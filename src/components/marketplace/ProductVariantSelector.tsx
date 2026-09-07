import React from 'react';
import { VariantGroup } from '../../types/marketplace';
import { formatINR } from '../../api/marketplaceApi';

interface ProductVariantSelectorProps {
  variantGroups: VariantGroup[];
  selectedVariants: Record<string, string>;
  onSelectVariant: (groupName: string, variantId: string) => void;
}

export const ProductVariantSelector: React.FC<ProductVariantSelectorProps> = ({
  variantGroups,
  selectedVariants,
  onSelectVariant,
}) => {
  if (!variantGroups || variantGroups.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4 border-t border-zinc-100 pt-4">
      {variantGroups.map((group) => {
        const currentSelectedId = selectedVariants[group.name];
        const currentSelectedOption = group.options.find((opt) => opt.id === currentSelectedId);

        return (
          <div key={group.name} className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-500">
                {group.name}
              </label>
              {currentSelectedOption && (
                <span className="text-xs font-semibold text-fi-purple">
                  {currentSelectedOption.name}
                </span>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {group.options.map((option) => {
                const isSelected = currentSelectedId === option.id;

                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => onSelectVariant(group.name, option.id)}
                    className={`flex items-center gap-1.5 rounded-xl border px-3 py-2 text-xs transition-all cursor-pointer ${
                      isSelected
                        ? 'border-fi-purple bg-fi-tabBg text-fi-purple font-bold shadow-sm ring-1 ring-fi-purple/20'
                        : 'border-gray-200 bg-white text-gray-700 font-medium hover:border-gray-300'
                    }`}
                  >
                    <span>{option.name}</span>
                    {option.priceDelta && option.priceDelta > 0 ? (
                      <span className={`text-[11px] ${isSelected ? 'text-fi-purple/80' : 'text-gray-400'}`}>
                        (+{formatINR(option.priceDelta)})
                      </span>
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
