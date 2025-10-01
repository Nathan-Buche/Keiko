import styles from "./Home.module.css"
import { Pokemon } from "../../components/Pokemon"
import React from "react"
import type { PokemonInfo } from "../../components/Pokemon"

function filterPokemonByName(pokeList: PokemonInfo[], name: string) {
  if (name === "") return pokeList
  return pokeList.filter(pokemon => pokemon.name.toLowerCase().includes(name.toLowerCase()))
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
