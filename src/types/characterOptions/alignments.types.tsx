export type Alignment = {
    index: string;
    name: string;
    url: string; 
    abbreviation?: string;
    desc?: string;
}

export type Alignments = {
    results: Alignment[];
  };