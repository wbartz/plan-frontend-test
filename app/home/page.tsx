import { getCountries } from '@/server/actions'
import { Pagination } from '@/components/Pagination'
import { CountryCard } from './components/country-card'

export default async function Home() {
  const { countries, totalPages } = await getCountries()

  return (
    <div className="flex flex-col">
      <div className="flex gap-8 flex-wrap">
        {countries?.map((country: any) => (
          <CountryCard key={country.name.common} country={country} />
        ))}
      </div>
      <Pagination totalPages={totalPages} />
    </div>
  )
}
