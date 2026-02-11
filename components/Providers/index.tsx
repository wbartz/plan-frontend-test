'use client'

import React, { useEffect } from 'react'
import useCountriesDataStore from '@/store'

type Props = {
  initialItems?: any[]
  children: React.ReactNode
}

export function CountriesProvider({ initialItems = [], children }: Props) {
  const setAll = useCountriesDataStore((s) => s.setAll)

  useEffect(() => {
    if (initialItems && initialItems.length > 0) {
      setAll(initialItems)
    }
    // we intentionally run only on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <>{children}</>
}

export default CountriesProvider
