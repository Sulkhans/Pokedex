
# Pokédex
Pokémon database made with Vite React, React router, Tailwind CSS, PokéAPI.

Pokémon is a series of video games developed by Game Freak and published by Nintendo.

## Features
- Gen IX support
- Base stats
- Abilities
- Natures
- Moves
- Items
- Regional forms



## API Reference

#### PokeAPI V2
This is a consumption-only API — only the HTTP GET method is available on resources.

No authentication is required to access this API, and all resources are fully open and available.

```http
  GET api/v2/{endpoint}
```
Calling any api endpoint without a resource id or name will return a paginated list of available resources for that api. By default, a list 'page' will contain up to 20 resources.


```http
  GET api/v2/pokemon/{id or name}
```

| Parameter | Type     | Description                                |
| :-------- | :------- | :----------------------------------------- |
| `id`      | `integer`| The identifier for this pokémon resource.  |
| `name`    | `string` | The name for this pokémon resource.        |

