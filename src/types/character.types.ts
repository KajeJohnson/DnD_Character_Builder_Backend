export interface Character {
  _id?: string;
  userId?: string;
  characterName: string;
  createdAt?: string;
  updatedAt?: string;
  class: string;
  level: number;
  race: string;
  alignment: string;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  proficiencyBonus: number;
  armorClass: number;
  speed: string;
  hitPoints: number;
  spells: string[];
  proficiencies: string[];
  languages: string[];
  equipment: string[];
  features: string[];
  traits: string[];
}
