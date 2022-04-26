import { Injectable } from '@angular/core';
import { dice } from '../enums/dice';
import { MagicType } from '../enums/magic-type';
import { Spell } from '../structs/spell';
import { two } from './dice.service';

@Injectable({
    providedIn: 'root',
})
/*
* Need to rethink how to use level / make stronger spells
* 
*/
export class SpellsService {

    private spells: Spell[] = [];
    private prefixes: String[] = [];
    private roots: String[] = [];

    constructor() {
        /*
        * currently just assigning the array 
        * might like to pull this from a table or something
        * or a fusion of both (core + additions from table)
        * 
        * would like to lock this down so like readonly if I can make that happen
        */

        this.generatePrefixes();
        this.generateRoots();
    }

    generateSpell(magicType: MagicType, level: number): Spell {
        var newSpell = {} as Spell;
        newSpell.name = this.rollName();
        newSpell.baseDamage = this.rollDamage();
        newSpell.type = magicType;
        this.spells.push(newSpell);
        return newSpell;
    }

    private generatePrefixes(): void {
        this.prefixes = ['big', 'red', 'blue', 'green', 'bright', 'bulging', 'gasping']
    }

    private generateRoots(): void {
        this.roots = ['magic', 'spell', 'hex', 'chant', 'aura', 'illusion', 'bang']
    }

    private rollName(): string {
        var i = Math.floor(Math.random() * this.prefixes.length);
        var j = Math.floor(Math.random() * this.roots.length);
        return `${this.prefixes[i]} ${this.roots[j]}`;
    }

    private rollDamage(): number {
        return two(dice.d6);
    }

}