# Modo de visualización en la página principal

## Resumen
Se agregó un selector de visualización en la home para alternar entre:

- **Modo tarjeta**: vista actual en grid.
- **Modo lista**: elementos en filas horizontales.

## Implementación

### `pages/index.js`
- Se añadió estado local `viewMode` con `useState`.
- Se incorporaron dos botones para cambiar entre modos.
- El contenedor de Pokémon cambia su layout según el modo:
  - `card`: grid responsive.
  - `list`: columna de filas.

### `components/PokemonCard.js`
- El componente ahora recibe `viewMode`.
- En modo lista, la tarjeta adapta el layout a formato horizontal.
- En modo tarjeta, mantiene el comportamiento original.

## Resultado
El usuario puede cambiar visualmente la forma de explorar la lista de Pokémon sin recargar la página.
