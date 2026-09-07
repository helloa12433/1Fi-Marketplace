import React, { useState, useMemo } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Product, EMIPlan, ProductVariant, OrderSummary } from '../../types/marketplace';
import { ProductVariantSelector } from './ProductVariantSelector';
import { EmiPlanSelector } from './EmiPlanSelector';
import { OrderReviewModal } from './OrderReviewModal';
import { formatINR, calculateMonthlyEmi } from '../../api/marketplaceApi';

interface ProductDetailsProps {
  product: Product;
  onBack: () => void;
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({ product, onBack }) => {
  const initialVariants = useMemo(() => {
    const defaults: Record<string, string> = {};
    if (product.variantGroups) {
      product.variantGroups.forEach((group) => {
        if (group.options.length > 0) {
          defaults[group.name] = group.options[0].id;
        }
      });
    }
    return defaults;
  }, [product]);

  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>(initialVariants);
  const [selectedPlan, setSelectedPlan] = useState<EMIPlan | null>(null);
  const [showReviewModal, setShowReviewModal] = useState(false);

  const selectedVariantObjects = useMemo(() => {
    const map: Record<string, ProductVariant> = {};
    if (product.variantGroups) {
      product.variantGroups.forEach((group) => {
        const selId = selectedVariants[group.name];
        const opt = group.options.find((o) => o.id === selId);
        if (opt) {
          map[group.name] = opt;
        }
      });
    }
    return map;
  }, [product, selectedVariants]);

  const activeImage = useMemo(() => {
    const colorOpt = selectedVariantObjects['Color'];
    if (colorOpt && colorOpt.image) {
      return colorOpt.image;
    }
    const anyImageOpt = Object.values(selectedVariantObjects).find((v) => v.image);
    return anyImageOpt?.image || product.image;
  }, [product, selectedVariantObjects]);

  const currentPrice = useMemo(() => {
    let price = product.price;
    Object.values(selectedVariantObjects).forEach((variant) => {
      if (variant.priceDelta) {
        price += variant.priceDelta;
      }
    });
    return price;
  }, [product, selectedVariantObjects]);

  const activeDetails = useMemo(() => {
    const base = [...product.details];
    const snippets = Object.values(selectedVariantObjects)
      .map((v) => v.detailSnippet)
      .filter((s): s is string => Boolean(s));

    return [...snippets, ...base];
  }, [product, selectedVariantObjects]);

  const handleSelectVariant = (groupName: string, variantId: string) => {
    setSelectedVariants((prev) => ({
      ...prev,
      [groupName]: variantId,
    }));
  };

  const monthlyAmount = selectedPlan
    ? calculateMonthlyEmi(currentPrice, selectedPlan)
    : null;

  const orderSummary: OrderSummary | null = selectedPlan && monthlyAmount
    ? {
        product,
        selectedVariants: selectedVariantObjects,
        currentPrice,
        selectedPlan,
        monthlyAmount,
      }
    : null;

  return (
    <div className="w-full flex flex-col gap-4">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex w-fit items-center gap-2 rounded-full py-1 text-xs sm:text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Products</span>
      </button>

      <div className="w-full rounded-[24px] sm:rounded-[28px] border border-zinc-200/90 bg-white p-5 sm:p-8 lg:p-10 shadow-fi-card">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start">
          
          <div className="lg:col-span-6 flex flex-col gap-5 sm:gap-6">
            <div className="relative flex h-64 sm:h-80 md:h-96 lg:h-[440px] w-full items-center justify-center overflow-hidden rounded-2xl bg-zinc-50 p-6 border border-zinc-100">
              <img
                key={activeImage}
                src={activeImage}
                alt={product.name}
                className="h-full w-full object-contain transition-all duration-300 animate-in fade-in"
              />
            </div>

            {activeDetails.length > 0 && (
              <div className="rounded-2xl border border-zinc-100 bg-zinc-50/70 p-4 sm:p-6">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-3">
                  Product Details & Specifications
                </label>
                <ul className="space-y-2.5">
                  {activeDetails.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-600">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-fi-purple" />
                      <span className="leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="lg:col-span-6 flex flex-col gap-5 sm:gap-6">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                {Object.entries(selectedVariantObjects).map(([groupName, variant]) => (
                  <span
                    key={groupName}
                    className="rounded-full bg-fi-tabBg border border-fi-tabBorder px-2.5 py-0.5 text-xs font-semibold text-fi-purple"
                  >
                    {variant.name}
                  </span>
                ))}
              </div>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-900 tracking-tight">
                {product.name}
              </h2>

              <p className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight">
                {formatINR(currentPrice)}
              </p>

              <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-gray-600">
                {product.description}
              </p>
            </div>

            {product.variantGroups && product.variantGroups.length > 0 && (
              <ProductVariantSelector
                variantGroups={product.variantGroups}
                selectedVariants={selectedVariants}
                onSelectVariant={handleSelectVariant}
              />
            )}

            <EmiPlanSelector
              currentPrice={currentPrice}
              emiPlans={product.emiPlans}
              selectedPlan={selectedPlan}
              onSelectPlan={(plan) => setSelectedPlan(plan)}
            />

            <div className="pt-2">
              <button
                type="button"
                disabled={!selectedPlan}
                onClick={() => setShowReviewModal(true)}
                className={`w-full rounded-2xl py-3.5 sm:py-4 px-6 text-center text-sm sm:text-base font-bold tracking-wide transition-all shadow-sm ${
                  selectedPlan
                    ? 'bg-fi-purple text-white hover:bg-fi-darkPurple active:scale-[0.99] cursor-pointer'
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200'
                }`}
              >
                {selectedPlan && monthlyAmount
                  ? `Proceed with ${selectedPlan.tenureMonths} Months EMI (${formatINR(monthlyAmount)}/mo)`
                  : 'Select an EMI Plan to Proceed'}
              </button>
            </div>
          </div>

        </div>
      </div>

      {showReviewModal && orderSummary && (
        <OrderReviewModal
          summary={orderSummary}
          onClose={() => setShowReviewModal(false)}
          onOrderComplete={() => {
            setShowReviewModal(false);
            onBack();
          }}
        />
      )}
    </div>
  );
};
