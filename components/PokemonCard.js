import Link from 'next/link';

// Tarjeta reutilizable para modo card y modo lista en la home.
export default function PokemonCard({ pokemon, viewMode = 'card' }) {
  const isListMode = viewMode === 'list';

  return (
    <Link
      href={`/pokemon/${pokemon.name}`}
      className={`block rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md ${
        isListMode ? 'hover:bg-slate-50' : 'hover:-translate-y-1'
      }`}
    >
      <article
        className={`text-center ${
          isListMode ? 'flex items-center gap-4 text-left' : 'flex flex-col items-center gap-3'
        }`}
      >
        <img
          src={pokemon.image}
          alt={pokemon.name}
          width={96}
          height={96}
          loading="lazy"
          className={`h-24 w-24 ${isListMode ? 'shrink-0' : ''}`}
        />
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">#{pokemon.id}</p>
          <h2 className="text-lg font-bold capitalize text-slate-800">{pokemon.name}</h2>
        </div>
      </article>
    </Link>
  );
}
