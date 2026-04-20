import { useMemo, useState } from 'react';
import PokemonCard from '../components/PokemonCard';
import pokeApi from '../lib/axios';

export default function Home({ pokemons }) {
  const [viewMode, setViewMode] = useState('card');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPokemons = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    if (!normalizedSearch) {
      return pokemons;
    }

    return pokemons.filter((pokemon) => pokemon.name.includes(normalizedSearch));
  }, [pokemons, searchTerm]);

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10">
      <section className="mx-auto max-w-6xl">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-slate-800">Pokédex</h1>
          <p className="mt-2 text-slate-600">Primeros 151 Pokémon de Kanto</p>
        </header>

        <div className="mx-auto mb-6 max-w-md">
          <label htmlFor="pokemon-search" className="mb-2 block text-sm font-semibold text-slate-700">
            Buscar por nombre
          </label>
          <input
            id="pokemon-search"
            type="search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value.toLowerCase())}
            placeholder="Ej: pikachu"
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-800 shadow-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
          />
        </div>

        <div className="mb-6 flex items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => setViewMode('card')}
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
              viewMode === 'card'
                ? 'bg-slate-800 text-white shadow-sm'
                : 'bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50'
            }`}
            aria-pressed={viewMode === 'card'}
          >
            Modo tarjeta
          </button>
          <button
            type="button"
            onClick={() => setViewMode('list')}
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
              viewMode === 'list'
                ? 'bg-slate-800 text-white shadow-sm'
                : 'bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50'
            }`}
            aria-pressed={viewMode === 'list'}
          >
            Modo lista
          </button>
        </div>

        {filteredPokemons.length === 0 && (
          <p className="mb-6 text-center text-sm font-medium text-slate-600">
            No se encontraron Pokémon para "{searchTerm.trim()}".
          </p>
        )}

        <div
          className={
            viewMode === 'card'
              ? 'grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
              : 'flex flex-col gap-3'
          }
        >
          {filteredPokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} viewMode={viewMode} />
          ))}
        </div>
      </section>
    </main>
  );
}

export async function getStaticProps() {
  // Trae el listado base de los primeros 151 Pokémon.
  const { data } = await pokeApi.get('pokemon?limit=151&offset=0');

  // Enriquecemos cada item con id e imagen oficial para renderizar tarjetas.
  const pokemons = data.results.map((pokemon, index) => {
    const id = index + 1;

    return {
      id,
      name: pokemon.name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
    };
  });

  return {
    props: {
      pokemons,
    },
    revalidate: 86400,
  };
}
