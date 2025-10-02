import styles from "./Pokemon.module.css"

import { Link } from "react-router-dom"

export interface PokemonInfo {
  name: string
  id: number
  height: number
  weight: number
}

export const Pokemon = ({ name, id, height, weight }: PokemonInfo) => {
  return (
    <Link to={`/pokemon/${id}`}>
      <div className={styles.pokemon}>
        <p>{name}</p>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name} />
        <p>Id: {id}</p>
        <p>Weight: {weight} kg</p>
        <p>Height: {height} cm</p>
      </div>
    </Link>
  )
}

export const PokemonDetailed = ({ name, id, height, weight }: PokemonInfo) => {
  return (
    <div>
      <p className={styles.pokemonName}>{name}</p>
      <div className={styles.pokemonRow}>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name} />
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`}
          alt={name}
        />
      </div>
      <div className={styles.pokemonRow}>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`}
          alt={name}
        />
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${id}.png`}
          alt={name}
        />
      </div>
      <div className={styles.pokemonStats}>
        <p>Weight: {weight} kg</p>
        <p>Height: {height} cm</p>
        <p>Id: {id}</p>
      </div>
    </div>
  )
}
