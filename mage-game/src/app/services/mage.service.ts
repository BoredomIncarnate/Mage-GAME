import { Injectable } from '@angular/core';
import { dice } from '../enums/dice';
import { MagicType } from '../enums/magic-type';
import { IMage, Mage } from '../structs/mage';
import { two } from './dice.service';
import { StoreService } from './store.service';

@Injectable({
    providedIn: 'root',
})

export class MageService {

    private prefixes: string[] = ['Stinky', 'Bright', 'Windy', 'Bubbly', 'Nice', 'Mean', 'Sweaty', 'Goopy', 'Moist', 'Giant'];
    private roots: string[] = ['Baddie', 'Bat', 'Worm', 'Pan', 'Goat', 'Cherp', 'Ladder', 'Tooth', 'Ghost', 'Spirit', 'Fish'];

    constructor(private storeService: StoreService) { }

    public rollEnemy = (): IMage => {

        let enemy =  new Mage(
            this.rollName(), 
            this.rollMagicType(),
            this.rollHealth(),
            this.rollDamage());

        this.storeService.addEnemy(enemy);

        return enemy;
    }

    private rollName(): string {
        var i = Math.floor(Math.random() * this.prefixes.length);
        var j = Math.floor(Math.random() * this.roots.length);

        return `${this.prefixes[i]} ${this.roots[j]}`;
    }

    private rollMagicType = (): MagicType => dice.d4 - 1;

    private rollHealth= (): number => two(dice.d20);

    private rollDamage= (): number => dice.d6 + dice.d4;
    
}