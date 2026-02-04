import { cva, type VariantProps } from 'class-variance-authority';

export const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-full font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        primary: 'bg-gradient-to-r from-gold-light via-gold to-gold-dark text-white hover:brightness-110 focus:ring-gold',
        secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-400',
        outline: 'border-2 border-gold text-gold hover:bg-gradient-to-r hover:from-gold hover:to-gold-dark hover:text-white focus:ring-gold',
        ghost: 'hover:bg-gray-100 focus:ring-gray-400',
      },
      size: {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;