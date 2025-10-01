interface Props {
  name: string
  id: number
}

export const Pokemon = ({ name, id }: Props) => {
  return (
    <div>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name} />
      <p>Name: {name}</p>
      <p>Number: {id}</p>
    </div>
  )
}
