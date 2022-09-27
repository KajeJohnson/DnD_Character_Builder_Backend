export type Language = {
    index: string;
    name: string;
    url: string; 
    desc?: string;
    type?: string;
    typical_speakers?: string[];
    script?: string;
}

export type Languages = {
    results: Language[];
};