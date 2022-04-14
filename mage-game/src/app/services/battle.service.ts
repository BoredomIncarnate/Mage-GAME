import { Injectable } from '@angular/core';
import { MagicType } from '../enums/magic-type';
import { Mage } from "../structs/mage";
import { Spell } from "../structs/spell";
import { two } from './dice.service';
import { StoreService } from './store.service';

@Injectable({
    providedIn: 'root',
})
export class BattleService {

    private superEffective = new Map<MagicType, MagicType>([
        [MagicType.Dark, MagicType.Fire],
        [MagicType.Light, MagicType.Dark],
        [MagicType.Ice, MagicType.Light],
        [MagicType.Fire, MagicType.Ice]
    ]);

    constructor() {
        
    }

    calculateDamage(chosenSpell: Spell, mod: number, enemy: Mage): number {
        var totalDamage = chosenSpell.baseDamage;

        if (chosenSpell.type === this.superEffective.get(enemy.type)) {
            mod = two(mod);
        }

        return totalDamage + mod;
    }

    

}