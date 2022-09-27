export type EquipmentType = {
    index: string;
    name: string;
    url: string; 
    special?: [];
    equipment_category?: {}; // *** need to specify
    gear_category?: {}; // *** need to specify
    cost?: {}; // *** need to specify
    weight?: number;
    desc?: []; // *** need to specify
    contents?: [];
    properties?: [];
}

export type Equipments = {
    results: EquipmentType[];
};