'use client'

import { ArrowRight } from 'lucide-react'

export function CryaRequest() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-x-hidden bg-[#f4f8ff] px-5 py-10 text-slate-900 sm:px-8">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-44 size-[26rem] rounded-full bg-blue-100/70 blur-3xl" />
        <div className="absolute -bottom-52 -right-40 size-[32rem] rounded-full bg-sky-100/70 blur-3xl" />
      </div>

      <div className="relative w-full max-w-xl">
        <header className="mb-6 flex justify-center">
          <a href="#inicio" aria-label="CR-YA, inicio" className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-xl bg-blue-700 text-sm font-bold tracking-tight text-white shadow-lg shadow-blue-900/15">
              CY
            </span>
            <span className="text-lg font-bold tracking-[0.16em] text-slate-900">CR-YA</span>
          </a>
        </header>

        <section id="inicio" className="rounded-[1.75rem] border border-white bg-white p-6 shadow-[0_24px_80px_-32px_rgba(30,64,175,0.22)] sm:p-9">
          <div className="flex flex-col items-center text-center">
            <h1 className="max-w-sm text-xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-2xl">
              ¡Bienvenido! Te explico cómo obtener tu credito.
            </h1>
            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-700">
             ¡Solicita tu préstamo en tan solo 5 minutos!

Es muy fácil: solo debes completar un breve formulario con tus datos para realizar tu solicitud. Una vez finalizado el proceso y aprobada tu solicitud, podrás recibir el monto solicitado directamente en tu cuenta mediante transferencia bancaria.
            </p>
            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-700">
              Te recordamos que no pedimos pagos por adelantado ni anticipos de ningún tipo.
            </p>
            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-700">
              Puedes recibir tu dinero el mismo día, dependiendo de la hora en que completes tu registro y de la aprobación de tu solicitud.
            </p>
            <p className="mt-5 text-sm font-medium leading-6 text-slate-800">
              Ingresa aquí y termina tu formulario:
            </p>
            <a
              href="https://tinyurl.com/yp3ve8xn"
              className="mt-3 inline-flex h-12 w-full max-w-xs items-center justify-center gap-2 rounded-xl bg-blue-700 text-base font-semibold text-white shadow-lg shadow-blue-700/15 transition hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/30"
            >
              primera opción
              <ArrowRight aria-hidden="true" className="size-4" />
            </a>
            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-700">
              En caso de que no puedas finalizar tu registro o tengas algún inconveniente, puedes solicitar tu préstamo mediante nuestra segunda opción, que encontrarás aquí abajo.
            </p>
            <a
              href="https://tinyurl.com/49n393vn"
              className="mt-3 inline-flex h-12 w-full max-w-xs items-center justify-center gap-2 rounded-xl bg-blue-700 text-base font-semibold text-white shadow-lg shadow-blue-700/15 transition hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/30"
            >
              segunda opción
              <ArrowRight aria-hidden="true" className="size-4" />
            </a>
          </div>
        </section>
        <p className="mt-4 text-center text-xs text-slate-400">CR-YA · México</p>
      </div>
    </main>
  )
}
