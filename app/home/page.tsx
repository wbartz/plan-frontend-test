import { getCountries } from '@/server/actions'
import { CountryCard } from './components/country-card'

export default async function Home() {
  const countries = await getCountries()

  return (
    <div className="flex gap-8 flex-wrap">
      {countries?.map((country) => (
        <CountryCard key={country.name.common} country={country} />
      ))}
    </div>
  )
}
