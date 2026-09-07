import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { OrderSummary } from '../../types/marketplace';
import { formatINR } from '../../api/marketplaceApi';

interface OrderReviewModalProps {
  summary: OrderSummary;
  onClose: () => void;
  onOrderComplete: () => void;
}

export const OrderReviewModal: React.FC<OrderReviewModalProps> = ({
  summary,
  onClose,
  onOrderComplete,
}) => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const { product, selectedVariants, currentPrice, selectedPlan, monthlyAmount } = summary;

  const colorVariant = Object.values(selectedVariants).find((v) => v.image);
  const activeImage = colorVariant?.image || product.image;

  const handleConfirm = () => {
    setIsConfirmed(true);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-[28px] border border-zinc-200 bg-white p-6 sm:p-8 shadow-2xl transition-all">
        {!isConfirmed && (
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 text-gray-500 hover:bg-zinc-200 hover:text-gray-900 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        )}

        {!isConfirmed ? (
          <div className="flex flex-col gap-5">
            <div>
              <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                Review EMI Order
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-gray-500">
                Confirm your selected product variants and EMI tenure plan.
              </p>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-zinc-100 bg-zinc-50/80 p-4">
              <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-white p-1 border border-zinc-200/60">
                <img
                  src={activeImage}
                  alt={product.name}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-sm sm:text-base font-bold text-gray-900 truncate">
                  {product.name}
                </h4>
                <div className="mt-1 flex flex-wrap gap-1.5">
                  {Object.entries(selectedVariants).map(([groupName, variant]) => (
                    <span
                      key={groupName}
                      className="rounded-full bg-fi-badgeBg px-2.5 py-0.5 text-[11px] font-semibold text-fi-purple"
                    >
                      {groupName}: {variant.name}
                    </span>
                  ))}
                </div>
                <p className="mt-1.5 text-base font-black text-gray-900">
                  {formatINR(currentPrice)}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2.5 rounded-2xl border border-zinc-100 bg-white p-4 text-xs sm:text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Product Price</span>
                <span className="font-semibold text-gray-900">{formatINR(currentPrice)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Selected Tenure</span>
                <span className="font-semibold text-gray-900">
                  {selectedPlan.tenureMonths} Months {selectedPlan.isNoCost ? '(No-Cost)' : ''}
                </span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Interest Rate</span>
                <span className="font-semibold text-gray-900">
                  {selectedPlan.isNoCost ? '0% (Zero Cost)' : `${selectedPlan.interestRate}% p.a.`}
                </span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Upfront Down Payment</span>
                <span className="font-semibold text-emerald-600">₹0</span>
              </div>
              <div className="my-1 border-t border-zinc-100" />
              <div className="flex items-center justify-between text-sm sm:text-base font-extrabold text-gray-900">
                <span>Monthly EMI Dues</span>
                <span className="text-fi-purple">
                  {formatINR(monthlyAmount)}
                  <span className="text-xs font-normal text-gray-500">/mo</span>
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-xl bg-[#f5f0ff] p-3 text-xs text-fi-purple font-medium">
              <ShieldCheck className="h-4 w-4 shrink-0" />
              <span>Backed by your Mutual Fund portfolio • 0% foreclosure fee</span>
            </div>

            <div className="mt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 rounded-2xl border border-gray-200 py-3 text-center text-xs sm:text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
              >
                Change Selection
              </button>
              <button
                type="button"
                onClick={handleConfirm}
                className="flex-1 rounded-2xl bg-fi-purple py-3 text-center text-xs sm:text-sm font-bold text-white shadow-sm hover:bg-fi-darkPurple transition-colors cursor-pointer"
              >
                Confirm EMI Order
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center text-center py-4">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-extrabold text-gray-900 tracking-tight">
              Order Placed Successfully!
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-gray-600 max-w-sm leading-relaxed">
              Your EMI plan of <strong className="text-gray-900">{formatINR(monthlyAmount)}/mo</strong> for{' '}
              <strong className="text-gray-900">{selectedPlan.tenureMonths} months</strong> for{' '}
              <strong className="text-gray-900">{product.name}</strong> has been confirmed.
            </p>

            <div className="mt-5 w-full rounded-2xl border border-zinc-100 bg-zinc-50 p-4 text-left text-xs">
              <div className="flex justify-between py-1">
                <span className="text-gray-500">Order Reference</span>
                <span className="font-mono font-semibold text-gray-900">#1FI-MKT-{Date.now().toString().slice(-6)}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-gray-500">First Installment Due</span>
                <span className="font-semibold text-gray-900">Next Month</span>
              </div>
            </div>

            <button
              type="button"
              onClick={onOrderComplete}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-fi-purple py-3.5 text-center text-sm font-bold text-white shadow-sm hover:bg-fi-darkPurple transition-colors cursor-pointer"
            >
              <span>Back to Marketplace</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
