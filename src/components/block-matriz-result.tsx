"use client"

import { Matriz } from "@/types/Matriz"

type BlockProps = {
  readonly matriz: Matriz
}

export default function BlockMatrizResultComponent({ matriz }: BlockProps) {
  return (
    <div className="flex flex-col h-full relative pb-5 w-full justify-center items-center">
      {
        matriz.map((item, index) => (
          <div className="flex" key={index}>
            {
              item.map((item, _index) => (
                <div className={
                  `text-black text-xs border w-[25px] text-center border-black p-1 select-none cursor-default ${!isNaN(Number(item)) && 'bg-blue-300'}`
                } key={_index}>{item}</div>
              ))
            }
          </div>
        ))
      }
    </div>
  )
}



