import { Alignment } from "./characterOptions/alignments.types";
import { Class } from "./characterOptions/classes.types";
import { EquipmentType } from "./characterOptions/equipment.types";
import { Feature } from "./characterOptions/features.types";
import { Language } from "./characterOptions/languages.types";
import { Proficiency } from "./characterOptions/proficiencies.types";
import { Race } from "./characterOptions/race.types";
import { Spell } from "./characterOptions/spells.types";
import { Trait } from "./characterOptions/traits.types";

export interface Character {
  _id?: string;
  userId?: string;
  characterName: string;
  createdAt?: string;
  updatedAt?: string;
  characterClass: Class;
  level: number;
  race: Race;
  alignment: Alignment;
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
  spells: Spell[];
  proficiencies: Proficiency[];
  languages: Language[];
  equipment: EquipmentType[];
  features: Feature[];
  traits: Trait[];
}
