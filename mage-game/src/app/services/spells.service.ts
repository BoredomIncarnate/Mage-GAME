import { Injectable } from '@angular/core';
import { MagicType } from '../enums/magic-type';
import { Spell } from '../structs/spell';
import { rollplus, two } from './dice.service';

@Injectable({
    providedIn: 'root',
})

export class SpellsService {

    private spells: Spell[] = [];
    private prefixes: String[] = [];
    private roots: String[] = [];

    constructor() {
        this.generatePrefixes();
        this.generateRoots();
    }

    generateSpell(magicType: MagicType, level: number): Spell {
        var newSpell = {} as Spell;
        newSpell.name = this.rollName();
        newSpell.baseDamage = this.rollDamage(level);
        newSpell.type = magicType;
        this.spells.push(newSpell);
        return newSpell;
    }

    private generatePrefixes(): void {
        this.prefixes = ['big', 'red', 'blue', 'green', 'bright', 'buldging', 'gasping']
    }

    private generateRoots(): void {
        this.roots = ['magic', 'spell', 'hex', 'chant', 'aura', 'illusion']
    }

    private rollName(): string {
        var i = Math.floor(Math.random() * this.prefixes.length);
        var j = Math.floor(Math.random() * this.roots.length);
        return `${this.prefixes[i]} ${this.roots[j]}`;
    }

    private rollDamage(level: number): number {
        return two(rollplus(6,level));
    }

}