'use client'

import { Button } from '@/components/Button'
import { Card, CardContent, CardHeader } from '@/components/Card'
import { getUrlName, getContinentName, getCountryName } from '@/lib/utils'
import useCountriesDataStore from '@/store'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import { parseAsInteger, parseAsString, useQueryState } from 'nuqs'

export function CountriesList() {
  const [page] = useQueryState('page', parseAsInteger.withDefault(1))
  const [continent] = useQueryState('continent', parseAsString.withDefault(''))
  const countries = useCountriesDataStore
    .getState()
    .getFiltered({ page, continent }).items

  return (
    <div className="flex gap-6 flex-wrap">
      {countries?.map((country: any) => (
        <Card key={country.name.common}>
          <CardHeader
            title={getContinentName(country.continents[0]).label}
            // eslint-disable-next-line @typescript-eslint/no-require-imports
            icon={require(
              `@/assets/images/${getContinentName(country.continents[0]).value}.png`,
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
              <p className="font-bold text-[23px] text-secondary mt-2 text-center w-77.5">
                {getCountryName(
                  country.translations.por?.common || country.name.common,
                )}
              </p>
            </div>
            <Button
              onClick={() =>
                redirect(`/detalhes/${getUrlName(country.name.common)}`)
              }
            >
              Ver mais
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
