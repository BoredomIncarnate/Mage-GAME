import { MagicType } from "../enums/magic-type";
import { Spell } from "./spell";

export interface IMage {
    name: string;
    type: MagicType;
    health: number;
    maxHealth: number;
    level: number;
    spells: {
        first: Spell,
        second: Spell,
        third: Spell,
        fourth: Spell,
    }
}

export class Mage implements IMage {
    name: string;
    type: MagicType;
    health: number;
    maxHealth: number;
    level: number;
    spells = {
        first: {} as Spell,
        second: {} as Spell,
        third: {} as Spell,
        fourth: {} as Spell
    }

    constructor(
        name: string,
        type: MagicType, 
        health: number, 
        level: number) {
            this.name = name;
            this.type = type;
            this.health = health;
            this.maxHealth = health;
            this.level = level;
    }
}