import { Injectable } from '@angular/core';

export enum MagicType {
    Fire,
    Ice,
    Light,
    Dark
}

export interface Mage {
    name: String;
    type: MagicType;
}

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