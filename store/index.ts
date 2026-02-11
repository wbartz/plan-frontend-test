import { countryFields } from '@/types'
import { CountryPicker } from '@yusifaliyevpro/countries/types'
import { create } from 'zustand'

export type Filters = {
  page?: number
  continent?: string | null
  language?: string | null
  name?: string | null
}

type CountriesDataStore = {
  all: CountryPicker<typeof countryFields>[]
  perPage: number

  // setters
  setAll: (items: CountryPicker<typeof countryFields>[]) => void
  clearAll: () => void

  // getters / helpers
  getFullList: () => CountryPicker<typeof countryFields>[]
  getTotalPages: (perPage?: number) => number
  getFiltered: (params: Filters) => {
    items: CountryPicker<typeof countryFields>[]
    totalPages: number
    totalItems: number
    page: number
  }
}

function matchesFilter(country: any, params: Filters) {
  const { continent, name, language } = params

  if (continent) {
    const continents = (country?.continents || []).map((c: string) =>
      String(c).toLowerCase(),
    )
    if (!continents.includes(String(continent).toLowerCase())) return false
  }

  if (name) {
    const nameText =
      String(country?.name?.common || '') +
      ' ' +
      Object.values(country?.translations || {}).join(' ')
    if (!nameText.toLowerCase().includes(String(name).toLowerCase()))
      return false
  }

  if (language) {
    const langs = Object.values(country?.languages || {}).join(' ')
    if (!langs.toLowerCase().includes(String(language).toLowerCase()))
      return false
  }

  return true
}

export const useCountriesDataStore = create<CountriesDataStore>((set, get) => ({
  all: [],
  perPage: 8,

  setAll(items: any[]) {
    set({ all: Array.isArray(items) ? items : [] })
  },

  clearAll() {
    set({ all: [] })
  },

  getFullList() {
    return get().all
  },

  getTotalPages(perPage?: number) {
    const p = perPage ?? get().perPage
    const total = Math.max(0, get().all.length)
    return Math.max(1, Math.ceil(total / p))
  },

  getFiltered(params: Filters) {
    const page = Math.max(1, Math.floor(Number(params.page) || 1))
    const perPage = get().perPage
    const filtered = get().all.filter((c) => matchesFilter(c, params))
    const totalItems = filtered.length
    const totalPages = Math.max(1, Math.ceil(totalItems / perPage))
    const start = (page - 1) * perPage
    const items = filtered.slice(start, start + perPage)
    return { items, totalPages, totalItems, page }
  },
}))

export default useCountriesDataStore
