export type Race = {
    index: string;
    name: string;
    url: string; 
    speed?: number;
    ability_bonuses?: []; // may need to specify
    alignment?: string;
    age?: string;
    size?: string;
    size_description?: string;
    starting_proficiencies?: string;
    languages?: []; // may need to specify
    language_desc?: string;
    traits?: []; // may need to specify
    subraces?: []; // may need to specify
}

export type Races = {
    results: Race[];
  };