import { Injectable } from "@angular/core";
import { dice } from "../enums/dice";
import { IMage } from "../structs/mage";
import { action, dice_log } from "../types";
import { AudioService } from "./audio.service";
import { BattleService } from "./battle.service";
import { MageService } from "./mage.service";
import { SpellsService } from "./spells.service";
import { StoreService } from "./store.service";
import { coinFlip } from "./dice.service";
import { coin } from "../enums/coin";

@Injectable({
    providedIn: 'root',
})
export class GameManagerService { 

    private readonly diceLog: dice_log;
    public currentEnemy: IMage = {} as IMage;
    public player: IMage;

    constructor(
        private battleService: BattleService,
        private mageService: MageService,
        private spellsService: SpellsService,
        private audioService: AudioService,
        private storeService: StoreService) {
            this.diceLog = {
                map: this.generateMap(),
                count: this.addCountToDice
            }
            this.player = this.storeService.player;
    }

    public startBattle = (): void => {
        this.currentEnemy = this.mageService.rollEnemy();
    }

    public submitAttack = (playerAction: action) => {
        let playerGoesFirst: boolean = coinFlip() === coin.Heads;
        if (playerGoesFirst && this.playerWantsToAttack(playerAction)) {
            this.currentEnemy.health -= this.battleService.determineDamage(playerAction);
        }
    }

    private addCountToDice = (die: dice): void  => {
        console.log(die);
        console.log(die.toString());
    }

    private generateMap = (): Map<string, number> => {
        let map = new Map<string, number>();
        for(var die in dice) {
            map.set(dice[die], 0);
        }
        return map;
    }

    private determineEnemyAction = (): action => {
        throw new Error();
    }

    private playerWantsToAttack = (action: action): boolean => action.target.name !== this.player.name;



}
