import Image from 'next/image'
import LogoGrupo from '@/assets/images/logo_grupo.png'

export function Footer() {
  return (
    <footer className="w-screen bg-foreground text-foreground h-30 text-center text-sm px-16 py-2 flex justify-between items-end">
      <Image src={LogoGrupo} alt="Logo" width={126} height={92} />
      <p className="font-bold text-sm text-background">
        Grupo Plan Marketing (C) Todos os direitos reservados - 2025
      </p>
    </footer>
  )
}
