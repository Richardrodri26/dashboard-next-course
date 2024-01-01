import React from 'react'
import { PokemonCard, SimplePokemon } from '..'
import Image from 'next/image';

interface Props {
  pokemons: SimplePokemon[];
}

export const PokemonGrid = ({ pokemons }: Props) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">

        {
          pokemons.map(pokemon => (
            // <Image
            //   key={pokemon.id}
            //   src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            //   width={100}
            //   height={100}
            //   alt={pokemon.name}
            // />

            // <span key={pokemon.id}>asd</span>

            <PokemonCard pokemon={pokemon} key={pokemon.id} />
          ))
        }

      </div>
  )
}
