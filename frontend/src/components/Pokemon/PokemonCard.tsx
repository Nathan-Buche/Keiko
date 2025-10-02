import styles from "./Pokemon.module.css"
import { Link } from "react-router-dom"
import type { PokemonInfo } from "./PokemonInterface"

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
