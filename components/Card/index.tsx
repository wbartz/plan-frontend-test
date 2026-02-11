import { cn } from '@/lib/utils'
import Image, { StaticImageData } from 'next/image'
import { forwardRef } from 'react'

const Card = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'rounded-xl flex flex-col bg-white text-card-foreground shadow-custom w-full max-w-[320px]',
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
      'flex justify-between w-full py-2 px-3 bg-secondary rounded-tl-xl rounded-tr-xl',
      className,
    )}
    {...props}
  >
    <h1 className="text-2xl font-bold text-white">{title}</h1>
    <Image src={icon} alt={title} width={36} height={36} className="w-9 h-9" />
  </div>
))
CardHeader.displayName = 'CardHeader'

const CardContent = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6', className)} {...props} />
))
CardContent.displayName = 'CardContent'

function CardFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        'rounded-b-xl px-6 pb-2 group-data-[size=sm]/card:px-4 [.border-t]:pt-6 group-data-[size=sm]/card:[.border-t]:pt-4 flex items-center',
        className,
      )}
      {...props}
    />
  )
}

export { Card, CardHeader, CardContent, CardFooter }
