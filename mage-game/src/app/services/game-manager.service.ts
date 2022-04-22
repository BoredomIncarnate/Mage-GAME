import { Injectable } from "@angular/core";
import { AudioService } from "./audio.service";
import { BattleService } from "./battle.service";
import { MageService } from "./mage.service";
import { SpellsService } from "./spells.service";
import { StoreService } from "./store.service";

@Injectable({
    providedIn: 'root',
})
export class GameManagerService { 

    constructor(
        private battleService: BattleService,
        private mageService: MageService,
        private spellsService: SpellsService,
        private audioService: AudioService,
        private storeService: StoreService) {

    }

    



}