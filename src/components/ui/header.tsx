"use client"

import Link from "next/link"

export default function HeaderComponent() {
  return (
    <div className="top-0 px-5 md:px-0 left-0 w-full">
      <header className="md:px-5 gap-5 mx-auto flex flex-col md:flex-row md:justify-between py-4">
        <div className="flex min-w-[200px] md:items-center">
          <Link href="/">
            <img
              className="pointer cursor-pointer"
              src="./logos/delosi.png"
              width="130"
              alt=""
            />
          </Link>
        </div>
        <div className="mt-5 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-2 lg:w-full">
          <div className="flex w-full items-center gap-8">
            <Link
              className="text-[#002864] text-[15px] underline-offset-8 leading-4 hover:underline"
              href="/"
              title="Delosi - Inicio"
            >
              Inicio
            </Link>
            <Link
              className="text-[#002864] text-[15px] underline-offset-8 leading-4 hover:underline"
              href="/challenge"
              title="Delosi - Reto Matriz"
            >
              Reto Matriz
            </Link>
          </div>

          <div className="min-w-[350px] flex gap-2 content-center items-center lg:justify-end">
            <a
              href="https://wa.me/+51930308970"
              title="Jonatan Iparraguirre"
              target="_blank"
              rel="noopener"
              className="flex items-center justify-center gap-1 rounded border-2 border-[#002864] bg-white px-5 ps-3.5 py-2.5 text-sm font-semibold text-[#002864] hover:bg-gray-100"
            >
              Jonatan Iparraguirre
            </a>
          </div>
        </div>
      </header>
    </div>
  )
}



