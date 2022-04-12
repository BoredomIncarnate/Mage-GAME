import { MagicType } from "../enums/magic-type";

export interface Spell {
    name: string;
    type: MagicType;
    baseDamage: number;
}