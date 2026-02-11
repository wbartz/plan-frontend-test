import { cn } from '@/lib/utils'

type TextProps = {
  children: React.ReactNode
  className?: string
  label?: string
}

export function Text({ children, className, label }: TextProps) {
  return (
    <p className={cn('text-[23px] text-secondary flex gap-2', className)}>
      {label && (
        <>
          <div className="text-right w-1/3 ">{label}</div>
          <div className="text-left w-2/3 ">{children}</div>
        </>
      )}
      {!label && children}
    </p>
  )
}
