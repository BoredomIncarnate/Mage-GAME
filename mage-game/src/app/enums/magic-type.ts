export enum MagicType {
    Fire,
    Ice,
    Light,
    Dark
}

export namespace MagicType {
    export function toString(dir: MagicType): string {
        return MagicType[dir];
    }
}