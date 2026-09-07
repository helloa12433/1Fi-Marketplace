# 1Fi Marketplace

A marketplace experience built as part of the 1Fi SDE Intern assignment.

The goal was to extend the existing 1Fi Shop experience with a new **1Fi Marketplace** section while keeping the existing UI, navigation and overall experience consistent with the application.

## Repository
[GitHub Repository](https://github.com/helloa12433/1Fi-Marketplace.git)

## What I Built

The Shop now has three sections:

- Top Brands
- Nearby Stores
- 1Fi Marketplace

The existing Top Brands and Nearby Stores experiences are kept intact. The main implementation is the 1Fi Marketplace.

### Marketplace Features

- Product listing
- Product images
- Product name and pricing
- Product variants such as storage and color
- Variant-specific product images and details
- EMI plans
- EMI plan selection
- Dynamic EMI calculation
- Proceed with selected EMI plan
- Order review
- Order confirmation
- Loading state
- Error state with retry

Changing a product variant updates the relevant product information, pricing, image and EMI amount.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Lucide React

Product and EMI information is handled through a separate mock API/data layer since no production backend was provided for the assignment.

## Project Structure

```text
src/
├── api/
│   ├── mockData.ts
│   └── marketplaceApi.ts
├── components/
│   ├── common/
│   │   ├── ErrorMessage.tsx
│   │   └── LoadingSkeleton.tsx
│   ├── layout/
│   │   ├── BottomNav.tsx
│   │   └── HeaderBanner.tsx
│   ├── marketplace/
│   │   ├── EmiPlanSelector.tsx
│   │   ├── OrderReviewModal.tsx
│   │   ├── ProductCard.tsx
│   │   ├── ProductDetails.tsx
│   │   ├── ProductList.tsx
│   │   └── ProductVariantSelector.tsx
│   └── shop/
│       ├── NearbyStores.tsx
│       ├── ShopPage.tsx
│       └── TopBrands.tsx
├── types/
│   └── marketplace.ts
├── App.tsx
├── index.css
└── main.tsx
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```
