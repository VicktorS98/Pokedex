import React, { useState } from "react"
import styles from "../styles/SearchBar.module.scss"
import { Link, NavigateFunction, useNavigate } from "react-router-dom"
import {GrSearch} from "react-icons/gr"

export default function SearchBar() {

  const [userInput, setUserInput] = useState<string>("")
  const navigate = useNavigate()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    navigate("/SearchedPokemon/"+userInput.toLowerCase())
  }

  function handleUserInput(e: React.ChangeEvent<HTMLInputElement>) {
    setUserInput(e.target.value)
  }

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <input value={userInput} onChange={handleUserInput} type="text" name="search" autoFocus />
        <button>
          <Link to={`/SearchedPokemon/${userInput.toLowerCase()}`}><GrSearch /></Link>
        </button>
      </form>
    </div>
  )
};