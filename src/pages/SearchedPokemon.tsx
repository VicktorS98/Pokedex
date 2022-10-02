import React, { useEffect, useState } from "react"
import styles from "../styles/SearchedPokemon.module.scss"
import { useParams } from "react-router-dom"
import IIndivPokeData from "../interfaces/IIndivPokeData"
import getSearched from "../services/getSearched"
import { useQuery } from "@tanstack/react-query"
import pokemonBgColor from "../colors/pokemonBgColor"
import ErrorMessage from "../components/ErrorMessage"
import IndivPokeSkeleton from "../components/skeletons/IndivPokeSkeleton"

export default function SearchedPokemon() {

  let params = useParams()
  const [searchedName, setSearchedName] = useState(params.name)

  useEffect(() => {
    setSearchedName(params.name)
  }, [params.name])

  const {data, status} = useQuery(["indivPoke", searchedName], () => getSearched(params.name))

  if (status === "loading") {
    return <IndivPokeSkeleton />
  }

  if (status === "error") {
    return <ErrorMessage />
  }

  // capitalizes first letter of Pokémon´s name
  function firstLetterCap(pokeName: string) {
    return pokeName.slice(0,1).toUpperCase() + pokeName.slice(1).toLowerCase()
  }

  // changes color to white if the type has dark color(darker backgrounds cause issues with visibility)
  const pokeType: string = data.types[0].type.name
  const changeColorIfDark: string | undefined = pokeType === "dark" || pokeType === "ghost" || pokeType === "rock" || pokeType === "water" ? "white" : ""

  return (
    <div style={{backgroundColor: pokemonBgColor(data.types[0].type.name), color: changeColorIfDark}} className={styles.searchedPokemonContainer}>
      <p className={styles.name}>{firstLetterCap(data.name)}</p>
      <img src={data.image} alt="poke-image" />
      <div className={styles.statsContainer}>
        <p><span>HP</span> {data.hp}</p>
        <p><span>EXP</span> {data.exp}</p>
        <p><span>Height</span> {data.height / 10}m</p>
        <p><span>Weight</span> {data.weight / 10}kg</p>
        <p><span>Speed</span> {data.speed}</p>
        {data.types.length > 1 ? <p><span>Type</span> {data.types[0].type.name} / {data.types[1].type.name}</p> : <p><span>Type</span> {data.types[0].type.name}</p>}
      </div>
    </div>
  )
};