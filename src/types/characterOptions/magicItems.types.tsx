export type MagicItem = {
    index: string;
    name: string;
    url: string; 
    equipment_category?: {}; // need to specify
    rarity?: {}; // need to specify
    variants?: [];
    variant?: boolean;
    desc?: string[];
}

export type MagicItems = {
    results: MagicItem[];
};