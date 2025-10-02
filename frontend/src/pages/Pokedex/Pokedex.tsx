import styles from "../Home/Home.module.css"
import { Pokemon } from "../../components/Pokemon"
import type { PokemonInfo } from "../../components/Pokemon"
import { Loader } from "../../components/Loader/Loader"
import React from "react"
import { useNavigate, useParams } from "react-router-dom"

async function fetchPokemonsByPageNumber(pageNumber?: string) {
  if (pageNumber === undefined) throw new Error("No pageNumber provided")
  const response = await fetch(`http://localhost:8000/pokemons?page=${pageNumber}`, {
    headers: { accept: "application/json" },
  })
  if (!response.ok) throw new Error("Failed to fetch")
  const pokemons = await response.json()
  return pokemons
}

export const Pokedex = () => {
  const [pokemonList, updatePokemonList] = React.useState<PokemonInfo[]>([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [isError, setIsError] = React.useState(false)
  const params = useParams()
  const navigate = useNavigate()
  const currentPage = Number(params.pageNumber) || 0

  React.useEffect(() => {
    const updatePokedexOrError = async () => {
      try {
        const pokemons = await fetchPokemonsByPageNumber(params.pageNumber)
        updatePokemonList(pokemons)
      } catch (e) {
        setIsError(true)
      }
      setIsLoading(false)
    }
    updatePokedexOrError()
  }, [params])

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      navigate(`/pokedex/${currentPage - 1}`)
    }
  }

  const goToNextPage = () => {
    navigate(`/pokedex/${currentPage + 1}`)
  }

  return (
    <div className={styles.intro}>
      <div>Pokédex</div>
      <div className={styles.navigation}>
        <button onClick={goToPreviousPage} className={styles.arrow} disabled={currentPage === 0}>
          ←
        </button>
        <button onClick={goToNextPage} className={styles.arrow}>
          →
        </button>
      </div>
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
