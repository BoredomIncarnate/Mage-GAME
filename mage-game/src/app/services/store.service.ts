import { Injectable } from '@angular/core';
import { Mage } from '../structs/mage';

@Injectable({
    providedIn: 'root',
})

export class StoreService {
    player: Mage;
    
    constructor() {
        this.player = {} as Mage;
        this.player.name = "Barry the Mage"
    }

}