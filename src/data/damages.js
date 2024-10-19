export const damageTaken = {
  normal: {
    "0x": ["ghost"],
    "0.25x": [],
    "0.5x": [],
    "2x": ["fighting"],
    "4x": [],
  },
  fire: {
    "0x": [],
    "0.25x": [],
    "0.5x": ["fire", "grass", "ice", "bug", "steel", "fairy"],
    "2x": ["water", "ground", "rock"],
    "4x": [],
  },
  water: {
    "0x": [],
    "0.25x": [],
    "0.5x": ["fire", "water", "ice", "steel"],
    "2x": ["electric", "grass"],
    "4x": [],
  },
  electric: {
    "0x": [],
    "0.25x": [],
    "0.5x": ["electric", "flying", "steel"],
    "2x": ["ground"],
    "4x": [],
  },
  grass: {
    "0x": [],
    "0.25x": [],
    "0.5x": ["water", "electric", "grass", "ground"],
    "2x": ["fire", "ice", "poison", "flying", "bug"],
    "4x": [],
  },
  ice: {
    "0x": [],
    "0.25x": [],
    "0.5x": ["ice"],
    "2x": ["fire", "fighting", "rock", "steel"],
    "4x": [],
  },
  fighting: {
    "0x": [],
    "0.25x": [],
    "0.5x": ["bug", "rock", "dark"],
    "2x": ["flying", "psychic", "fairy"],
    "4x": [],
  },
  poison: {
    "0x": [],
    "0.25x": [],
    "0.5x": ["grass", "fighting", "poison", "bug", "fairy"],
    "2x": ["ground", "psychic"],
    "4x": [],
  },
  ground: {
    "0x": ["electric"],
    "0.25x": [],
    "0.5x": ["poison", "rock"],
    "2x": ["water", "grass", "ice"],
    "4x": [],
  },
  flying: {
    "0x": ["ground"],
    "0.25x": [],
    "0.5x": ["grass", "fighting", "bug"],
    "2x": ["electric", "ice", "rock"],
    "4x": [],
  },
  psychic: {
    "0x": [],
    "0.25x": [],
    "0.5x": ["fighting", "psychic"],
    "2x": ["bug", "ghost", "dark"],
    "4x": [],
  },
  bug: {
    "0x": [],
    "0.25x": [],
    "0.5x": ["grass", "fighting", "ground"],
    "2x": ["fire", "flying", "rock"],
    "4x": [],
  },
  rock: {
    "0x": [],
    "0.25x": [],
    "0.5x": ["normal", "fire", "poison", "flying"],
    "2x": ["water", "grass", "fighting", "ground", "steel"],
    "4x": [],
  },
  ghost: {
    "0x": ["normal", "fighting"],
    "0.25x": [],
    "0.5x": ["poison", "bug"],
    "2x": ["ghost", "dark"],
    "4x": [],
  },
  dragon: {
    "0x": [],
    "0.25x": [],
    "0.5x": ["fire", "water", "electric", "grass"],
    "2x": ["ice", "dragon", "fairy"],
    "4x": [],
  },
  dark: {
    "0x": [],
    "0.25x": [],
    "0.5x": ["ghost", "dark", "psychic"],
    "2x": ["fighting", "bug", "fairy"],
    "4x": [],
  },
  steel: {
    "0x": ["poison"],
    "0.25x": [],
    "0.5x": [
      "normal",
      "grass",
      "ice",
      "flying",
      "psychic",
      "bug",
      "rock",
      "dragon",
      "steel",
      "fairy",
    ],
    "2x": ["fire", "fighting", "ground"],
    "4x": [],
  },
  fairy: {
    "0x": ["dragon"],
    "0.25x": [],
    "0.5x": ["fighting", "bug", "dark"],
    "2x": ["poison", "steel"],
    "4x": [],
  },
  "fire-normal": {
    "0x": ["ghost"],
    "0.25x": [],
    "0.5x": ["fire", "grass", "ice", "bug", "steel", "fairy"],
    "2x": ["water", "fighting", "ground", "rock"],
    "4x": [],
  },
  "normal-water": {
    "0x": ["ghost"],
    "0.25x": [],
    "0.5x": ["fire", "water", "ice", "steel"],
    "2x": ["electric", "grass", "fighting"],
    "4x": [],
  },
  "grass-normal": {
    "0x": ["ghost"],
    "0.25x": [],
    "0.5x": ["water", "electric", "grass", "ground"],
    "2x": ["fire", "ice", "fighting", "poison", "flying", "bug"],
    "4x": [],
  },
  "electric-normal": {
    "0x": ["ghost"],
    "0.25x": [],
    "0.5x": ["electric", "flying", "steel"],
    "2x": ["fighting", "ground"],
    "4x": [],
  },
  "ice-normal": {
    "0x": ["ghost"],
    "0.25x": [],
    "0.5x": ["ice"],
    "2x": ["fire", "rock", "steel"],
    "4x": ["fighting"],
  },
  "fighting-normal": {
    "0x": ["ghost"],
    "0.25x": [],
    "0.5x": ["bug", "rock", "dark"],
    "2x": ["fighting", "flying", "psychic", "fairy"],
    "4x": [],
  },
  "normal-poison": {
    "0x": ["ghost"],
    "0.25x": [],
    "0.5x": ["grass", "poison", "bug", "fairy"],
    "2x": ["ground", "psychic"],
    "4x": [],
  },
  "ground-normal": {
    "0x": ["electric", "ghost"],
    "0.25x": [],
    "0.5x": ["poison", "rock"],
    "2x": ["water", "grass", "ice", "fighting"],
    "4x": [],
  },
  "flying-normal": {
    "0x": ["ground", "ghost"],
    "0.25x": [],
    "0.5x": ["grass", "bug"],
    "2x": ["electric", "ice", "rock"],
    "4x": [],
  },
  "normal-psychic": {
    "0x": ["ghost"],
    "0.25x": [],
    "0.5x": ["psychic"],
    "2x": ["bug", "dark"],
    "4x": [],
  },
  "bug-normal": {
    "0x": ["ghost"],
    "0.25x": [],
    "0.5x": ["grass", "ground"],
    "2x": ["fire", "flying", "rock"],
    "4x": [],
  },
  "normal-rock": {
    "0x": ["ghost"],
    "0.25x": [],
    "0.5x": ["normal", "fire", "poison", "flying"],
    "2x": ["water", "grass", "ground", "steel"],
    "4x": ["fighting"],
  },
  "ghost-normal": {
    "0x": ["normal", "fighting", "ghost"],
    "0.25x": [],
    "0.5x": ["poison", "bug"],
    "2x": ["dark"],
    "4x": [],
  },
  "dragon-normal": {
    "0x": ["ghost"],
    "0.25x": [],
    "0.5x": ["fire", "water", "electric", "grass"],
    "2x": ["ice", "fighting", "dragon", "fairy"],
    "4x": [],
  },
  "dark-normal": {
    "0x": ["ghost"],
    "0.25x": [],
    "0.5x": ["psychic", "dark"],
    "2x": ["bug", "fairy"],
    "4x": ["fighting"],
  },
  "normal-steel": {
    "0x": ["poison", "ghost"],
    "0.25x": [],
    "0.5x": [
      "normal",
      "grass",
      "ice",
      "flying",
      "psychic",
      "bug",
      "rock",
      "dragon",
      "steel",
      "fairy",
    ],
    "2x": ["fire", "ground"],
    "4x": ["fighting"],
  },
  "fairy-normal": {
    "0x": ["ghost", "dragon"],
    "0.25x": [],
    "0.5x": ["bug", "dark"],
    "2x": ["poison", "steel"],
    "4x": [],
  },
  "fire-water": {
    "0x": [],
    "0.25x": ["fire", "ice", "steel"],
    "0.5x": ["bug", "fairy"],
    "2x": ["electric", "ground", "rock"],
    "4x": [],
  },
  "fire-grass": {
    "0x": [],
    "0.25x": ["grass"],
    "0.5x": ["electric", "steel", "fairy"],
    "2x": ["poison", "flying", "rock"],
    "4x": [],
  },
  "electric-fire": {
    "0x": [],
    "0.25x": ["steel"],
    "0.5x": ["fire", "electric", "grass", "ice", "flying", "bug", "fairy"],
    "2x": ["water", "rock"],
    "4x": ["ground"],
  },
  "fire-ice": {
    "0x": [],
    "0.25x": ["ice"],
    "0.5x": ["grass", "bug", "fairy"],
    "2x": ["water", "fighting", "ground"],
    "4x": ["rock"],
  },
  "fighting-fire": {
    "0x": [],
    "0.25x": ["bug"],
    "0.5x": ["fire", "grass", "ice", "dark", "steel"],
    "2x": ["water", "ground", "flying", "psychic"],
    "4x": [],
  },
  "fire-poison": {
    "0x": [],
    "0.25x": ["grass", "bug", "fairy"],
    "0.5x": ["fire", "ice", "fighting", "poison", "steel"],
    "2x": ["water", "psychic", "rock"],
    "4x": ["ground"],
  },
  "fire-ground": {
    "0x": ["electric"],
    "0.25x": [],
    "0.5x": ["fire", "poison", "bug", "steel", "fairy"],
    "2x": ["ground"],
    "4x": ["water"],
  },
  "fire-flying": {
    "0x": ["ground"],
    "0.25x": ["grass", "bug"],
    "0.5x": ["fire", "fighting", "steel", "fairy"],
    "2x": ["water", "electric"],
    "4x": ["rock"],
  },
  "fire-psychic": {
    "0x": [],
    "0.25x": [],
    "0.5x": ["fire", "grass", "ice", "fighting", "psychic", "steel", "fairy"],
    "2x": ["water", "ground", "rock", "ghost", "dark"],
    "4x": [],
  },
  "bug-fire": {
    "0x": [],
    "0.25x": ["grass"],
    "0.5x": ["ice", "fighting", "bug", "steel", "fairy"],
    "2x": ["water", "flying"],
    "4x": ["rock"],
  },
  "fire-rock": {
    "0x": [],
    "0.25x": ["fire"],
    "0.5x": ["normal", "ice", "poison", "flying", "bug", "fairy"],
    "2x": ["fighting", "rock"],
    "4x": ["water", "ground"],
  },
  "fire-ghost": {
    "0x": ["normal", "fighting"],
    "0.25x": ["bug"],
    "0.5x": ["fire", "grass", "ice", "poison", "steel", "fairy"],
    "2x": ["water", "ground", "rock", "ghost", "dark"],
    "4x": [],
  },
  "dragon-fire": {
    "0x": [],
    "0.25x": ["fire", "grass"],
    "0.5x": ["electric", "bug", "steel"],
    "2x": ["ground", "rock", "dragon"],
    "4x": [],
  },
  "dark-fire": {
    "0x": [],
    "0.25x": [],
    "0.5x": ["fire", "grass", "ice", "psychic", "ghost", "dark", "steel"],
    "2x": ["water", "fighting", "ground", "rock"],
    "4x": [],
  },
  "fire-steel": {
    "0x": ["poison"],
    "0.25x": ["grass", "ice", "bug", "steel", "fairy"],
    "0.5x": ["normal", "flying", "psychic", "dragon"],
    "2x": ["water", "fighting"],
    "4x": ["ground"],
  },
  "fairy-fire": {
    "0x": ["dragon"],
    "0.25x": ["bug"],
    "0.5x": ["fire", "grass", "ice", "fighting", "dark", "fairy"],
    "2x": ["water", "poison", "ground", "rock"],
    "4x": [],
  },
  "grass-water": {
    "0x": [],
    "0.25x": ["water"],
    "0.5x": ["ground", "steel"],
    "2x": ["poison", "flying", "bug"],
    "4x": [],
  },
  "electric-water": {
    "0x": [],
    "0.25x": ["steel"],
    "0.5x": ["fire", "water", "ice", "flying"],
    "2x": ["grass", "ground"],
    "4x": [],
  },
  "ice-water": {
    "0x": [],
    "0.25x": ["ice"],
    "0.5x": ["water"],
    "2x": ["electric", "grass", "fighting", "rock"],
    "4x": [],
  },
  "fighting-water": {
    "0x": [],
    "0.25x": [],
    "0.5x": ["fire", "water", "ice", "bug", "rock", "dark", "steel"],
    "2x": ["electric", "grass", "flying", "psychic", "fairy"],
    "4x": [],
  },
  "poison-water": {
    "0x": [],
    "0.25x": [],
    "0.5x": [
      "fire",
      "water",
      "ice",
      "fighting",
      "poison",
      "bug",
      "steel",
      "fairy",
    ],
    "2x": ["electric", "ground", "psychic"],
    "4x": [],
  },
  "ground-water": {
    "0x": ["electric"],
    "0.25x": [],
    "0.5x": ["fire", "poison", "rock", "steel"],
    "2x": [],
    "4x": ["grass"],
  },
  "flying-water": {
    "0x": ["ground"],
    "0.25x": [],
    "0.5x": ["fire", "water", "fighting", "bug", "steel"],
    "2x": ["rock"],
    "4x": ["electric"],
  },
  "psychic-water": {
    "0x": [],
    "0.25x": [],
    "0.5x": ["fire", "water", "ice", "fighting", "psychic", "steel"],
    "2x": ["electric", "grass", "bug", "ghost", "dark"],
    "4x": [],
  },
  "bug-water": {
    "0x": [],
    "0.25x": [],
    "0.5x": ["water", "ice", "fighting", "ground", "steel"],
    "2x": ["electric", "flying", "rock"],
    "4x": [],
  },
  "rock-water": {
    "0x": [],
    "0.25x": ["fire"],
    "0.5x": ["normal", "ice", "poison", "flying"],
    "2x": ["electric", "fighting", "ground"],
    "4x": ["grass"],
  },
  "ghost-water": {
    "0x": ["normal", "fighting"],
    "0.25x": [],
    "0.5x": ["fire", "water", "ice", "poison", "bug", "steel"],
    "2x": ["electric", "grass", "ghost", "dark"],
    "4x": [],
  },
  "dragon-water": {
    "0x": [],
    "0.25x": ["fire", "water"],
    "0.5x": ["steel"],
    "2x": ["dragon", "fairy"],
    "4x": [],
  },
  "dark-water": {
    "0x": [],
    "0.25x": [],
    "0.5x": ["fire", "water", "ice", "psychic", "ghost", "dark", "steel"],
    "2x": ["electric", "grass", "fighting", "bug", "fairy"],
    "4x": [],
  },
  "steel-water": {
    "0x": ["poison"],
    "0.25x": ["ice", "steel"],
    "0.5x": [
      "normal",
      "water",
      "flying",
      "psychic",
      "bug",
      "rock",
      "dragon",
      "fairy",
    ],
    "2x": ["electric", "fighting", "ground"],
    "4x": [],
  },
  "fairy-water": {
    "0x": ["dragon"],
    "0.25x": [],
    "0.5x": ["fire", "water", "ice", "fighting", "bug", "dark"],
    "2x": ["electric", "grass", "poison"],
    "4x": [],
  },
  "electric-grass": {
    "0x": [],
    "0.25x": ["electric"],
    "0.5x": ["water", "grass", "steel"],
    "2x": ["fire", "ice", "poison", "bug"],
    "4x": [],
  },
  "grass-ice": {
    "0x": [],
    "0.25x": [],
    "0.5x": ["water", "electric", "grass", "ground"],
    "2x": ["fighting", "poison", "flying", "bug", "rock", "steel"],
    "4x": ["fire"],
  },
  "fighting-grass": {
    "0x": [],
    "0.25x": [],
    "0.5x": ["water", "electric", "grass", "ground", "rock", "dark"],
    "2x": ["fire", "ice", "poison", "psychic", "fairy"],
    "4x": ["flying"],
  },
  "grass-poison": {
    "0x": [],
    "0.25x": ["grass"],
    "0.5x": ["water", "electric", "fighting", "fairy"],
    "2x": ["fire", "ice", "flying", "psychic"],
    "4x": [],
  },
  "grass-ground": {
    "0x": ["electric"],
    "0.25x": [],
    "0.5x": ["ground", "rock"],
    "2x": ["fire", "flying", "bug"],
    "4x": ["ice"],
  },
  "flying-grass": {
    "0x": ["ground"],
    "0.25x": ["grass"],
    "0.5x": ["water", "fighting"],
    "2x": ["fire", "poison", "flying", "rock"],
    "4x": ["ice"],
  },
  "grass-psychic": {
    "0x": [],
    "0.25x": [],
    "0.5x": ["water", "electric", "grass", "fighting", "ground", "psychic"],
    "2x": ["fire", "ice", "poison", "flying", "ghost", "dark"],
    "4x": ["bug"],
  },
  "bug-grass": {
    "0x": [],
    "0.25x": ["grass", "ground"],
    "0.5x": ["water", "electric", "fighting"],
    "2x": ["ice", "poison", "bug", "rock"],
    "4x": ["fire", "flying"],
  },
  "grass-rock": {
    "0x": [],
    "0.25x": [],
    "0.5x": ["normal", "electric"],
    "2x": ["ice", "fighting", "bug", "steel"],
    "4x": [],
  },
  "ghost-grass": {
    "0x": ["normal", "fighting"],
    "0.25x": [],
    "0.5x": ["water", "electric", "grass", "ground"],
    "2x": ["fire", "ice", "flying", "ghost", "dark"],
    "4x": [],
  },
  "dragon-grass": {
    "0x": [],
    "0.25x": ["water", "electric", "grass"],
    "0.5x": ["ground"],
    "2x": ["poison", "flying", "bug", "dragon", "fairy"],
    "4x": ["ice"],
  },
  "dark-grass": {
    "0x": [],
    "0.25x": [],
    "0.5x": [
      "water",
      "electric",
      "grass",
      "ground",
      "psychic",
      "ghost",
      "dark",
    ],
    "2x": ["fire", "ice", "fighting", "poison", "flying", "fairy"],
    "4x": ["bug"],
  },
  "grass-steel": {
    "0x": ["poison"],
    "0.25x": ["grass"],
    "0.5x": [
      "normal",
      "water",
      "electric",
      "psychic",
      "rock",
      "dragon",
      "steel",
      "fairy",
    ],
    "2x": ["fighting"],
    "4x": ["fire"],
  },
  "fairy-grass": {
    "0x": ["dragon"],
    "0.25x": [],
    "0.5x": ["water", "electric", "grass", "fighting", "ground", "dark"],
    "2x": ["fire", "ice", "flying", "steel"],
    "4x": ["poison"],
  },
  "electric-ice": {
    "0x": [],
    "0.25x": [],
    "0.5x": ["electric", "ice", "flying"],
    "2x": ["fire", "fighting", "ground", "rock"],
    "4x": [],
  },
  "electric-fighting": {
    "0x": [],
    "0.25x": [],
    "0.5x": ["electric", "bug", "rock", "dark", "steel"],
    "2x": ["ground", "psychic", "fairy"],
    "4x": [],
  },
  "electric-poison": {
    "0x": [],
    "0.25x": [],
    "0.5x": [
      "electric",
      "grass",
      "fighting",
      "poison",
      "flying",
      "bug",
      "steel",
      "fairy",
    ],
    "2x": ["psychic"],
    "4x": ["ground"],
  },
  "electric-ground": {
    "0x": ["electric"],
    "0.25x": [],
    "0.5x": ["poison", "flying", "rock", "steel"],
    "2x": ["water", "grass", "ice", "ground"],
    "4x": [],
  },
  "electric-flying": {
    "0x": ["ground"],
    "0.25x": [],
    "0.5x": ["grass", "fighting", "flying", "bug", "steel"],
    "2x": ["ice", "rock"],
    "4x": [],
  },
  "electric-psychic": {
    "0x": [],
    "0.25x": [],
    "0.5x": ["electric", "fighting", "flying", "psychic", "steel"],
    "2x": ["ground", "bug", "ghost", "dark"],
    "4x": [],
  },
  "bug-electric": {
    "0x": [],
    "0.25x": [],
    "0.5x": ["electric", "grass", "fighting", "steel"],
    "2x": ["fire", "rock"],
    "4x": [],
  },
  "electric-rock": {
    "0x": [],
    "0.25x": ["flying"],
    "0.5x": ["normal", "fire", "electric", "poison"],
    "2x": ["water", "grass", "fighting"],
    "4x": ["ground"],
  },
  "electric-ghost": {
    "0x": ["normal", "fighting"],
    "0.25x": [],
    "0.5x": ["electric", "poison", "flying", "bug", "steel"],
    "2x": ["ground", "ghost", "dark"],
    "4x": [],
  },
  "dragon-electric": {
    "0x": [],
    "0.25x": ["electric"],
    "0.5x": ["fire", "water", "grass", "flying", "steel"],
    "2x": ["ice", "ground", "dragon", "fairy"],
    "4x": [],
  },
  "dark-electric": {
    "0x": [],
    "0.25x": [],
    "0.5x": ["electric", "flying", "psychic", "ghost", "dark", "steel"],
    "2x": ["fighting", "ground", "bug", "fairy"],
    "4x": [],
  },
  "electric-steel": {
    "0x": ["poison"],
    "0.25x": ["flying", "steel"],
    "0.5x": [
      "normal",
      "electric",
      "grass",
      "ice",
      "psychic",
      "bug",
      "rock",
      "dragon",
      "fairy",
    ],
    "2x": ["fire", "fighting"],
    "4x": ["ground"],
  },
  "electric-fairy": {
    "0x": ["dragon"],
    "0.25x": [],
    "0.5x": ["electric", "fighting", "flying", "bug", "dark"],
    "2x": ["poison", "ground"],
    "4x": [],
  },
  "fighting-ice": {
    "0x": [],
    "0.25x": [],
    "0.5x": ["ice", "bug", "dark"],
    "2x": ["fire", "fighting", "flying", "psychic", "steel", "fairy"],
    "4x": [],
  },
  "ice-poison": {
    "0x": [],
    "0.25x": [],
    "0.5x": ["grass", "ice", "poison", "bug", "fairy"],
    "2x": ["fire", "ground", "psychic", "rock", "steel"],
    "4x": [],
  },
  "ground-ice": {
    "0x": ["electric"],
    "0.25x": [],
    "0.5x": ["poison"],
    "2x": ["fire", "water", "grass", "fighting", "steel"],
    "4x": [],
  },
  "flying-ice": {
    "0x": ["ground"],
    "0.25x": [],
    "0.5x": ["grass", "bug"],
    "2x": ["fire", "electric", "steel"],
    "4x": ["rock"],
  },
  "ice-psychic": {
    "0x": [],
    "0.25x": [],
    "0.5x": ["ice", "psychic"],
    "2x": ["fire", "bug", "rock", "ghost", "dark", "steel"],
    "4x": [],
  },
  "bug-ice": {
    "0x": [],
    "0.25x": [],
    "0.5x": ["grass", "ice", "ground"],
    "2x": ["flying", "steel"],
    "4x": ["fire", "rock"],
  },
  "ice-rock": {
    "0x": [],
    "0.25x": [],
    "0.5x": ["normal", "ice", "poison", "flying"],
    "2x": ["water", "grass", "ground", "rock"],
    "4x": ["fighting", "steel"],
  },
  "ghost-ice": {
    "0x": ["normal", "fighting"],
    "0.25x": [],
    "0.5x": ["ice", "poison", "bug"],
    "2x": ["fire", "rock", "ghost", "dark", "steel"],
    "4x": [],
  },
  "dragon-ice": {
    "0x": [],
    "0.25x": [],
    "0.5x": ["water", "electric", "grass"],
    "2x": ["fighting", "rock", "dragon", "steel", "fairy"],
    "4x": [],
  },
  "dark-ice": {
    "0x": [],
    "0.25x": [],
    "0.5x": ["ice", "psychic", "ghost", "dark"],
    "2x": ["fire", "bug", "rock", "steel", "fairy"],
    "4x": ["fighting"],
  },
  "ice-steel": {
    "0x": ["poison"],
    "0.25x": ["ice"],
    "0.5x": ["normal", "grass", "flying", "psychic", "bug", "dragon", "fairy"],
    "2x": ["ground"],
    "4x": ["fire", "fighting"],
  },
  "fairy-ice": {
    "0x": ["dragon"],
    "0.25x": [],
    "0.5x": ["ice", "bug", "dark"],
    "2x": ["fire", "poison", "rock"],
    "4x": ["steel"],
  },
  "fighting-poison": {
    "0x": [],
    "0.25x": ["bug"],
    "0.5x": ["grass", "fighting", "poison", "rock", "dark"],
    "2x": ["ground", "flying"],
    "4x": ["psychic"],
  },
  "fighting-ground": {
    "0x": ["electric"],
    "0.25x": ["rock"],
    "0.5x": ["poison", "bug", "dark"],
    "2x": ["water", "grass", "ice", "flying", "psychic", "fairy"],
    "4x": [],
  },
  "fighting-flying": {
    "0x": ["ground"],
    "0.25x": ["bug"],
    "0.5x": ["grass", "fighting", "dark"],
    "2x": ["electric", "ice", "flying", "psychic", "fairy"],
    "4x": [],
  },
  "fighting-psychic": {
    "0x": [],
    "0.25x": [],
    "0.5x": ["fighting", "rock"],
    "2x": ["flying", "ghost", "fairy"],
    "4x": [],
  },
  "bug-fighting": {
    "0x": [],
    "0.25x": [],
    "0.5x": ["grass", "fighting", "ground", "bug", "dark"],
    "2x": ["fire", "psychic", "fairy"],
    "4x": ["flying"],
  },
  "fighting-rock": {
    "0x": [],
    "0.25x": [],
    "0.5x": ["normal", "fire", "poison", "bug", "rock", "dark"],
    "2x": ["water", "grass", "fighting", "ground", "psychic", "steel", "fairy"],
    "4x": [],
  },
  "fighting-ghost": {
    "0x": ["normal", "fighting"],
    "0.25x": ["bug"],
    "0.5x": ["poison", "rock"],
    "2x": ["flying", "psychic", "ghost", "fairy"],
    "4x": [],
  },
  "dragon-fighting": {
    "0x": [],
    "0.25x": [],
    "0.5x": ["fire", "water", "electric", "grass", "bug", "rock", "dark"],
    "2x": ["ice", "flying", "psychic", "dragon"],
    "4x": ["fairy"],
  },
  "dark-fighting": {
    "0x": [],
    "0.25x": ["dark"],
    "0.5x": ["rock", "ghost"],
    "2x": ["fighting", "flying"],
    "4x": ["fairy"],
  },
  "fighting-steel": {
    "0x": ["poison"],
    "0.25x": ["bug", "rock"],
    "0.5x": ["normal", "grass", "ice", "dragon", "dark", "steel"],
    "2x": ["fire", "fighting", "ground"],
    "4x": [],
  },
  "fairy-fighting": {
    "0x": ["dragon"],
    "0.25x": ["bug", "dark"],
    "0.5x": ["fighting", "rock"],
    "2x": ["poison", "flying", "psychic", "steel", "fairy"],
    "4x": [],
  },
  "ground-poison": {
    "0x": ["electric"],
    "0.25x": ["poison"],
    "0.5x": ["fighting", "bug", "rock", "fairy"],
    "2x": ["water", "ice", "ground", "psychic"],
    "4x": [],
  },
  "flying-poison": {
    "0x": ["ground"],
    "0.25x": ["grass", "fighting", "bug"],
    "0.5x": ["poison", "fairy"],
    "2x": ["electric", "ice", "psychic", "rock"],
    "4x": [],
  },
  "poison-psychic": {
    "0x": [],
    "0.25x": ["fighting"],
    "0.5x": ["grass", "poison", "fairy"],
    "2x": ["ground", "ghost", "dark"],
    "4x": [],
  },
  "bug-poison": {
    "0x": [],
    "0.25x": ["grass", "fighting"],
    "0.5x": ["poison", "bug", "fairy"],
    "2x": ["fire", "flying", "psychic", "rock"],
    "4x": [],
  },
  "poison-rock": {
    "0x": [],
    "0.25x": ["poison"],
    "0.5x": ["normal", "fire", "flying", "bug", "fairy"],
    "2x": ["water", "psychic", "steel"],
    "4x": ["ground"],
  },
  "ghost-poison": {
    "0x": ["normal", "fighting"],
    "0.25x": ["poison", "bug"],
    "0.5x": ["grass", "fairy"],
    "2x": ["ground", "psychic", "ghost", "dark"],
    "4x": [],
  },
  "dragon-poison": {
    "0x": [],
    "0.25x": ["grass"],
    "0.5x": ["fire", "water", "electric", "fighting", "poison", "bug"],
    "2x": ["ice", "ground", "psychic", "dragon"],
    "4x": [],
  },
  "dark-poison": {
    "0x": [],
    "0.25x": [],
    "0.5x": ["grass", "poison", "ghost", "dark"],
    "2x": ["ground"],
    "4x": [],
  },
  "poison-steel": {
    "0x": ["poison"],
    "0.25x": ["grass", "bug", "fairy"],
    "0.5x": ["normal", "ice", "flying", "rock", "dragon", "steel"],
    "2x": ["fire"],
    "4x": ["ground"],
  },
  "fairy-poison": {
    "0x": ["dragon"],
    "0.25x": ["fighting", "bug"],
    "0.5x": ["grass", "dark", "fairy"],
    "2x": ["ground", "psychic", "steel"],
    "4x": [],
  },
  "flying-ground": {
    "0x": ["electric", "ground"],
    "0.25x": [],
    "0.5x": ["fighting", "poison", "bug"],
    "2x": ["water"],
    "4x": ["ice"],
  },
  "ground-psychic": {
    "0x": ["electric"],
    "0.25x": [],
    "0.5x": ["fighting", "poison", "psychic", "rock"],
    "2x": ["water", "grass", "ice", "bug", "ghost", "dark"],
    "4x": [],
  },
  "bug-ground": {
    "0x": ["electric"],
    "0.25x": [],
    "0.5x": ["fighting", "poison", "ground"],
    "2x": ["fire", "water", "ice", "flying"],
    "4x": [],
  },
  "ground-rock": {
    "0x": ["electric"],
    "0.25x": ["poison"],
    "0.5x": ["normal", "fire", "flying", "rock"],
    "2x": ["ice", "fighting", "ground", "steel"],
    "4x": ["water", "grass"],
  },
  "ghost-ground": {
    "0x": ["normal", "electric", "fighting"],
    "0.25x": ["poison"],
    "0.5x": ["bug", "rock"],
    "2x": ["water", "grass", "ice", "ghost", "dark"],
    "4x": [],
  },
  "dragon-ground": {
    "0x": ["electric"],
    "0.25x": [],
    "0.5x": ["fire", "poison", "rock"],
    "2x": ["dragon", "fairy"],
    "4x": ["ice"],
  },
  "dark-ground": {
    "0x": ["electric"],
    "0.25x": [],
    "0.5x": ["poison", "psychic", "rock", "ghost", "dark"],
    "2x": ["water", "grass", "ice", "fighting", "bug", "fairy"],
    "4x": [],
  },
  "ground-steel": {
    "0x": ["electric", "poison"],
    "0.25x": ["rock"],
    "0.5x": ["normal", "flying", "psychic", "bug", "dragon", "steel", "fairy"],
    "2x": ["fire", "water", "fighting", "ground"],
    "4x": [],
  },
  "fairy-ground": {
    "0x": ["electric", "dragon"],
    "0.25x": [],
    "0.5x": ["fighting", "bug", "rock", "dark"],
    "2x": ["water", "grass", "ice", "steel"],
    "4x": [],
  },
  "flying-psychic": {
    "0x": ["ground"],
    "0.25x": ["fighting"],
    "0.5x": ["grass", "psychic"],
    "2x": ["electric", "ice", "rock", "ghost", "dark"],
    "4x": [],
  },
  "bug-flying": {
    "0x": ["ground"],
    "0.25x": ["grass", "fighting"],
    "0.5x": ["bug"],
    "2x": ["fire", "electric", "ice", "flying"],
    "4x": ["rock"],
  },
  "flying-rock": {
    "0x": ["ground"],
    "0.25x": [],
    "0.5x": ["normal", "fire", "poison", "flying", "bug"],
    "2x": ["water", "electric", "ice", "rock", "steel"],
    "4x": [],
  },
  "flying-ghost": {
    "0x": ["normal", "fighting", "ground"],
    "0.25x": ["bug"],
    "0.5x": ["grass", "poison"],
    "2x": ["electric", "ice", "rock", "ghost", "dark"],
    "4x": [],
  },
  "dragon-flying": {
    "0x": ["ground"],
    "0.25x": ["grass"],
    "0.5x": ["fire", "water", "fighting", "bug"],
    "2x": ["rock", "dragon", "fairy"],
    "4x": ["ice"],
  },
  "dark-flying": {
    "0x": ["ground"],
    "0.25x": [],
    "0.5x": ["grass", "psychic", "ghost", "dark"],
    "2x": ["electric", "ice", "rock", "fairy"],
    "4x": [],
  },
  "flying-steel": {
    "0x": ["poison", "ground"],
    "0.25x": ["grass", "bug"],
    "0.5x": ["normal", "flying", "psychic", "dragon", "steel", "fairy"],
    "2x": ["fire", "electric"],
    "4x": [],
  },
  "fairy-flying": {
    "0x": ["ground", "dragon"],
    "0.25x": ["fighting", "bug"],
    "0.5x": ["grass", "dark"],
    "2x": ["electric", "ice", "poison", "rock", "steel"],
    "4x": [],
  },
  "bug-psychic": {
    "0x": [],
    "0.25x": ["fighting"],
    "0.5x": ["grass", "ground", "psychic"],
    "2x": ["fire", "flying", "bug", "rock", "ghost", "dark"],
    "4x": [],
  },
  "psychic-rock": {
    "0x": [],
    "0.25x": [],
    "0.5x": ["normal", "fire", "poison", "flying", "psychic"],
    "2x": ["water", "grass", "ground", "bug", "ghost", "dark", "steel"],
    "4x": [],
  },
  "ghost-psychic": {
    "0x": ["normal", "fighting"],
    "0.25x": [],
    "0.5x": ["poison", "psychic"],
    "2x": [],
    "4x": ["ghost", "dark"],
  },
  "dragon-psychic": {
    "0x": [],
    "0.25x": [],
    "0.5x": ["fire", "water", "electric", "grass", "fighting", "psychic"],
    "2x": ["ice", "bug", "ghost", "dragon", "dark", "fairy"],
    "4x": [],
  },
  "dark-psychic": {
    "0x": [],
    "0.25x": ["psychic"],
    "0.5x": [],
    "2x": ["fairy"],
    "4x": ["bug"],
  },
  "psychic-steel": {
    "0x": ["poison"],
    "0.25x": ["psychic"],
    "0.5x": [
      "normal",
      "grass",
      "ice",
      "flying",
      "rock",
      "dragon",
      "steel",
      "fairy",
    ],
    "2x": ["fire", "ground", "ghost", "dark"],
    "4x": [],
  },
  "fairy-psychic": {
    "0x": ["dragon"],
    "0.25x": ["fighting"],
    "0.5x": ["psychic"],
    "2x": ["poison", "ghost", "steel"],
    "4x": [],
  },
  "bug-rock": {
    "0x": [],
    "0.25x": [],
    "0.5x": ["normal", "poison"],
    "2x": ["water", "rock", "steel"],
    "4x": [],
  },
  "bug-ghost": {
    "0x": ["normal", "fighting"],
    "0.25x": [],
    "0.5x": ["grass", "poison", "ground", "bug"],
    "2x": ["fire", "flying", "rock", "ghost", "dark"],
    "4x": [],
  },
  "bug-dragon": {
    "0x": [],
    "0.25x": ["grass"],
    "0.5x": ["water", "electric", "fighting", "ground"],
    "2x": ["ice", "flying", "rock", "dragon", "fairy"],
    "4x": [],
  },
  "bug-dark": {
    "0x": [],
    "0.25x": [],
    "0.5x": ["grass", "ground", "psychic", "ghost", "dark"],
    "2x": ["fire", "flying", "bug", "rock", "fairy"],
    "4x": [],
  },
  "bug-steel": {
    "0x": ["poison"],
    "0.25x": ["grass"],
    "0.5x": ["normal", "ice", "psychic", "bug", "dragon", "steel", "fairy"],
    "2x": [],
    "4x": ["fire"],
  },
  "bug-fairy": {
    "0x": ["dragon"],
    "0.25x": ["fighting"],
    "0.5x": ["grass", "ground", "bug", "dark"],
    "2x": ["fire", "poison", "flying", "rock", "steel"],
    "4x": [],
  },
  "ghost-rock": {
    "0x": ["normal", "fighting"],
    "0.25x": ["poison"],
    "0.5x": ["fire", "flying", "bug"],
    "2x": ["water", "grass", "ground", "ghost", "dark", "steel"],
    "4x": [],
  },
  "dragon-rock": {
    "0x": [],
    "0.25x": ["fire"],
    "0.5x": ["normal", "electric", "poison", "flying"],
    "2x": ["ice", "fighting", "ground", "dragon", "steel", "fairy"],
    "4x": [],
  },
  "dark-rock": {
    "0x": [],
    "0.25x": [],
    "0.5x": ["normal", "fire", "poison", "flying", "psychic", "ghost", "dark"],
    "2x": ["water", "grass", "ground", "bug", "steel", "fairy"],
    "4x": ["fighting"],
  },
  "rock-steel": {
    "0x": ["poison"],
    "0.25x": ["normal", "flying"],
    "0.5x": ["ice", "psychic", "bug", "rock", "dragon", "fairy"],
    "2x": ["water"],
    "4x": ["fighting", "ground"],
  },
  "fairy-rock": {
    "0x": ["dragon"],
    "0.25x": [],
    "0.5x": ["normal", "fire", "flying", "bug", "dark"],
    "2x": ["water", "grass", "ground"],
    "4x": ["steel"],
  },
  "dragon-ghost": {
    "0x": ["normal", "fighting"],
    "0.25x": [],
    "0.5x": ["fire", "water", "electric", "grass", "poison", "bug"],
    "2x": ["ice", "ghost", "dragon", "dark", "fairy"],
    "4x": [],
  },
  "dark-ghost": {
    "0x": ["normal", "fighting"],
    "0.25x": [],
    "0.5x": ["poison", "psychic"],
    "2x": ["fairy"],
    "4x": [],
  },
  "ghost-steel": {
    "0x": ["normal", "fighting", "poison"],
    "0.25x": ["bug"],
    "0.5x": [
      "grass",
      "ice",
      "flying",
      "psychic",
      "rock",
      "dragon",
      "steel",
      "fairy",
    ],
    "2x": ["fire", "ground", "ghost", "dark"],
    "4x": [],
  },
  "fairy-ghost": {
    "0x": ["normal", "fighting", "dragon"],
    "0.25x": ["bug"],
    "0.5x": [],
    "2x": ["ghost", "steel"],
    "4x": [],
  },
  "dark-dragon": {
    "0x": [],
    "0.25x": [],
    "0.5x": ["fire", "water", "electric", "grass", "psychic", "ghost", "dark"],
    "2x": ["ice", "fighting", "bug", "dragon"],
    "4x": ["fairy"],
  },
  "dragon-steel": {
    "0x": ["poison"],
    "0.25x": ["grass"],
    "0.5x": [
      "normal",
      "water",
      "electric",
      "flying",
      "psychic",
      "bug",
      "rock",
      "steel",
    ],
    "2x": ["fighting", "ground"],
    "4x": [],
  },
  "dragon-fairy": {
    "0x": ["dragon"],
    "0.25x": [],
    "0.5x": ["fire", "water", "electric", "grass", "fighting", "bug", "dark"],
    "2x": ["ice", "poison", "steel", "fairy"],
    "4x": [],
  },
  "dark-steel": {
    "0x": ["poison"],
    "0.25x": ["psychic"],
    "0.5x": [
      "normal",
      "grass",
      "ice",
      "flying",
      "rock",
      "ghost",
      "dragon",
      "dark",
      "steel",
    ],
    "2x": ["fire", "ground"],
    "4x": ["fighting"],
  },
  "dark-fairy": {
    "0x": ["dragon"],
    "0.25x": ["dark"],
    "0.5x": ["psychic", "ghost"],
    "2x": ["poison", "steel", "fairy"],
    "4x": [],
  },
  "fairy-steel": {
    "0x": ["poison", "dragon"],
    "0.25x": ["bug"],
    "0.5x": [
      "normal",
      "grass",
      "ice",
      "flying",
      "psychic",
      "rock",
      "dark",
      "fairy",
    ],
    "2x": ["fire", "ground"],
    "4x": [],
  },
};
