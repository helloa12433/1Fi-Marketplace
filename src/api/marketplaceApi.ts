import { Product, EMIPlan } from '../types/marketplace';
import { MOCK_PRODUCTS } from './mockData';

const SIMULATED_LATENCY_MS = 400;

let shouldSimulateError = false;

export function setSimulateError(value: boolean): void {
  shouldSimulateError = value;
}

export async function fetchProducts(): Promise<Product[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldSimulateError) {
        reject(new Error('Unable to connect to marketplace service. Please try again.'));
        return;
      }
      resolve(JSON.parse(JSON.stringify(MOCK_PRODUCTS)));
    }, SIMULATED_LATENCY_MS);
  });
}

export async function fetchProductById(id: string): Promise<Product | null> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldSimulateError) {
        reject(new Error('Failed to load product details.'));
        return;
      }
      const product = MOCK_PRODUCTS.find((p) => p.id === id) ?? null;
      resolve(product ? JSON.parse(JSON.stringify(product)) : null);
    }, SIMULATED_LATENCY_MS);
  });
}

export function calculateMonthlyEmi(price: number, plan: EMIPlan): number {
  if (plan.isNoCost || plan.interestRate === 0) {
    return Math.round(price / plan.tenureMonths);
  }

  const monthlyRate = plan.interestRate / 12 / 100;
  const emi =
    (price * monthlyRate * Math.pow(1 + monthlyRate, plan.tenureMonths)) /
    (Math.pow(1 + monthlyRate, plan.tenureMonths) - 1);

  return Math.round(emi);
}

export function formatINR(amount: number): string {
  return '₹' + amount.toLocaleString('en-IN');
}
