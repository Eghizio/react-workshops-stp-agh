import type { PokemonDto } from "./api";

export interface Pokemon {
  id: number;
  name: string;
  types: string[];
  previewImageUrl: string;
  imageUrls: string[];
}

export const dtoToModel = (dto: PokemonDto): Pokemon => ({
  id: dto.id,
  name: dto.name,
  types: dto.types.map(({type}) => type.name),
  previewImageUrl: dto.sprites.other.dream_world.front_default,
  imageUrls: [
    dto.sprites.other["official-artwork"].front_default,
    dto.sprites.other["official-artwork"].front_shiny
  ],
});