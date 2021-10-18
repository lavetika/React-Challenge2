import React from "react";
import PokeCard from "./PokeCard";
import { mockPokemonsData } from "../mock/pokeData";

function PokeCards() {
  return (
    <div>
      {mockPokemonsData
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((pokemon) => {
          return (
            <PokeCard
              key={pokemon.name}
              name={pokemon.name}
              sprites={pokemon.sprites}
              video={pokemon.videoLink}
            />
          );
        })}
    </div>
  );
}

export default PokeCards;
