import { getCountries } from '@/server/actions'
import { CountriesList } from './components/countries-list'
import { Pagination } from '@/components/Pagination'
import CountriesProvider from '@/components/Providers'

export default async function Home() {
  const countries = await getCountries()
  return (
    <div className="flex flex-col">
      <CountriesProvider initialItems={countries}>
        <CountriesList />

        <Pagination />
      </CountriesProvider>
    </div>
  )
}
