'use client'

import { Button } from '@/components/Button'
import { CardFooter } from '@/components/Card'
import { redirect } from 'next/navigation'

export function Footer() {
  return (
    <CardFooter className="flex justify-center items-center">
      <Button onClick={() => redirect('/')}>Voltar</Button>
    </CardFooter>
  )
}
