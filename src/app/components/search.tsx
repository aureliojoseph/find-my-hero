type SearchProps = {
  loadHero: (heroName: string) => Promise<void>
}

import { useState, KeyboardEvent } from 'react'
import { BsSearch } from 'react-icons/bs'
import classes from './search.module.scss'

const Search = ({loadHero}: SearchProps) => {
  const [heroName, setheroName] = useState('')

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      loadHero(heroName)
    }
  }

  return (
    <div className={classes.search}>
      <h2>Search for a Hero</h2>
      <div className={classes.search_container}>
        <input
          type="text"
          placeholder="Type Hero Name"
          onChange={(e) => setheroName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={() => loadHero(heroName)}>
          <BsSearch />
        </button>
      </div>
    </div>
  )
}

export default Search