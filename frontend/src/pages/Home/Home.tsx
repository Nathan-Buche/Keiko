import styles from "./Home.module.css"
import { Pokemon } from "../../components/Pokemon"

export const Home = () => {
  return (
    <div className={styles.intro}>
      <div>Bienvenue sur ton futur pokédex !</div>
      <div>Tu vas pouvoir apprendre tout ce qu'il faut sur React et attraper des pokemons !</div>
      <Pokemon id={7} name="Carapuce" />
      <Pokemon id={8} name="Carabaffe" />
      <Pokemon id={9} name="Tortank" />
    </div>
  )
}
