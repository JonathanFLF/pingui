import { useEffect, useState } from "react"
import confetti from "canvas-confetti"

const GIF_URL =
  "https://i.pinimg.com/originals/b3/66/20/b366201407b7d06f4622d1f5d30beec4.gif"

export const useChangeElements = () => {
  const [textP] = useState(
    "Me gustas, y me gusta aún más saber que formas parte de mi vida."
  )
  const [image, setImage] = useState(GIF_URL)

  // Confetti solo una vez
  useEffect(() => {
    confetti()
  }, [])

  // Reiniciar GIF cada 2 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setImage(`${GIF_URL}?t=${Date.now()}`)
    }, 2000)

    return () => clearInterval(interval) // limpiar al desmontar
  }, [])

  return { textP, image }
}
