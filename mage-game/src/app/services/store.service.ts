import { Injectable } from '@angular/core';
import { MagicType } from '../enums/magic-type';
import { Mage } from '../structs/mage';
import { roll, two } from './dice.service';

@Injectable({
    providedIn: 'root',
})

export class StoreService {
    player: Mage;
    enemies: Mage[]
    
    constructor() {
        this.player = new Mage("Barry the Mage", MagicType.Fire, two(roll(20)), two(roll(3)));
        this.enemies = [];
    }

    addEnemy(enemy: Mage) {
        this.enemies.push(enemy);
    }

}