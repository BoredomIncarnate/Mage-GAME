/*
* Dice Service
* TODO: 
* -> convert to injectable class
* -> track how many times what has been rolled
* -> create die object
* -> use conventional dnd dice + others


*/

import { coin } from "../enums/coin";

export const roll = (sides: number): number => 1 + Math.floor(Math.random() * sides);

export const rollplus = (sides: number, mod: number): number => roll(sides) + mod;

export const two = (base: number): number => 2 * base;

export const coinFlip = (): coin => roll(2) === 1 ? coin.Heads : coin.Tails;


