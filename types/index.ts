type Region = {
  label: string
  value: string
}

const Regions: Region[] = [
  { label: 'Ásia', value: 'asia' },
  { label: 'Europa', value: 'europe' },
  { label: 'América do Norte', value: 'north-america' },
  { label: 'América do Sul', value: 'south-america' },
  { label: 'África', value: 'africa' },
  { label: 'Oceania', value: 'oceania' },
]

export type { Region }
export { Regions }
