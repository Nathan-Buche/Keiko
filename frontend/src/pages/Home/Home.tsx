import styles from "./Home.module.css"
import { Pokemon } from "../../components/Pokemon"

const pokemonList = [
  { id: 7, name: "Carapuce" },
  { id: 8, name: "Carabaffe" },
  { id: 9, name: "Tortank" },
]

export const Home = () => {
  return (
    <div className={styles.intro}>
      <div>Pokédex</div>
      {pokemonList.map(({ name, id }) => (
        <Pokemon key={id} id={id} name={name} />
      ))}
    </div>
  )
}
