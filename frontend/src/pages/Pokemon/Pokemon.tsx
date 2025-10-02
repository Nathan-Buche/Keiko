import styles from "./Pokemon.module.css"
import { Loader } from "../../components/Loader/Loader"
import React from "react"
import { useParams } from "react-router-dom"
import type { PokemonInfo } from "../../components/Pokemon"
import { PokemonDetailed } from "../../components/Pokemon"

async function fetchPokemonById(id: string) {
  const response = await fetch(`http://localhost:8000/pokemon/${id}`, { headers: { accept: "application/json" } })
  if (!response.ok) throw new Error("Failed to fetch")
  const pokemon = await response.json()
  return pokemon
}

export const Pokemon = () => {
  const [pokemon, updatePokemon] = React.useState<PokemonInfo>()
  const [isLoading, setIsLoading] = React.useState(true)
  const [fetchFailed, setFetchFailed] = React.useState(false)
  const params = useParams()

  console.log(params)

  React.useEffect(() => {
    const update = async () => {
      console.log("Fetching pokemon", params.id)
      const pokemon = await fetchPokemonById(params.id || "").catch(() => [setFetchFailed(true)])
      updatePokemon(pokemon)
      setIsLoading(false)
    }
    update()
  }, [params])

  return (
    <div className={styles.intro}>
      <div className={styles.pokemonDetailed}>
        {isLoading ? (
          <Loader />
        ) : fetchFailed || !pokemon ? (
          <div>Échec du chargement du pokémon</div>
        ) : (
          <PokemonDetailed
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            height={pokemon.height}
            weight={pokemon.weight}
          />
        )}
      </div>
    </div>
  )
}
