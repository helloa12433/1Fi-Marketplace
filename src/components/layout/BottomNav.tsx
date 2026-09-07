import React from 'react';
import { House, Store, ReceiptIndianRupee, ChartNoAxesCombined, User } from 'lucide-react';

export type MainNavTab = 'home' | 'shop' | 'emi-dues' | 'limit' | 'profile';

interface BottomNavProps {
  activeTab: MainNavTab;
  onTabChange: (tab: MainNavTab) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'home' as const, label: 'Home', icon: House },
    { id: 'shop' as const, label: 'Shop', icon: Store },
    { id: 'emi-dues' as const, label: 'EMI Dues', icon: ReceiptIndianRupee },
    { id: 'limit' as const, label: 'Limit', icon: ChartNoAxesCombined },
    { id: 'profile' as const, label: 'Profile', icon: User },
  ];

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 px-4 pb-[calc(14px+env(safe-area-inset-bottom))] pointer-events-none">
      <div className="mx-auto flex w-full max-w-md sm:max-w-lg md:max-w-xl items-stretch rounded-[28px] bg-white/95 backdrop-blur-md border border-gray-200/80 px-2 py-1.5 shadow-fi-nav pointer-events-auto transition-all">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onTabChange(tab.id)}
              className={`group relative flex min-w-0 flex-1 flex-col items-center justify-center gap-[3px] rounded-[20px] px-1 py-2 text-center transition-all duration-200 ${
                isActive ? 'text-fi-purple' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {isActive && (
                <>
                  <span
                    className="absolute left-1/2 -top-[3px] h-[3px] w-10 -translate-x-1/2 rounded-full bg-fi-purple"
                    aria-hidden="true"
                  />
                  <span
                    className="absolute inset-1 rounded-[16px] opacity-50"
                    style={{
                      background: 'radial-gradient(ellipse at 50% 30%, rgba(113,44,220,0.12) 0%, transparent 70%)',
                    }}
                    aria-hidden="true"
                  />
                </>
              )}
              <Icon
                className={`relative h-[22px] w-[22px] transition-transform duration-200 group-active:scale-90 ${
                  isActive ? 'drop-shadow-[0_0_6px_rgba(113,44,220,0.3)]' : ''
                }`}
                strokeWidth={isActive ? 2 : 1.75}
              />
              <span
                className={`relative max-w-full truncate text-[11px] tracking-wide ${
                  isActive ? 'font-bold' : 'font-medium'
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
