import { useState } from 'react';
import { ShopPage } from './components/shop/ShopPage';
import { BottomNav, MainNavTab } from './components/layout/BottomNav';
import { Store } from 'lucide-react';

export function App() {
  const [activeNavTab, setActiveNavTab] = useState<MainNavTab>('shop');

  return (
    <div className="min-h-screen w-full bg-[#f8f9fc] text-gray-900 antialiased flex flex-col">
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-4 sm:px-6 md:px-8 lg:px-10 pb-28">
        {activeNavTab === 'shop' && <ShopPage />}

        {activeNavTab !== 'shop' && (
          <div className="flex flex-1 flex-col items-center justify-center p-8 text-center my-auto min-h-[50vh]">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-fi-badgeBg text-fi-purple">
              <Store className="h-8 w-8" />
            </div>
            <h2 className="text-xl font-bold capitalize text-gray-900">
              {activeNavTab.replace('-', ' ')}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-500 max-w-sm">
              This section is part of the 1Fi app navigation. The 1Fi Marketplace feature is available under the Shop section.
            </p>
            <button
              type="button"
              onClick={() => setActiveNavTab('shop')}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-fi-purple px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-fi-darkPurple transition-colors"
            >
              Go to Shop & Marketplace
            </button>
          </div>
        )}
      </main>

      <BottomNav
        activeTab={activeNavTab}
        onTabChange={(tab) => setActiveNavTab(tab)}
      />
    </div>
  );
}

export default App;
