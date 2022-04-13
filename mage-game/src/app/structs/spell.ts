import { MagicType } from "../enums/magic-type";

export type Spell = {
    name: string;
    type: MagicType;
    baseDamage: number;
}