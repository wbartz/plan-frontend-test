import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'
import { forwardRef } from 'react'

const buttonVariants = cva(
  'cursor-pointer italic text-sm font-black inline-flex items-center justify-center rounded-md font-medium transition-colors duration-300',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-white hover:bg-primary/70',
        secondary: 'bg-secondary text-gray-800 hover:bg-secondary/70',
      },
      size: {
        default: 'h-[47px] w-[270px] rounded-full px-4 py-2',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
