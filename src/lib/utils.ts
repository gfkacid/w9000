import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const formatPrice = (price: number) =>
  Number(price).toLocaleString("en", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });