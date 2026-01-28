"use client"

type BlockProps = {
  readonly matriz: number[][]
}

export default function BlockMatrizResultComponent({ matriz }: BlockProps) {
  return (
    <div className="flex flex-col relative top-4 pb-5 overflow-x-scroll w-full justify-center items-center">
      {
        matriz.map((item, index) => (
          <div className="flex" key={index}>
            {
              item.map((item, _index) => (
                <p className="text-black text-xs border border-black p-1 select-none cursor-default" key={_index}>{item}</p>
              ))
            }
          </div>
        ))
      }
    </div>
  )
}



