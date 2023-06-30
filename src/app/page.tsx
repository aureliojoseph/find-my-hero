'use client'

import { useState } from "react"
import { HeroProps } from "../types/hero"
import Search from "./components/search"
import Error from "./components/error"
import Hero from "./components/hero"
import Footer from "./components/footer"


export default function Home() {
  const [hero, setHero] = useState<HeroProps | null>(null)

  const [error, setError] = useState(false)

  const loadHero = async (heroName: string) => {
    setHero(null)
    setError(false)

    const res = await fetch(`https://gateway.marvel.com/v1/public/characters?name=${heroName}&ts=1&apikey=845be1ee6b25ea6fc794456d3856884b&hash=f36cfadb33fa56d0bf2130469003e5c5`)

    const data = await res.json()

    if (res.status === 404 || data.data.count === 0) {
      setError(true)
      return
    }

    const { name, description, thumbnail } = data.data.results[0]

    const heroData: HeroProps = {
      results: [
        {
          name,
          description,
          thumbnail
        }
      ]
    }

    setHero(heroData)
  }

  return (
    <div>
      <h1>Marvel Hero Finder</h1>
      <Search loadHero={loadHero} />
      {hero && <Hero {...hero} />}
      {error && <Error />}
      <Footer />
    </div>
  )
}
