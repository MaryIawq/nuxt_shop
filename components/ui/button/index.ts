import { type VariantProps, cva } from 'class-variance-authority'

export { default as Button } from './Button.vue'

export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-transparent text-foreground hover:text-accent-foreground',
        destructive:
          'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline:
          'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        primary:
            'bg-primary text-primary-foreground shadow-sm hover:bg-neutral-200 hover:text-black',
        secondary:
          'bg-transparent text-foreground hover:text-accent-foreground border-2 border-foreground p-1',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 sm:px-4 px-2 md:text-base text-sm',
        xs: 'h-7 rounded px-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-9 rounded-md w-full',
        icon: 'h-9 w-9 p-1',
        circle: 'rounded-full h-9 w-9 p-1'
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'icon',
    },
  },
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
