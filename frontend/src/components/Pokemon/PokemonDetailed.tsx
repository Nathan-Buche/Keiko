import { Animate } from "../Animate"
import styles from "./Pokemon.module.css"
import type { PokemonInfo } from "./PokemonInterface"

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

export const AnimatedPokemonDetailed = Animate(PokemonDetailed)
