'use client'

import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowLeft01Icon, ArrowRight01Icon } from '@hugeicons/core-free-icons'
import { parseAsInteger, parseAsString, useQueryState } from 'nuqs'
import useCountriesDataStore from '@/store'

export function Pagination() {
  const [page, setPage] = useQueryState('page', parseAsInteger.withDefault(1))
  const [continent] = useQueryState('continent', parseAsString.withDefault(''))
  const [language] = useQueryState('language', parseAsString.withDefault(''))
  const [name] = useQueryState('name', parseAsString.withDefault(''))
  const totalPages = useCountriesDataStore
    .getState()
    .getFiltered({ page, continent, language, name }).totalPages

  const prevPage = () => setPage(Math.max(1, page - 1))
  const nextPage = () => setPage(Math.min(totalPages, page + 1))

  return (
    <div className="mt-8 flex justify-center items-center gap-4">
      <button
        type="button"
        onClick={prevPage}
        className="cursor-pointer w-12.5 h-12.5 flex justify-center items-center text-white font-semibold rounded-2xl border-4 border-white hover:bg-primary disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={page <= 1}
      >
        <HugeiconsIcon icon={ArrowLeft01Icon} strokeWidth={2} />
      </button>
      {(() => {
        const windowSize = 5
        const count = Math.min(windowSize, totalPages)
        const maxStart = Math.max(1, totalPages - count + 1)
        const start = Math.min(
          Math.max(1, page - Math.floor(windowSize / 2)),
          maxStart,
        )

        const itemWidth = 20
        const gap = 8
        const containerWidth = count * itemWidth + (count - 1) * gap
        const translateX = -((start - 1) * (itemWidth + gap))

        return (
          <div
            className="overflow-hidden"
            style={{ width: `${containerWidth}px` }}
          >
            <div
              className="flex items-center gap-2 transition-transform duration-300"
              style={{ transform: `translateX(${translateX}px)` }}
            >
              {Array.from({ length: totalPages }, (_, idx) => {
                const p = idx + 1
                const isActive = p === page
                return (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setPage(p)}
                    className={`cursor-pointer min-w-5 min-h-5 rounded-full flex items-center justify-center border-2 text-sm ${
                      isActive
                        ? 'bg-white text-primary font-semibold border-white'
                        : 'bg-transparent text-white border-white hover:bg-white/10'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                    disabled={isActive}
                  />
                )
              })}
            </div>
          </div>
        )
      })()}
      <button
        type="button"
        onClick={nextPage}
        className="cursor-pointer w-12.5 h-12.5 flex justify-center items-center text-white font-semibold rounded-2xl border-4 border-white hover:bg-primary disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={page >= totalPages}
      >
        <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} />
      </button>
    </div>
  )
}
