import React, { useState } from 'react';

export const HeaderBanner: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <section className="w-full -mx-4 -mt-4 sm:mx-0 sm:mt-0 sm:rounded-3xl overflow-hidden bg-gradient-to-r from-[#1a054d] via-[#2f117a] to-[#712CDC] text-white shadow-sm transition-all">
      {!imageError && (
        <div className="relative w-full max-h-[260px] sm:max-h-[320px] md:max-h-[380px] overflow-hidden flex items-center justify-center">
          <img
            alt="Shop today, Pay later using Mutual funds"
            width={1600}
            height={500}
            className={`w-full h-full object-cover object-center transition-opacity duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0 h-0'
            }`}
            src="https://cdn.1fi.in/banners/shop-page%201536x1024.webp"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
        </div>
      )}

      {(!imageLoaded || imageError) && (
        <div className="px-6 py-10 sm:px-12 sm:py-16 flex flex-col justify-center">
          <div className="inline-flex w-fit items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-semibold backdrop-blur-sm">
            <span>✦</span> NO-COST EMIs
          </div>
          <h1 className="mt-4 text-2xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
            Shop today,<br />
            Pay later using Mutual funds.
          </h1>
          <p className="mt-3 text-xs sm:text-base text-white/80 max-w-xl leading-relaxed">
            No credit score required. No interest. Backed by your investments.
          </p>
        </div>
      )}
    </section>
  );
};
