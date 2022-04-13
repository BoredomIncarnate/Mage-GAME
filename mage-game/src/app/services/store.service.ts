import { Injectable } from '@angular/core';
import { Mage } from '../structs/mage';

@Injectable({
    providedIn: 'root',
})

export class StoreService {
    player: Mage;
    enemies: Mage[]
    
    constructor() {
        this.player = new Mage("Barry the Mage", 0, 0, 0);
        this.enemies = [];
    }

    addEnemy(enemy: Mage) {
        this.enemies.push(enemy);
    }

}