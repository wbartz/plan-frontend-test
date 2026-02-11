'use client'

import Image from 'next/image'
import LogoPlan from '@/assets/images/logo_plan.png'
import { Continents } from '@/types'
import { Checkbox } from '@/components/Checkbox'
import { Field, FieldGroup } from '../Field'
import { usePathname } from 'next/navigation'
import { parseAsInteger, parseAsString, useQueryState } from 'nuqs'

const Header = () => {
  const [currentContinent, setContinent] = useQueryState(
    'continent',
    parseAsString.withDefault(''),
  )
  const [, setPage] = useQueryState('page', parseAsInteger.withDefault(1))
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex shrink-0 items-center justify-between gap-2 bg-primary/80 xl:bg-transparent">
      <div className="flex items-center px-4 mt-8 md:px-13 md:mt-12">
        <Image src={LogoPlan} alt="Plan Marketing" width={108} height={59} />

        {pathname === '/' && (
          <div className="w-screen flex flex-col justify-center items-center">
            <div className="w-screen max-w-6xl flex items-center gap-2">
              {Continents.map((continent) => (
                <FieldGroup
                  key={continent.value}
                  className="gap-2 inline-flex items-center"
                >
                  <Field
                    orientation="horizontal"
                    className="cursor-pointer inline-flex items-center"
                  >
                    <Checkbox
                      id={continent.value}
                      key={continent.value}
                      checked={continent.value === currentContinent}
                      onCheckedChange={(checked) => {
                        setPage(1)
                        setContinent(checked ? continent.value : '')
                      }}
                      className="w-6 h-6 shrink-0"
                    />
                    <label
                      htmlFor={continent.value}
                      className="text-[15px] font-bold italic text-secondary whitespace-nowrap"
                    >
                      {continent.label}
                    </label>
                  </Field>
                </FieldGroup>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export { Header }
