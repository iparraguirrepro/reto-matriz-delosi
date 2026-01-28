"use client"

import { useEffect, useState } from "react"
import { Loader2 } from "lucide-react"
import { useForm } from "react-hook-form";

import BlockMatrizResultComponent from "./block-matriz-result"
import { FormMatriz } from "@/app/types/Matriz";
import { FORM_MESSAGES } from "@/lib/messages";


export default function BlockMatrizComponent() {
  const [isClient, setIsClient] = useState(false)
  const iMatriz = [[4, 5, 3, 4,], [6, 7, 3, 4]];
  const isLarge = iMatriz.length && iMatriz[0]?.length > 8;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormMatriz>(
    {
      mode: 'onChange'
    }
  );

  const doSubmit = (data: FormMatriz) => {
    console.log(data);
  };

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
      <form onSubmit={handleSubmit(doSubmit)}>
        <label className="text-black font-semibold text-sm" htmlFor="">
          Matriz
          <textarea rows={3}
            {...register("matriz", {
              validate: (value: any) => {
                try {
                  const parsed = JSON.parse(value);
                  const isValid = Array.isArray(parsed) && parsed.filter(
                    (inner: any) =>
                      Array.isArray(inner) &&
                      inner.filter((num) => typeof num === "number").length === inner.length
                  ).length === parsed.length

                  return isValid || FORM_MESSAGES.inputError
                } catch {
                  return FORM_MESSAGES.inputError;
                }
              },
            })}
            className={`w-full px-2 py-3 border border-gray-400  rounded ${errors.matriz ? 'bg-red-100' : 'bg-white'}`}
            placeholder="Por ejemplo: [ [1,2], [3,4] ]" />
          {errors.matriz && <p className="mb-4 text-xs text-red-500">{errors.matriz.message}</p>}
        </label>

        <button type="submit" disabled={!!errors.matriz} className={`px-3 py-2 bg-black text-white text-sm font-semibold ${!!errors.matriz && 'opacity-50'}`}>Procesar Matriz</button>
      </form>

      <div className={`flex mt-5 mb-2 justify-between ${isLarge && 'flex-col'}`}>
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



