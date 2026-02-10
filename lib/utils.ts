import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getContinentName(code: string) {
  return String(code).toLowerCase().replace(/\s+/g, '-')
}

export function getCountryName(code: string, length: number = 20) {
  if (code.length > length) {
    return String(code).substring(0, length) + '...'
  }
  return String(code)
}

// Paginação simples em memória: sempre retorna até 8 registros por página.
export function withPagination<T>(
  countries: T[],
  page: number,
  perPage: number = 8,
) {
  // Normaliza o parâmetro page: garante número inteiro >= 1
  const p = Math.max(1, Math.floor(Number(page) || 1))
  const start = (p - 1) * perPage

  return countries.slice(start, start + perPage)
}
