import { seoDescription } from "@/lib/constants"
import { Metadata } from "next"

export const metadata: Metadata = {
  ...seoDescription,
  openGraph: {
    title: seoDescription.title,
    description: seoDescription.description,
    siteName: seoDescription.title,
    images: [
      {
        url: 'https://reto-delosi/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Open Graph',
      },
    ],
    locale: 'es_PE',
    type: 'website',
  },
}

export default async function HomePage() {

  return (
    <div className="px-5 py-3">
      <h1 className="font-semibold py-2">Descripción</h1>
      <p className="text-sm">Se tiene el requerimiento de crear una vista en Next.js con las mejores prácticas tanto en el código
        como en SEO.
        <br /> <br />
        En base a ello, se requiere implementar una vista donde se pueda ingresar un array de arrays de
        números que conformen una matriz de NxN el ingreso de este array que sea dinámico, y se devuelva
        la misma matriz que represente la imagen, pero rotada en sentido anti-horario (90 grados). Se debe
        controlar  correctamente  los  errores.  Considerar  que  esta  primera  versión  será  la  base  para  que
        posteriormente  otros  desarrolladores  puedan  incluir  los  demás  requerimientos  que  aún  están  en
        definición, por lo que la solución debe garan4zar la mantenibilidad y escalamiento.</p>
    </div>
  )
}