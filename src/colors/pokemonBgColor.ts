const pokemonBgColor = (pokeType: string) => {
  if (pokeType === "electric") {
    return "#e0ce07"
  } else if (pokeType === "rock") {
    return "#361f19"
  } else if (pokeType === "fire") {
    return "#dd4e28"
  } else if (pokeType === "psychic") {
    return "#8f037e"
  } else if (pokeType === "poison") {
    return "#5c02c9"
  } else if (pokeType === "dragon") {
    return "#266d85"
  } else if (pokeType === "fighting") {
    return "#8a310b"
  } else if (pokeType === "grass") {
    return "#248f11"
  } else if (pokeType === "bug") {
    return "#12520b"
  } else if (pokeType === "normal") {
    return "#694459"
  } else if (pokeType === "dark") {
    return "#1a1a1c"
  } else if (pokeType === "fairy") {
    return "#960649"
  } else if (pokeType === "flying") {
    return "#2c465c"
  } else if (pokeType === "ghost") {
    return "#1a0d33"
  } else if (pokeType === "ice") {
    return "#12a2b5"
  } else if (pokeType === "water") {
    return "#172ea3"
  } else if (pokeType === "steel") {
    return "#404a40"
  } else if (pokeType === "ground") {
    return "#966509"
  }
}

export default pokemonBgColor