import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MagicType } from 'src/app/enums/magic-type';
import { AudioService } from 'src/app/services/audio.service';
import { MageService } from 'src/app/services/mage.service';
import { StoreService } from 'src/app/services/store.service';
import { Mage } from 'src/app/structs/mage';
import { Spell } from 'src/app/structs/spell';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {
  player: Mage;
  enemy: Mage;
  defeat: boolean = false;
  currentAction: string = "awaiting";
  chosenSpell: Spell;
  roll: number = 0;

  constructor(
    private storeService: StoreService,
    private audioService: AudioService,
    private mageService: MageService,
    private _router: Router) {
      this.player = this.storeService.player;
      this.enemy = this.mageService.generateEnemy();
      this.chosenSpell = this.player.spells.first;
      console.log(this.chosenSpell);
  }

  ngOnInit(): void {
    console.log(this.chosenSpell);
  }

  magicTypeString(magicType: MagicType): string {
    return MagicType.toString(magicType)
  }

  playerAttack() {
    this.enemy.health -= this.chosenSpell.baseDamage;
    this.checkDefeat();
  }

  playerSelectAttack(attackSelected: Spell) {
    this.chosenSpell = attackSelected;
  }

  private checkDefeat() {
    if (this.enemy.health < 1) {
      this.defeat = true;
    }
  }

  endBattle() {
    this._router.navigate(['opening']);
  }

  

}
