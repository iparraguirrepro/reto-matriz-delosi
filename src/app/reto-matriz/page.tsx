import BlockMatrizComponent from "@/components/block-matriz"
import { seoDescription as coreSeo } from "@/lib/constants"
import { Metadata } from "next"

const seoDescription = {
  title: 'Reto Matriz | IPARRAGUIRRE',
  description: 'Se tiene el requerimiento de crear una vista en Next.js con las mejores prác4cas tanto en el código como en SEO.',
}

export const metadata: Metadata = {
  ...seoDescription,
  openGraph: {
    title: seoDescription.title,
    description: seoDescription.description,
    siteName: seoDescription.title,
    images: coreSeo.ogImages,
    locale: 'es_PE',
    type: 'website',
  },
}

export default async function MatrizPage() {

  return (
    <div className="px-5">
      <div className="min-h-[300px] w-full">
        <h1 className="font-semibold py-2">Descripción</h1>
        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit deserunt deleniti porro quibusdam perferendis officia eaque voluptates perspiciatis minima quae consequatur neque, sed, necessitatibus qui laborum molestiae esse, inventore non.</p>

        <BlockMatrizComponent />
      </div>
    </div>
  )
}