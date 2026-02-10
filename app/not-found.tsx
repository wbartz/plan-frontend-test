'use client'

import { Button } from '@/components/Button'
import Image from 'next/image'
import { redirect } from 'next/navigation'

export default function NotFoundPage() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <Image
        alt="Página não encontrada"
        src="https://illustrations.popsy.co/gray/crashed-error.svg"
        width={500}
        height={500}
        className="opacity-30"
      />
      <span className="text-sm -mt-4 italic text-stone-400 tracking-tight">
        Source: popsy.co
      </span>
      <p className="text-lg text-secondary font-bold mt-8">
        Oops! A página que você está procurando não existe.
      </p>

      <Button className="mt-4" onClick={() => redirect('/')}>
        Voltar
      </Button>
    </div>
  )
}
