import styles from "./Home.module.css"
import { Pokemon } from "../../components/Pokemon"
import { Loader } from "../../components/Loader/Loader"
import React from "react"
import type { PokemonInfo } from "../../components/Pokemon"

function wait(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

function filterPokemonByName(pokeList: PokemonInfo[], name: string) {
  if (name === "") return pokeList
  return pokeList.filter(pokemon => pokemon.name.toLowerCase().includes(name.toLowerCase()))
}

async function fetchPokemons() {
  const response = await fetch("http://localhost:8000/pokemons", { headers: { accept: "application/json" } })
  if (!response.ok) throw new Error("Failed to fetch")
  const pokemons = await response.json()
  await wait(400) // Simulate a slow network
  return pokemons
}

export const Home = () => {
  const [pokemonFilterValue, setFilterValue] = React.useState("")
  const [pokemonList, updatePokemonList] = React.useState<PokemonInfo[]>([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [fetchFailed, setFetchFailed] = React.useState(false)

  React.useEffect(() => {
    const update = async () => {
      const pokemons = await fetchPokemons().catch(() => [setFetchFailed(true)])
      updatePokemonList(pokemons)
      setIsLoading(false)
    }
    update()
  }, [])

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(event.target.value)
  }
  const pokemonToDisplay = filterPokemonByName(pokemonList, pokemonFilterValue)

  return (
    <div className={styles.intro}>
      <div>Pokédex</div>
      <input
        className={styles.input}
        onChange={onInputChange}
        value={pokemonFilterValue}
        placeholder="Cherchez un pokémon"
      />
      <div className={styles.pokemonContainer}>
        {isLoading ? (
          <Loader />
        ) : fetchFailed ? (
          <div>Échec du chargement des pokémons</div>
        ) : (
          pokemonToDisplay.map(({ name, id, height, weight }) => (
            <Pokemon key={id} id={id} name={name} height={height} weight={weight} />
          ))
        )}
      </div>
    </div>
  )
}
