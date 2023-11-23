export interface PokemonDto {
  id: number;
  name: string;
  height: number;
  weight: number;
  order: number;
  stats: Stat[];
  types: PokemonType[];
  sprites: Sprites;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface Sprites {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  other: Other;
}

export interface Other {
  dream_world: {
    front_default: string;
  };
  home: {
    front_default: string;
    front_shiny: string;
  };
  "official-artwork": {
    front_default: string;
    front_shiny: string;
  };
}
