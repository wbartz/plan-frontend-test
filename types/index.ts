import { defineFields } from '@yusifaliyevpro/countries'

export type Continent = {
  label: string
  value: string
}

export const Continents: Continent[] = [
  { label: 'África', value: 'africa' },
  { label: 'Antártida', value: 'antarctica' },
  { label: 'América do Norte', value: 'north-america' },
  { label: 'América do Sul', value: 'south-america' },
  { label: 'Ásia', value: 'asia' },
  { label: 'Europa', value: 'europe' },
  { label: 'Oceania', value: 'oceania' },
]

export const countryFields = defineFields([
  'name',
  'region',
  'subregion',
  'flags',
  'translations',
  'continents',
])
