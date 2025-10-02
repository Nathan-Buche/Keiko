import styles from "../Home/Home.module.css"
import { Pokemon } from "../../components/Pokemon"
import type { PokemonInfo } from "../../components/Pokemon"
import { Loader } from "../../components/Loader/Loader"
import React from "react"
import { useParams } from "react-router-dom"

async function fetchPokemonsById(id?: string) {
  if (id === undefined) throw new Error("No id provided")
  const response = await fetch(`http://localhost:8000/pokemons?page=${id}`, { headers: { accept: "application/json" } })
  if (!response.ok) throw new Error("Failed to fetch")
  const pokemons = await response.json()
  return pokemons
}

export const Pokedex = () => {
  const [pokemonList, updatePokemonList] = React.useState<PokemonInfo[]>([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [isError, setIsError] = React.useState(false)
  const params = useParams()
  console.log(params)
  React.useEffect(() => {
    const updatePokedexOrError = async () => {
      try {
        const pokemons = await fetchPokemonsById(params.id)
        updatePokemonList(pokemons)
      } catch (e) {
        setIsError(true)
      }
      setIsLoading(false)
    }
    updatePokedexOrError()
  }, [params])

  return (
    <div className={styles.intro}>
      <div>Pokédex</div>
      <div className={styles.pokemonContainer}>
        {isLoading ? (
          <Loader />
        ) : isError ? (
          <div>Échec du chargement des pokémons</div>
        ) : (
          pokemonList.map(({ name, id, height, weight }) => (
            <Pokemon key={id} id={id} name={name} height={height} weight={weight} />
          ))
        )}
      </div>
    </div>
  )
}
