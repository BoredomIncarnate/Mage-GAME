import { Injectable } from '@angular/core';
import { Mage } from '../structs/mage';
import { Spell } from '../structs/spell';

@Injectable({
    providedIn: 'root',
})

export class StoreService {
    player: Mage;
    
    constructor() {
        this.player = {} as Mage;
        this.player.spells = {
            first: {} as Spell,
            second: {} as Spell,
            third: {} as Spell,
            fourth: {} as Spell
        };

        this.player.name = "Barry the Mage"
    }

}