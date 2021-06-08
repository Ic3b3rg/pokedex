export interface Pokemon {
  abilities: Ability[];
  base_experience: number;
  forms: Form[];
  game_indices: GameIndice[];
  height: number;
  held_items: HeldItem[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_types: any[];
  species: Species;
  sprites: Sprites;
  stats: Stat[];
  types: InnerPokemonType[];
  weight: number;
}

export interface Ability {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface Form {
  name: string;
  url: string;
}

export interface GameIndice {
  game_index: number;
  version: Version;
}
export interface Version {
  name: string;
  url: string;
}

export interface Item {
  name: string;
  url: string;
}

export interface Version2 {
  name: string;
  url: string;
}

export interface VersionDetail {
  rarity: number;
  version: Version2;
}

export interface HeldItem {
  item: Item;
  version_details: VersionDetail[];
}

export interface Move2 {
  name: string;
  url: string;
}

export interface MoveLearnMethod {
  name: string;
  url: string;
}

export interface VersionGroup {
  name: string;
  url: string;
}

export interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: MoveLearnMethod;
  version_group: VersionGroup;
}

export interface Move {
  move: Move2;
  version_group_details: VersionGroupDetail[];
}

export interface Species {
  name: string;
  url: string;
}

export interface DreamWorld {
  front_default: string;
  front_female?: any;
}

export interface OfficialArtwork {
  front_default: string;
}

export interface Icons {
  front_default: string;
  front_female?: any;
}

export interface Icons2 {
  front_default: string;
  front_female?: any;
}

export interface Sprites {
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
  other: any;
  // versions: Versions;
}

export interface InnerStat {
  name: string;
  url: string;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: InnerStat;
}

export interface InnerType {
  name: string;
  url: string;
}

export interface InnerPokemonType {
  slot: number;
  type: InnerType;
}
