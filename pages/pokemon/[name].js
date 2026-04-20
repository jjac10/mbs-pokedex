import Link from 'next/link';
import pokeApi from '../../lib/axios';

export default function PokemonDetail({ pokemon }) {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10">
      <section className="mx-auto max-w-3xl rounded-2xl bg-white p-6 shadow">
        <Link href="/" className="text-sm font-medium text-blue-600 hover:underline">
          ← Volver a la Pokédex
        </Link>

        <div className="mt-6 flex flex-col items-center gap-4 text-center">
          <img
            src={pokemon.image}
            alt={pokemon.name}
            width={180}
            height={180}
            className="h-44 w-44"
          />
          <h1 className="text-3xl font-extrabold capitalize text-slate-800">
            {pokemon.name} <span className="text-slate-400">#{pokemon.id}</span>
          </h1>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <article className="rounded-lg border border-slate-200 p-4">
            <h2 className="mb-2 text-sm font-bold uppercase tracking-wide text-slate-500">Tipos</h2>
            <ul className="space-y-1">
              {pokemon.types.map((type) => (
                <li key={type} className="capitalize text-slate-700">
                  {type}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-lg border border-slate-200 p-4">
            <h2 className="mb-2 text-sm font-bold uppercase tracking-wide text-slate-500">Habilidades</h2>
            <ul className="space-y-1">
              {pokemon.abilities.map((ability) => (
                <li key={ability} className="capitalize text-slate-700">
                  {ability.replace('-', ' ')}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-lg border border-slate-200 p-4">
            <h2 className="mb-2 text-sm font-bold uppercase tracking-wide text-slate-500">Stats</h2>
            <ul className="space-y-1">
              {pokemon.stats.map((stat) => (
                <li key={stat.name} className="flex items-center justify-between gap-2 text-slate-700">
                  <span className="capitalize">{stat.name.replace('-', ' ')}</span>
                  <strong>{stat.value}</strong>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </main>
  );
}

export async function getStaticPaths() {
  // Define los 151 paths para pre-render estático por nombre.
  const { data } = await pokeApi.get('pokemon?limit=151&offset=0');

  const paths = data.results.map((pokemon) => ({
    params: { name: pokemon.name },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Obtiene el detalle completo del Pokémon para la vista individual.
  const { data } = await pokeApi.get(`pokemon/${params.name}`);

  const pokemon = {
    id: data.id,
    name: data.name,
    image:
      data.sprites.other['official-artwork'].front_default ||
      data.sprites.front_default,
    types: data.types.map((item) => item.type.name),
    abilities: data.abilities.map((item) => item.ability.name),
    stats: data.stats.map((item) => ({
      name: item.stat.name,
      value: item.base_stat,
    })),
  };

  return {
    props: {
      pokemon,
    },
    revalidate: 86400,
  };
}
