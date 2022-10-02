import IIndivPokeData from "../interfaces/IIndivPokeData"

export default async function getSearched(name: undefined | string): Promise<IIndivPokeData> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  const data = await response.json()
  await new Promise(resolve => setTimeout(resolve, 1500));

  return {
    name: data.name,
    image: data.sprites.other["official-artwork"].front_default,
    types: data.types,
    hp: data.stats[0].base_stat,
    exp: data.base_experience,
    speed: data.stats[5].base_stat,
    /* specialAttack: data.stats[3].base_stat,
    specialDefense: data.stats[4].base_stat */
    weight: data.weight,
    height: data.height
  } 

}