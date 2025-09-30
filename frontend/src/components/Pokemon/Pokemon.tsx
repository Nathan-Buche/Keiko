// const linkBase:string ="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

// interface Pokemon {
//   name: string;
//   number: number;
//   imgLink: string;
// }

// let Carapuce:Pokemon = { name:"Carapuce", number:7, imgLink:linkBase};
// Carapuce.imgLink+= Carapuce.number + ".png"

// <div>
//   <img src=${Carapuce.imgLink} alt="Carapuce" />
//   <p>Name: ${Carapuce.name}</p>
//   <p>Number: ${Carapuce.number}</p>
// </div>

export const Pokemon = () => {
  return (
    <div>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" alt="Carapuce" />
      <p>Name: Carapuce</p>
      <p>Number: 7</p>
    </div>
  )
}
