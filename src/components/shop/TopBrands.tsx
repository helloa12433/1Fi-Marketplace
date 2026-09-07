import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface Brand {
  id: string;
  name: string;
  emiOffer: string;
  bgColor: string;
  textColor: string;
  initials: string;
}

const BRANDS: Brand[] = [
  {
    id: 'air-india',
    name: 'Air India',
    emiOffer: 'No-cost EMIs upto 18 months',
    bgColor: 'bg-red-600',
    textColor: 'text-white',
    initials: 'AI',
  },
  {
    id: 'apple',
    name: 'Apple Premium Reseller',
    emiOffer: 'No-cost EMIs upto 24 months',
    bgColor: 'bg-black',
    textColor: 'text-white',
    initials: '',
  },
  {
    id: 'caratlane',
    name: 'CaratLane',
    emiOffer: 'No-cost EMIs upto 6 months',
    bgColor: 'bg-[#6b1d6b]',
    textColor: 'text-white',
    initials: 'CL',
  },
  {
    id: 'taj-hotels',
    name: 'Taj Experience Hotels',
    emiOffer: 'No-cost EMIs upto 24 months',
    bgColor: 'bg-[#967444]',
    textColor: 'text-white',
    initials: 'TAJ',
  },
  {
    id: 'croma',
    name: 'Croma',
    emiOffer: 'No-cost EMIs upto 18 months',
    bgColor: 'bg-[#00a896]',
    textColor: 'text-white',
    initials: 'CR',
  },
  {
    id: 'samsung',
    name: 'Samsung Smart Plaza',
    emiOffer: 'No-cost EMIs upto 24 months',
    bgColor: 'bg-[#1428a0]',
    textColor: 'text-white',
    initials: 'SAM',
  },
];

export const TopBrands: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBrands = BRANDS.filter((brand) =>
    brand.name.toLowerCase().includes(searchQuery.toLowerCase())
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
            placeholder="Search online stores..."
            className="flex-1 bg-transparent border-0 outline-none text-[13.5px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-0"
          />
        </div>

        <p className="text-[20px] font-semibold leading-[1.2] tracking-[-0.018em] text-gray-900">
          Top Brands
        </p>
      </div>

      {filteredBrands.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredBrands.map((brand) => (
            <div
              key={brand.id}
              className="flex items-center gap-4 rounded-[20px] border border-zinc-200/90 bg-white p-4 shadow-fi-card transition-all hover:border-gray-300"
            >
              <div
                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${brand.bgColor} ${brand.textColor} font-bold text-base shadow-sm`}
              >
                {brand.id === 'apple' ? (
                  <svg className="h-7 w-7 fill-current" viewBox="0 0 170 170">
                    <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.6-7.85-11.71-14.42-5.46-8.72-9.7-18.42-12.71-29.08-3.01-10.66-4.52-20.91-4.52-30.76 0-14.14 3.53-26.06 10.59-35.75 7.06-9.7 15.99-14.65 26.8-14.86 4.91 0 10.37 1.25 16.38 3.75 6.01 2.5 10.05 3.8 12.12 3.9 1.63 0 5.76-1.35 12.4-4.04 6.64-2.7 12.18-3.88 16.63-3.56 12.51.98 22.39 5.86 29.63 14.63-10.99 6.63-16.37 15.67-16.14 27.12.23 9.03 3.65 16.71 10.27 23.03 6.62 6.32 14.54 10.04 23.76 11.16-2.18 6.52-4.78 12.92-7.81 19.23zM119.22 33.56c0-6.74 2.45-12.92 7.35-18.54 4.9-5.62 10.98-9.42 18.24-11.41.33 1.09.5 2.18.5 3.27 0 6.63-2.6 13.04-7.8 19.23-5.2 6.19-11.28 9.94-18.29 11.24v-3.79z" />
                  </svg>
                ) : (
                  brand.initials
                )}
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="truncate text-base font-bold text-gray-900 leading-tight">
                  {brand.name}
                </h3>
                <p className="mt-1 text-xs font-medium text-gray-500">
                  {brand.emiOffer}
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
            Try a different store or brand name.
          </p>
        </div>
      )}
    </div>
  );
};
