import { MagicType } from "../enums/magic-type";
import { Spell } from "./spell";

export interface Mage {
    name: string;
    type: MagicType;
    health: number;
    level: number;
    spells: {
        first: Spell,
        second: Spell,
        third: Spell,
        fourth: Spell,
    }
}