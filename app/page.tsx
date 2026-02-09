import { Button } from '@/components/Button'
import { Card, CardContent, CardHeader } from '@/components/Card'
import { Regions } from '@/types'

export default function Home() {
  return (
    <main className="flex gap-8 flex-wrap">
      {Regions.map((region) => (
        <Card key={region.value}>
          <CardHeader
            title={region.label}
            // eslint-disable-next-line @typescript-eslint/no-require-imports
            icon={require(`@/assets/images/${region.value}.png`)}
          />
          <CardContent>
            <Button>Ver mais</Button>
          </CardContent>
        </Card>
      ))}
    </main>
  )
}
