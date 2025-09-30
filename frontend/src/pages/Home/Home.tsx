import styles from "./Home.module.css"

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

export const Home = () => {
  return (
    <div className={styles.intro}>
      <div>Bienvenue sur ton futur pokédex !</div>
      <div>Tu vas pouvoir apprendre tout ce qu'il faut sur React et attraper des pokemons !</div>
      <div>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" alt="Carapuce" />
        <p>Name: Carapuce</p>
        <p>Number: 7</p>
      </div>
    </div>
  )
}
