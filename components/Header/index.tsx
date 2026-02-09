import Image from 'next/image'
import LogoPlan from '@/assets/images/logo_plan.png'
import { Regions } from '@/types'
import { Checkbox } from '@/components/Checkbox'
import { Field, FieldGroup } from '../Field'

const Header = () => {
  return (
    <header className="flex z-20 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear">
      <div className="flex items-center justify-between gap-2 px-17.5 mt-15">
        <Image src={LogoPlan} alt="Plan Marketing" width={108} height={59} />

        <div className="w-screen flex flex-col justify-center items-center gap-4">
          <div className="w-screen max-w-6xl flex justify-around items-center gap-4 ">
            {Regions.map((region) => (
              <FieldGroup key={region.value} className="gap-2">
                <Field orientation="horizontal" className="cursor-pointer">
                  <Checkbox
                    id={region.value}
                    key={region.value}
                    className="w-6 h-6"
                  />
                  <label
                    htmlFor={region.value}
                    className="text-[15px] font-bold italic text-secondary"
                  >
                    {region.label}
                  </label>
                </Field>
              </FieldGroup>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

export { Header }
