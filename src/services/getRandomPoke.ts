import IRandomPokeData from "../interfaces/IRandomPokeData";

export default async function getRandomPoke(num: number): Promise<IRandomPokeData[]> {
  const randomPokeData: IRandomPokeData[] = [];
  for (let i = 0; i < num; i++) {
    const randomNumber = (Math.ceil(Math.random() * 700))
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
    const data = await response.json()
    const eachPoke: IRandomPokeData = {
      name: data.name,
      image: data.sprites.other["official-artwork"].front_default
    }
    randomPokeData.push(eachPoke)
  }
  await new Promise(resolve => setTimeout(resolve, 1000));
  return randomPokeData
}

