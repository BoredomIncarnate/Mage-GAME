import { coin } from "../enums/coin";
import { dice } from "../enums/dice";

export type d_roll = () => number;

export const roll = (sides: number): number => 1 + Math.floor(Math.random() * sides);

export const coinFlip = (): coin => roll(2) === 1 ? coin.Heads : coin.Tails;

const roll_die_xtimes = (die: dice, times: number, counter: any = null) => {
    var total = 0;
    for (let i = 0; i < times; ++i) {
        let roll = die;
        total += roll;
        if (counter !== null) {
            // log the dice roll... somehow...
        }
    }
    return total;
}

export const two = (die: dice) => roll_die_xtimes(die, 2)
