import React, { useEffect, useState } from "react"
import styles from "../styles/RandomPoke.module.scss"
import IRandomPokeData from "../interfaces/IRandomPokeData"
import getRandomPoke from "../services/getRandomPoke"
import PokeCardsSkeletons from "./skeletons/PokeCardsSkeletons"
import "react-loading-skeleton/dist/skeleton.css"
import { useNavigate } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import ErrorMessage from "./ErrorMessage"

export default function RandomPoke() {

  const navigate = useNavigate()
  const numberOfRendered: number = 8

  const {data, status} = useQuery(["randomPoke"], () => getRandomPoke(numberOfRendered))

  if (status === "loading") {
    return <PokeCardsSkeletons numberOfRendered={numberOfRendered} />
  }

  if (status === "error") {
    return <ErrorMessage />
  }


  function selectPoke(name: string): void {
    navigate("/SearchedPokemon/"+name)
  }

  return (
    <div className={styles.cardsContainer}>
      {data.map((pokeData, index) => { 
        return (
          <div onClick={() => selectPoke(pokeData.name)} key={index} className={styles.card}>
            <img src={pokeData.image} alt="" />
            <p>{(pokeData.name).slice(0, 1).toUpperCase() + (pokeData.name).slice(1).toLowerCase()}</p>
          </div>
        )
      })}
  </div>
  )
};

