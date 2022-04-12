import { Injectable } from '@angular/core';
import { Spell } from '../structs/spell';

@Injectable({
    providedIn: 'root',
})

export class SpellsService {

    spells: Spell[] = [];
    private prefixes: String[] = [];
    private roots: String[] = [];

    constructor() {
        this.generatePrefixes();
        this.generateRoots();
    }

    generateSpell(): Spell {
        var newSpell = {} as Spell;
        newSpell.name = this.generateName();
        this.spells.push(newSpell);
        return newSpell;
    }

    generatePrefixes(): void {
        this.prefixes = ['big', 'red', 'blue', 'green', 'bright', 'buldging', 'gasping']
    }

    generateRoots(): void {
        this.roots = ['magic', 'spell', 'hex', 'chant', 'aura', 'illusion']
    }

    generateName(): String {
        var i = Math.floor(Math.random() * this.prefixes.length);
        var j = Math.floor(Math.random() * this.roots.length);
        console.log(i);
        console.log(j);
        return `${this.prefixes[i]}${this.roots[j]}`;
    }

}