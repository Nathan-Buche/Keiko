import styles from "./Home.module.css"
import { Pokemon } from "../../components/Pokemon"
import React from "react"

interface PokemonInfo {
  id: number
  name: string
  height: number
  weight: number
}

function filterPokemonByName(pokeList: PokemonInfo[], filterValue: string) {
  return pokeList.filter(pokemon => pokemon.name.toLowerCase().includes(filterValue.toLowerCase()))
}

function fetchPokemons() {
  return fetch("http://localhost:8000/pokemons", { headers: { accept: "application/json" } }).then(response =>
    response.json(),
  )
}

export const Home = () => {
  const [pokemonFilterValue, setFilterValue] = React.useState("")
  const [pokemonList, updatePokemonList] = React.useState<PokemonInfo[]>([])

  React.useEffect(() => {
    fetchPokemons().then(data => {
      updatePokemonList(data)
    })
  }, [])

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(event.target.value)
  }
  return (
    <div className={styles.intro}>
      <div>Pokédex</div>
      <input
        className={styles.input}
        onChange={onInputChange}
        value={pokemonFilterValue}
        placeholder="Cherchez un pokémon"
      />
      {filterPokemonByName(pokemonList, pokemonFilterValue).map(({ name, id, height, weight }) => (
        <Pokemon key={id} id={id} name={name} height={height} weight={weight} />
      ))}
    </div>
  )
}
