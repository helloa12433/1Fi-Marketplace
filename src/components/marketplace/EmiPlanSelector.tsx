import React from 'react';
import { Check } from 'lucide-react';
import { EMIPlan } from '../../types/marketplace';
import { calculateMonthlyEmi, formatINR } from '../../api/marketplaceApi';

interface EmiPlanSelectorProps {
  currentPrice: number;
  emiPlans: EMIPlan[];
  selectedPlan: EMIPlan | null;
  onSelectPlan: (plan: EMIPlan) => void;
}

export const EmiPlanSelector: React.FC<EmiPlanSelectorProps> = ({
  currentPrice,
  emiPlans,
  selectedPlan,
  onSelectPlan,
}) => {
  return (
    <div className="flex flex-col gap-3 border-t border-zinc-100 pt-4">
      <div className="flex items-center justify-between">
        <label className="text-xs font-bold uppercase tracking-wider text-gray-500">
          Select EMI Plan
        </label>
        <span className="text-xs font-medium text-gray-400">
          {emiPlans.length} plans available
        </span>
      </div>

      <div className="flex flex-col gap-2.5">
        {emiPlans.map((plan) => {
          const isSelected = selectedPlan?.id === plan.id;
          const monthlyAmount = calculateMonthlyEmi(currentPrice, plan);

          return (
            <div
              key={plan.id}
              onClick={() => onSelectPlan(plan)}
              className={`flex cursor-pointer items-center justify-between rounded-[16px] border p-3.5 transition-all ${
                isSelected
                  ? 'border-fi-purple bg-fi-tabBg shadow-sm'
                  : 'border-zinc-200 bg-white hover:border-zinc-300'
              }`}
              role="radio"
              aria-checked={isSelected}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectPlan(plan);
                }
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-all ${
                    isSelected
                      ? 'border-fi-purple bg-fi-purple text-white'
                      : 'border-gray-300 bg-white'
                  }`}
                >
                  {isSelected && <Check className="h-3 w-3 stroke-[3]" />}
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-bold text-gray-900">
                      {plan.tenureMonths} Months
                    </p>
                    {plan.isNoCost && (
                      <span className="rounded-full bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
                        No Cost
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 text-[11px] text-gray-500">
                    {plan.isNoCost ? 'Zero Interest' : `${plan.interestRate}% p.a. interest`}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <p className="text-sm font-extrabold text-gray-900">
                  {formatINR(monthlyAmount)}
                  <span className="text-xs font-normal text-gray-500">/mo</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
