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
      <div>Bienvenue sur ton futur pokédex !</div>
      <div>Tu vas pouvoir apprendre tout ce qu'il faut sur React et attraper des </div>
      {pokemonList.map(({ name, id }) => (
        <Pokemon key={id} id={id} name={name} />
      ))}
    </div>
  )
}
