import { MagicType } from "../enums/magic-type";
import { Spell } from "./spell";

export interface Mage {
    name: String;
    type: MagicType;
    health: Number;
    level: Number;
    spells: {
        first: Spell,
        second: Spell,
        third: Spell,
        fourth: Spell,
    }
}