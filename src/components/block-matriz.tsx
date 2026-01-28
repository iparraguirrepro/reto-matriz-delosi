"use client"

import { useEffect, useState } from "react"
import { Loader2 } from "lucide-react"
import BlockMatrizResultComponent from "./block-matriz-result"

export default function BlockMatrizComponent() {
  const [isClient, setIsClient] = useState(false)
  const iMatriz = [[4, 5, 3, 4,], [6, 7, 3, 4]];
  const isLarge = iMatriz.length && iMatriz[0]?.length > 8;

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <div className="py-5">
      <div>
        <label className="text-black font-semibold text-sm" htmlFor="">
          Matriz
          <textarea rows={3} className="w-full px-2 py-3 border border-gray-400 bg-white rounded" placeholder="Ingresa la matriz" />
        </label>
      </div>

      <div className={`flex my-2 justify-between ${isLarge && 'flex-col'}`}>
        <div className={`min-h-[100px] p-2 bg-gray-100 ${isLarge ? 'w-full' : 'w-1/2'}`}>
          <p className="text-sm text-black font-semibold">Input:</p>
          <div className="overflow-hidden">
            <BlockMatrizResultComponent matriz={iMatriz} />
          </div>
        </div>
        <div className={`min-h-[100px] p-2 bg-red-100 ${isLarge ? 'w-full' : 'w-1/2'}`}>
          <p className="text-sm text-black font-semibold">Output:</p>
          <div className="overflow-hidden">
            <BlockMatrizResultComponent matriz={iMatriz} />
          </div>
        </div>
      </div>

      <p className="flex flex-col text-black text-xs py-2">
        Resultado anti-horario (90 grados): <span className="font-semibold break-words">{JSON.stringify(iMatriz)}</span>
      </p>

    </div>
  )
}



