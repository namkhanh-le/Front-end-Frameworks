import { useEffect, useState } from 'react'

export default function useMoviesExample2() {
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('https://api.example.com/products')

        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`)
        }

        const data = await response.json()
        setProducts(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return { products, loading }
}
