import { Card, CardContent } from '@/components/Card'
import { Skeleton } from '@/components/Skeleton'

/**
 * Generic page skeleton for simple pages
 * For specific pages, use the dedicated skeleton components
 */
export default function PageSkeleton() {
  return (
    <div className="mt-6 lg:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <Card key={i} className="border-border/50">
          <CardContent className="flex flex-col items-center justify-center gap-4 flex-1">
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
