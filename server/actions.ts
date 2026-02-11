import { countryFields } from '@/types'
import {
  getCountries as getAll,
  getCountriesByName,
} from '@yusifaliyevpro/countries'
import { CountryPicker } from '@yusifaliyevpro/countries/types'

export const getCountries = async (): Promise<
  CountryPicker<typeof countryFields>[]
> => {
  const countries = await getAll(
    {
      fields: countryFields,
    },
    { next: { revalidate: 7 * 24 * 3600 }, cache: 'force-cache' },
  )

  if (!countries) {
    throw new Error('Failed to fetch countries')
  }

  return countries
}

export const getCountry = async (
  name: string,
): Promise<CountryPicker<typeof countryFields> | null> => {
  const country = await getCountriesByName({
    name: name.replace(/-/g, ' '),
    fields: countryFields,
  })

  return country ? country[0] : null
}
