import { Race } from "./race.types";
import { Subrace } from "./subraces.types";

export type Trait = {
    index: string;
    name: string;
    url: string; 
    races?: Race[];
    subraces?: Subrace[];
    desc?: string[];
    proficiencies?: []; // may need to specify
}

export type Traits = {
    results: Trait[];
};