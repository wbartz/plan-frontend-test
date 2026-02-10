import { parseAsInteger, createLoader, parseAsString } from 'nuqs/server'

export const filters = {
  page: parseAsInteger.withDefault(1).withOptions({ shallow: false }),
  continent: parseAsString.withDefault('').withOptions({ shallow: false }),
  language: parseAsString.withDefault('').withOptions({ shallow: false }),
  name: parseAsString.withDefault('').withOptions({ shallow: false }),
}

export const loadSearchParams = createLoader(filters)
