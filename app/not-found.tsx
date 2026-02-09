import Image from 'next/image'

export default function NotFoundPage() {
  return (
    <div className="w-screen h-screen border flex flex-col items-center justify-center">
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
      <p className="text-lg text-stone-500 mt-8">
        Oops! A página que você está procurando não existe.
      </p>
    </div>
  )
}
