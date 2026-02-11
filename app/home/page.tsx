import { getCountries } from '@/server/actions'
import { CountriesList } from './components/countries-list'
import { Pagination } from '@/components/Pagination'
import CountriesProvider from '@/components/Providers'

export default async function Home() {
  const countries = await getCountries()
  return (
    <div className="flex flex-col mt-23 lg:mt-20 mx-auto">
      <CountriesProvider initialItems={countries}>
        <div className="flex flex-col justify-around border mx-auto border-red-500">
          <CountriesList />

          <Pagination />
        </div>
      </CountriesProvider>
    </div>
  )
}
