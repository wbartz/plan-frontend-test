import { getCountries } from '@/server/actions'
import { CountriesList } from './components/countries-list'
import { Pagination } from '@/components/Pagination'
import CountriesProvider from '@/components/Providers'

export default async function Home() {
  const countries = await getCountries()
  return (
    <div className="flex flex-col mt-6 lg:mt-20 mx-auto w-full">
      <CountriesProvider initialItems={countries}>
        <div className="flex flex-col justify-around mx-auto">
          <CountriesList />

          <Pagination />
        </div>
      </CountriesProvider>
    </div>
  )
}
