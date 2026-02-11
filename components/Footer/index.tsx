import Image from 'next/image'
import LogoGrupo from '@/assets/images/logo_grupo.png'

export function Footer() {
  return (
    <footer className="w-full bg-foreground text-foreground text-center text-sm px-8 py-4 flex flex-col sm:flex-row justify-between items-center sm:items-end gap-2">
      <div className="flex items-center justify-center sm:justify-start">
        <Image src={LogoGrupo} alt="Logo" width={126} height={92} />
      </div>
      <p className="font-bold text-sm text-background text-center sm:text-right">
        Grupo Plan Marketing (C) Todos os direitos reservados - 2025
      </p>
    </footer>
  )
}
