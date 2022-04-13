import { Injectable } from '@angular/core';
import { MagicType } from '../enums/magic-type';
import { Mage } from '../structs/mage';
import { roll, rollplus } from './dice.service';
import { StoreService } from './store.service';

@Injectable({
    providedIn: 'root',
})

export class MageService {

    private enemies: Mage[];
    private prefixes: string[] = ['stinky', 'bright', 'windy', 'bubbly', 'nice', 'mean', 'sweaty'];
    private roots: string[] = ['baddy', 'bat', 'worm', 'pan', 'goat', 'cherp', 'ladder'];

    constructor(private storeService: StoreService) {
        this.enemies = this.storeService.enemies;
    }

    generateEnemy() {
        let enemy = this.rollEnemy();
        this.storeService.addEnemy(enemy);
        return enemy;
    }

    private rollEnemy(): Mage {
        return new Mage(
            this.rollName(), 
            this.rollMagicType(),
            this.rollHealth(),
            this.rollDamage());
    }

    private rollName(): string {
        var i = Math.floor(Math.random() * this.prefixes.length);
        var j = Math.floor(Math.random() * this.roots.length);

        return `${this.prefixes[i]} ${this.roots[j]}`;
    }

    private rollMagicType(): MagicType {
        return roll(4) - 1;
    }

    private rollHealth(): number {
        let level = this.storeService.player.level;
        return rollplus(20,level);
    }

    private rollDamage(): number {
        let level = this.storeService.player.level;
        return rollplus(6,level);
    }
}