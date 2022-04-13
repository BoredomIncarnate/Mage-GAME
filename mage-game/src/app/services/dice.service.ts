
export const roll = (sides: number) => {
    return 1 + Math.floor(Math.random() * sides);
}

export const rollplus = (sides: number, mod: number) => {
    return roll(sides) + mod;
}

export const two = (base: number) => 2 * base;