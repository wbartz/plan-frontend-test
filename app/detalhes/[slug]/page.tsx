import { Card, CardHeader, CardContent } from '@/components/Card'
import { getContinentName } from '@/lib/utils'
import { getCountry } from '@/server/actions'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Footer } from './components/footer'
import { Text } from './components/text'

export const dynamic = 'force-dynamic'

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const country = await getCountry(slug)

  if (!country) return notFound()

  return (
    <div className="flex flex-col mt-6 lg:mt-24 mx-auto w-full">
      <Card className="w-full max-w-screen">
        <CardHeader
          title={getContinentName(country.continents[0]).label}
          // eslint-disable-next-line @typescript-eslint/no-require-imports
          icon={require(
            `@/assets/images/${getContinentName(country.continents[0]).value}.png`,
          )}
        />
        <CardContent className="flex flex-col md:flex-row items-center md:items-start gap-10">
          <div className="flex items-center flex-col px-6">
            <Image
              src={country.flags.svg}
              alt={country.name.common}
              width={290}
              height={220}
              className="w-72.5 h-55 object-cover rounded-lg"
            />
            <p className="font-bold text-lg sm:text-xl text-secondary mt-2 text-center">
              Bandeira
            </p>
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl text-left lg:text-right w-1/2 ml-12 lg:ml-8 font-bold text-secondary mb-6">
              {country.translations.por?.common || country.name.common}
            </h1>
            <div className="space-y-2 text-secondary">
              <Text label="Nome oficial:">
                <span className="font-bold">
                  {country.translations.por?.official || country.name.official}
                </span>
              </Text>
              <Text label="Capital:">
                <span className="font-bold">
                  {country.capital?.[0] || 'N/A'}
                </span>
              </Text>
              <Text label="População:">
                <span className="font-bold">
                  {country.population.toLocaleString() || 'N/A'}
                </span>
              </Text>
              <Text label="Moeda:">
                <span className="font-bold">
                  {Object.values(country.currencies ?? {})
                    .map((c) => c.name)
                    .join(', ') || 'N/A'}
                </span>
              </Text>
              <Text label="Idiomas:">
                <span className="font-bold">
                  {Object.values(country.languages ?? {}).join(', ') || 'N/A'}
                </span>
              </Text>
              <Text label="Região:">
                <span className="font-bold">{country.region}</span>
              </Text>
              <Text label="Sub-região:">
                <span className="font-bold">{country.subregion}</span>
              </Text>
            </div>
          </div>
        </CardContent>

        <Footer />
      </Card>
    </div>
  )
}
