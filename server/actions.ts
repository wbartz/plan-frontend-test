import { withPagination } from '@/lib/utils'
import { countryFields } from '@/types'
import { getCountries as getAll } from '@yusifaliyevpro/countries'
import { CountryPicker } from '@yusifaliyevpro/countries/types'

export const getCountries = async (page: number = 1) => {
  const countries = await getAll(
    {
      fields: countryFields,
    },
    { next: { revalidate: 7 * 24 * 3600 }, cache: 'force-cache' },
  )

  if (!countries) {
    throw new Error('Failed to fetch countries')
  }

  const perPage = 8

  return withPagination<CountryPicker<typeof countryFields>>(
    countries,
    page,
    perPage,
  )
}
