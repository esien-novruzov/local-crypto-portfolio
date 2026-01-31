import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const generateMonthlyData = () => {
  const data = [];
  let currentPrice = 92000; // Starting BTC price
  const now = new Date();

  for (let i = 30; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(now.getDate() - i);
    
    // Simulate a random walk (daily change between -2% and +2.5%)
    const change = 1 + (Math.random() * 0.045 - 0.02);
    currentPrice = currentPrice * change;

    data.push({
      time: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      price: parseFloat(currentPrice.toFixed(2)),
    });
  }
  return data;
};