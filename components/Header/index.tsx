'use client'

import Image from 'next/image'
import LogoPlan from '@/assets/images/logo_plan.png'
import { Continents } from '@/types'
import { Checkbox } from '@/components/Checkbox'
import { Field, FieldGroup } from '../Field'
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname = usePathname()

  return (
    <header className="flex z-20 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear">
      <div className="flex items-center px-17.5 mt-15">
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
