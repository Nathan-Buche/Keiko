import styles from "./Pokemon.module.css"

export interface PokemonInfo {
  name: string
  id: number
  height: number
  weight: number
}

export const Pokemon = ({ name, id, height, weight }: PokemonInfo) => {
  console.log("Rendering Pokemon:", name)
  return (
    <div className={styles.pokemon}>
      <p>{name}</p>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name} />
      <p>Id: {id}</p>
      <p>Weight: {weight} kg</p>
      <p>Height: {height} cm</p>
    </div>
  )
}
