export type AbilityScore = {
    index: string;
    name: string;
    url: string; 
    full_name?: string;
    desc?: string[];
    skills?: []; // may need to specify
}

export type AbilityScores = {
    results: AbilityScore[];
};