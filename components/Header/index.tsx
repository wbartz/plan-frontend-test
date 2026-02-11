'use client'

import Image from 'next/image'
import LogoPlan from '@/assets/images/logo_plan.png'
import { Continents } from '@/types'
import { Checkbox } from '@/components/Checkbox'
import { Field, FieldGroup } from '../Field'
import { usePathname } from 'next/navigation'
import { debounce, parseAsInteger, parseAsString, useQueryState } from 'nuqs'
import { HugeiconsIcon } from '@hugeicons/react'
import { Search01Icon } from '@hugeicons/core-free-icons'
import { Input } from '@/components/Input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/Select'
import useCountriesDataStore from '@/store'

const Header = () => {
  const [currentContinent, setContinent] = useQueryState(
    'continent',
    parseAsString.withDefault(''),
  )
  const [, setPage] = useQueryState('page', parseAsInteger.withDefault(1))
  const [name, setName] = useQueryState('name', parseAsString.withDefault(''))
  const [language, setLanguage] = useQueryState(
    'language',
    parseAsString.withDefault(''),
  )
  const languages = useCountriesDataStore().getAllLanguages()
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex shrink-0 items-center justify-between gap-2 bg-primary/80 xl:bg-transparent">
      <div className="flex items-center px-4 md:px-13 mt-0 xl:mt-4">
        <Image
          src={LogoPlan}
          alt="Plan Marketing"
          className=""
          width={108}
          height={59}
          defaultValue={name}
          onChange={(e: any) =>
            setName(e.target.value, {
              limitUrlUpdates:
                e.target.value === '' ? undefined : debounce(500),
            })
          }
          onKeyPress={(e: any) => {
            if (e.key === 'Enter') {
              // Send immediate update
              setName(e.target.value)
            }
          }}
        />

        {pathname === '/' && (
          <div className="w-screen flex flex-col">
            <div className="flex w-full lg:max-w-9/12 flex-col mt-5 lg:mt-0 lg:flex-row ml-6 gap-3 lg:gap-6 justify-center mb-3">
              {/* Campo de busca */}
              <div className="relative w-9/12 lg:w-6/12">
                <Input
                  type="text"
                  placeholder="Informe o país que deseja conhecer..."
                  className="pr-12 border-2 border-white text-base placeholder:text-secondary ring-transparent"
                  defaultValue={name}
                  onKeyPress={(e: any) => {
                    if (e.key === 'Enter') {
                      setPage(1)
                      // Send immediate update
                      setName(e.target.value)
                    }
                  }}
                />
                <HugeiconsIcon
                  className="absolute right-5 top-1/2 -translate-y-1/2 h-5 w-5 text-white"
                  icon={Search01Icon}
                  strokeWidth={2}
                />
              </div>

              {/* Seletor de idioma */}
              <div className="w-9/12 lg:w-6/12">
                <Select
                  defaultValue={language}
                  onValueChange={(value) => {
                    setPage(1)
                    setLanguage(value)
                  }}
                >
                  <SelectTrigger className="w-full text-base border-2 border-white">
                    <SelectValue placeholder="Selecione o idioma" />
                  </SelectTrigger>
                  <SelectContent className="bg-primary rounded-lg border-2 border-white max-h-90">
                    <SelectItem value="">Todos</SelectItem>
                    {languages.map((lang) => (
                      <SelectItem key={lang} value={lang}>
                        {lang}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="w-full max-w-9/12 block xl:hidden ml-6 mb-3">
              <Select
                defaultValue={currentContinent}
                onValueChange={(value) => {
                  setPage(1)
                  setContinent(value)
                }}
              >
                <SelectTrigger className="w-full text-base border-2 border-white">
                  <SelectValue placeholder="Selecione o continente" />
                </SelectTrigger>
                <SelectContent className="bg-primary rounded-lg border-2 border-white max-h-90">
                  <SelectItem value="">Todos</SelectItem>
                  {Continents.map((continent) => (
                    <SelectItem key={continent.value} value={continent.value}>
                      {continent.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="w-screen max-w-6xl ml-6 justify-start hidden xl:flex">
              {Continents.map((continent) => (
                <FieldGroup
                  key={continent.value}
                  className="gap-2 min-w-fit items-center"
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
