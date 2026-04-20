import Link from 'next/link';

// Tarjeta simple y reutilizable para listar Pokémon en el grid principal.
export default function PokemonCard({ pokemon }) {
  return (
    <Link
      href={`/pokemon/${pokemon.name}`}
      className="block rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <article className="flex flex-col items-center gap-3 text-center">
        <img
          src={pokemon.image}
          alt={pokemon.name}
          width={96}
          height={96}
          loading="lazy"
          className="h-24 w-24"
        />
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">#{pokemon.id}</p>
          <h2 className="text-lg font-bold capitalize text-slate-800">{pokemon.name}</h2>
        </div>
      </article>
    </Link>
  );
}
