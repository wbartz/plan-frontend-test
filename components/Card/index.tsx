import { cn } from '@/lib/utils'
import Image, { StaticImageData } from 'next/image'
import { forwardRef } from 'react'

const Card = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'rounded-xl bg-white text-card-foreground shadow-custom w-77.5 h-59.5',
        className,
      )}
      {...props}
    />
  ),
)

Card.displayName = 'Card'

const CardHeader = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    title: string
    icon: StaticImageData
  }
>(({ className, title, icon, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex justify-between w-77.5 py-2 px-3 bg-secondary rounded-tl-xl rounded-tr-xl',
      className,
    )}
    {...props}
  >
    <h1 className="text-2xl font-bold text-white">{title}</h1>
    <Image
      src={icon}
      alt={title}
      width={36}
      height={38}
      className="w-9 h-9.5"
    />
  </div>
))
CardHeader.displayName = 'CardHeader'

const CardContent = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
))
CardContent.displayName = 'CardContent'

export { Card, CardHeader, CardContent }
