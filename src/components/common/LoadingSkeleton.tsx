import React from 'react';

export const LoadingSkeleton: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mt-2">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
        <div
          key={item}
          className="flex flex-col animate-pulse rounded-[20px] border border-zinc-200 bg-white p-4 shadow-sm"
        >
          <div className="h-40 sm:h-48 w-full rounded-xl bg-zinc-100" />
          <div className="mt-3 flex flex-col gap-2">
            <div className="h-4 w-3/4 rounded bg-zinc-200" />
            <div className="h-4 w-1/3 rounded bg-zinc-200" />
            <div className="mt-1 h-3.5 w-1/2 rounded bg-zinc-100" />
          </div>
        </div>
      ))}
    </div>
  );
};
