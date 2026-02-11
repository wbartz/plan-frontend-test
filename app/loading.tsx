import { Card, CardContent } from '@/components/Card'
import { Skeleton } from '@/components/Skeleton'

/**
 * Generic page skeleton for simple pages
 * For specific pages, use the dedicated skeleton components
 */
export default function PageSkeleton() {
  return (
    <div className="flex gap-8 flex-wrap">
      {Array.from({ length: 8 }).map((_, i) => (
        <Card key={i} className="border-border/50">
          <CardContent className="p-6 space-y-4">
            <Skeleton className="h-6 w-40" />
            <div className="space-y-3">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-4/6" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
