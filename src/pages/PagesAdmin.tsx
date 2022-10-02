import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import SearchedPokemon from "./SearchedPokemon"

export default function PagesAdmin() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/SearchedPokemon/:name" element={<SearchedPokemon />} />
    </Routes>
  )
};