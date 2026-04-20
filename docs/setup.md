# Setup inicial - Pokédex v0.1.1

## Requisitos
- Node.js 20+
- npm 10+

## Instalación
```bash
npm install
```

## Desarrollo
```bash
npm run dev
```

Aplicación disponible en `http://localhost:3000`.

## Build de producción
```bash
npm run build
npm run start
```

## Estructura principal
- `lib/axios.js`: instancia Axios para PokeAPI.
- `components/PokemonCard.js`: tarjeta reutilizable para cada Pokémon.
- `pages/index.js`: listado con `getStaticProps`.
- `pages/pokemon/[name].js`: detalle dinámico con `getStaticPaths` y `getStaticProps`.
