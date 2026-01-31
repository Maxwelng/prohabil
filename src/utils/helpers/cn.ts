import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combina classes CSS usando clsx e tailwind-merge
 * Útil para resolver conflitos de classes do Tailwind
 * 
 * @example
 * cn('px-4 py-2', condition && 'bg-red-500', 'hover:bg-blue-500')
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}