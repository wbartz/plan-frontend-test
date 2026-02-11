'use client'

import { Button } from '@/components/Button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/Card'
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {countries?.map((country: any) => (
        <Card key={country.name.common}>
          <CardHeader
            title={getContinentName(country.continents[0]).label}
            // eslint-disable-next-line @typescript-eslint/no-require-imports
            icon={require(
              `@/assets/images/${getContinentName(country.continents[0]).value}.png`,
            )}
          />
          <CardContent className="flex flex-col items-center gap-4 flex-1 border-red-500">
            <div className="flex items-center flex-col px-6">
              <Image
                src={country.flags.svg}
                alt={country.name.common}
                width={24}
                height={18}
              />
              <p className="font-bold text-lg sm:text-xl text-secondary mt-2 text-center">
                {getCountryName(
                  country.translations.por?.common || country.name.common,
                )}
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button
              onClick={() =>
                redirect(`/detalhes/${getUrlName(country.name.common)}`)
              }
            >
              Ver mais
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
