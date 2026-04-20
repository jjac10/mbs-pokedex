# Búsqueda por nombre en la Pokédex

## Resumen

Se añadió un buscador en la página principal para filtrar en tiempo real los Pokémon por nombre.

## Implementación

- Se incorporó un estado `searchTerm` en `pages/index.js` para guardar el texto ingresado.
- Se creó `filteredPokemons` con `useMemo` para optimizar el filtrado sin recalcular en cada render innecesariamente.
- El filtro compara el término en minúsculas contra `pokemon.name`.
- Se agregó un mensaje cuando no hay resultados para el término actual.

## Uso

1. Ir a la home de la Pokédex.
2. Escribir el nombre o parte del nombre de un Pokémon en el input de búsqueda.
3. La lista se actualiza automáticamente conforme escribes.
