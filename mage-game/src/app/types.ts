import { IMage } from "./structs/mage";
import { Spell } from "./structs/spell";

export type counter = (key: any) => void;

export type dice_log = {
    count: counter,
    map: Map<string, number>
}

export type action = {
    act: Spell,
    target: IMage,
    mod: number
}