export type Spell = {
    _id?: string;
    index: string;
    name: string;
    url: string; 
    desc?: string[];
    higher_level?: string[];
    range?: string;
    components?: string[];
    material?: string;
    ritual?: boolean;
    duration?: string;
    concentration?: boolean;
    casting_time?: string;
    level?: number;
    attack_type?: string;
    damage?: {};
    school?: {};
    classes?: [];
    sublasses?: [];
}

export type Spells = {
    results: Spell[];
};