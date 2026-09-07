export interface ProductVariant {
  id: string;
  name: string;
  priceDelta?: number;
  image?: string;
  detailSnippet?: string;
}

export interface VariantGroup {
  name: string; // e.g. "Storage", "Color", "Configuration"
  options: ProductVariant[];
}

export interface EMIPlan {
  id: string;
  tenureMonths: number;
  isNoCost: boolean;
  interestRate: number; // 0 for No-Cost
}

export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  description: string;
  details: string[];
  variantGroups?: VariantGroup[];
  emiPlans: EMIPlan[];
}

export interface OrderSummary {
  product: Product;
  selectedVariants: Record<string, ProductVariant>;
  currentPrice: number;
  selectedPlan: EMIPlan;
  monthlyAmount: number;
}
