import { Race } from "./race.types";
import { Language } from "./languages.types";

export type Subrace = {
    index: string;
    name: string;
    url: string; 
    race?: Race;
    desc?: string;
    ability_bonuses?: []; // may need to specify
    starting_proficiencies?: []; // might be equipment
    languages?: Language[];
    racial_traits?: []; // may need to specify
}

export type Subraces = {
    results: Subrace[];
};