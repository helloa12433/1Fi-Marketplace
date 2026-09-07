import React, { useState } from 'react';
import { Search, ChevronDown, MapPin } from 'lucide-react';

interface NearbyStore {
  id: string;
  name: string;
  distance: string;
  address: string;
  brand: string;
}

const NEARBY_STORES: NearbyStore[] = [
  {
    id: 'store-1',
    name: 'Pacholi Suzuki Railway R...',
    distance: '259 KM',
    address: '64/9, New Railway Rd, near DSD college, Subhash Nagar, Sector 8, Gurugram, Haryana, 122001',
    brand: 'Suzuki',
  },
  {
    id: 'store-2',
    name: 'Pacholi Suzuki Rajiv Cho...',
    distance: '262 KM',
    address: '6/38, Rajiv Chowk, Sector 33, Rajiv Chowk, Gurugram, Haryana, 122001',
    brand: 'Suzuki',
  },
  {
    id: 'store-3',
    name: 'Atelier Forbidden Journe...',
    distance: '262 KM',
    address: 'Sector 40, Gurugram, Haryana, 122001',
    brand: 'Atelier',
  },
  {
    id: 'store-4',
    name: 'Honda BigWing Gurugram',
    distance: '265 KM',
    address: 'Golf Course Extension Rd, Sector 56, Gurugram, Haryana, 122011',
    brand: 'Honda',
  },
];

export const NearbyStores: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [city] = useState('S.a.s Nagar');

  const filteredStores = NEARBY_STORES.filter((store) =>
    store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    store.address.toLowerCase().includes(searchQuery.toLowerCase())
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
            placeholder="Search stores..."
            className="flex-1 bg-transparent border-0 outline-none text-[13.5px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-0"
          />
        </div>

        <div className="flex items-center justify-between sm:justify-end gap-3">
          <p className="text-[20px] font-semibold leading-[1.2] tracking-[-0.018em] text-gray-900">
            Nearby Stores
          </p>
          <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-full border border-fi-tabBorder bg-fi-tabBg px-3.5 py-1.5 text-xs font-semibold text-fi-purple"
          >
            <span>{city}</span>
            <ChevronDown className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {filteredStores.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredStores.map((store) => (
            <div
              key={store.id}
              className="flex items-start gap-4 rounded-[20px] border border-zinc-200/90 bg-white p-4 shadow-fi-card transition-all hover:border-gray-300"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-zinc-100 bg-zinc-50 font-bold text-xs text-blue-800 shadow-sm">
                {store.brand === 'Suzuki' ? (
                  <div className="text-center">
                    <span className="text-red-600 font-black text-sm block leading-none">S</span>
                    <span className="text-[9px] font-bold text-blue-900">SUZUKI</span>
                  </div>
                ) : store.brand === 'Honda' ? (
                  <span className="text-red-600 font-bold text-xs">HONDA</span>
                ) : (
                  <MapPin className="h-6 w-6 text-amber-600" />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="truncate text-sm font-bold text-gray-900">
                    {store.name}
                  </h3>
                  <span className="shrink-0 rounded-md bg-zinc-100 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-gray-600">
                    {store.distance}
                  </span>
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-gray-500 line-clamp-2">
                  {store.address}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center rounded-[20px] border border-zinc-200 bg-white px-6 py-16 text-center shadow-fi-card">
          <div className="mb-3.5 flex h-14 w-14 items-center justify-center rounded-full bg-fi-badgeBg text-fi-purple">
            <Search className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-bold tracking-tight text-gray-900">
            No matching stores found
          </h3>
          <p className="mt-1.5 max-w-[30ch] text-[13.5px] leading-relaxed text-gray-500">
            Try searching for a different store or address.
          </p>
        </div>
      )}
    </div>
  );
};
