export type Class = {
    index: string;
    name: string;
    url: string; 
    hit_die?: number;
    proficiency_choices?: []; // *** need to specify
    proficiencies?: []; // *** need to specify
    saving_throws?: []; // *** need to specify
    starting_equipment?: []; // *** need to specify
    starting_equipment_options?: []; // *** need to specify
    class_levels?: string; // this is an endpoint
    multi_classing?: {}; // *** need to specify
    sublasses?: []; // *** need to specify
    spellcasting?: {}; // *** need to specify
    spells?: string; // another endpoint
}

export type Classes = {
    results: Class[];
};