export type WeaponProperty = {
    index: string;
    name: string;
    url: string; 
    desc?: string[];
}

export type WeaponProperties = {
    results: WeaponProperty[];
};