import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AudioService } from 'src/app/services/audio.service';
import { StoreService } from 'src/app/services/store.service';
import { Mage } from 'src/app/structs/mage';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {
  player: Mage;

  constructor(
    private storeService: StoreService,
    private audioService: AudioService,
    private _router: Router) {
      this.player = this.storeService.player;
  }

  ngOnInit(): void {
    console.log(this.player.spells.first.name);
  }

  generateEnemy(): void {

  }

}
