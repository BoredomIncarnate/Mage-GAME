import { roll } from "../services/dice.service";

export enum dice {
    d4 = roll(4),
    d6 = roll(6),
    d8 = roll(8),
    d10 = roll(10),
    d12 = roll(12),
    d20 = roll(20)
}


