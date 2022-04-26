import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MagicType } from 'src/app/enums/magic-type';
import { AudioService } from 'src/app/services/audio.service';
import { BattleService } from 'src/app/services/battle.service';
import { roll } from 'src/app/services/dice.service';
import { GameManagerService } from 'src/app/services/game-manager.service';
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
  rollValue: number = 0;
  hasRolled: boolean = false;

  constructor(
    private storeService: StoreService,
    private audioService: AudioService,
    private mageService: MageService,
    private battleService: BattleService,
    private _router: Router) {
      this.player = this.storeService.player;
      this.enemy = this.mageService.rollEnemy();
      this.chosenSpell = this.player.spells.first;
      console.log(this.chosenSpell);
  }

  ngOnInit(): void {
    console.log(this.chosenSpell);
  }

  magicTypeString(magicType: MagicType): string {
    return MagicType.toString(magicType)
  }

  getDamageToDo(): number {
    return this.battleService.calculateDamage(this.chosenSpell, this.rollValue, this.enemy)
  }

  playerAttack() {
    let damageToDo = this.getDamageToDo();
    this.currentAction = `${this.player.name} did ${damageToDo} damage to ${this.enemy.name}`;
    this.enemy.health -= damageToDo;
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

  rollMod() {
    this.rollValue =  roll(3) + roll(this.player.level);
    this.hasRolled = true;
  }

  

}
