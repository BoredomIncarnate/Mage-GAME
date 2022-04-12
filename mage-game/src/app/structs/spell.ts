import { MagicType } from "../enums/magic-type";

export interface Spell {
    name: String;
    type: MagicType;
    baseDamage: Number;
}