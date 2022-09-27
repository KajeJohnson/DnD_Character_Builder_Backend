import { Class } from "./classes.types";

export type Subclass = {
    index: string;
    name: string;
    url: string; 
    class?: Class;
    subclass_flavor?: string;
    desc?: string[]; // may need to specify
    subclass_levels?: string;
    spells?: [];
}

export type Subclasses = {
    results: Subclass[];
};