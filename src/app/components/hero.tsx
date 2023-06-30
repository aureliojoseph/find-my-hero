import { HeroProps } from '../../types/hero'
import Link from 'next/link'
import classes from './hero.module.scss'

export default function Hero ({
  results: [{
    name,
    description,
    thumbnail
  }]
}: HeroProps) {
  const imageUrl = `${thumbnail.path}.${thumbnail.extension}`

  return (
    <div className={classes.hero}>
      <img src={imageUrl} alt={description} />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  )
}