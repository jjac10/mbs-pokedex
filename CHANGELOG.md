# Changelog

Todos los cambios notables de este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere a [Versionado Semántico](https://semver.org/lang/es/).

## [0.1.1] - 2026-04-20

### Corregido
- Se incrementó la versión del proyecto para reflejar cambios posteriores a la entrega inicial.

## [0.1.0] - 2026-04-20

### Añadido
- Estructura base de Pokédex con Next.js (Pages Router).
- Cliente Axios compartido para consumir la PokeAPI.
- Página principal con `getStaticProps` para listar los primeros 151 Pokémon.
- Componente `PokemonCard` reutilizable para grid responsive.
- Ruta dinámica `/pokemon/[name]` con `getStaticPaths` y `getStaticProps`.
- Vista de detalle con tipos, habilidades y stats.
- Documentación inicial de instalación y ejecución en `/docs/setup.md`.
