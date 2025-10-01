interface Props {
  name: string
  id: number
  height: number
  weight: number
}

export const Pokemon = ({ name, id, height, weight }: Props) => {
  console.log("Rendering Pokemon:", name)
  return (
    <div>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name} />
      <p>Name: {name}</p>
      <p>Number: {id}</p>
      <p>Height: {height}</p>
      <p>Weight: {weight}</p>
    </div>
  )
}
