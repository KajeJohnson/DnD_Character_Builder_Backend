import { Class } from './classes.types'
import { Race } from './race.types'

export type Proficiency = {
    index: string;
    name: string;
    url: string; 
    type?: string;
    classes?: Class[];
    races?: Race[];
    reference?: {}; // may need to specify
}

export type Proficiencies = {
    results: Proficiency[];
};