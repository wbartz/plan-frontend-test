'use client'

import { Button } from '@/components/Button'
import { Card, CardContent, CardHeader } from '@/components/Card'
import { getContinentName, getCountryName } from '@/lib/utils'
import { countryFields } from '@/types'
import { CountryPicker } from '@yusifaliyevpro/countries/types'
import Image from 'next/image'
import { redirect } from 'next/navigation'

export function CountryCard({
  country,
}: {
  country: CountryPicker<typeof countryFields>
}) {
  console.log(country)
  return (
    <Card key={country.name.common}>
      <CardHeader
        title={getCountryName(
          country.translations.por?.common || country.name.common,
        )}
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        icon={require(
          `@/assets/images/${getContinentName(country.continents[0])}.png`,
        )}
      />
      <CardContent className="flex flex-col items-center gap-4">
        <div className="flex items-center flex-col px-6">
          <Image
            src={country.flags.svg}
            alt={country.name.common}
            width={24}
            height={18}
          />
          <p className="font-bold text-[23px] text-secondary mt-2 text-center">
            {country.translations.por?.common || country.name.common}
          </p>
        </div>
        <Button
          onClick={() =>
            redirect(`/detalhes/${getContinentName(country.name.common)}`)
          }
        >
          Ver mais
        </Button>
      </CardContent>
    </Card>
  )
}
