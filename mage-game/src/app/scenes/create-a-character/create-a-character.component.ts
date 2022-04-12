import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MagicType } from 'src/app/enums/magic-type';
import { Track, AudioService } from 'src/app/services/audio.service';
import { SpellsService } from 'src/app/services/spells.service';
import { StoreService } from 'src/app/services/store.service';
import { Mage } from 'src/app/structs/mage';

@Component({
  selector: 'app-create-a-character',
  templateUrl: './create-a-character.component.html',
  styleUrls: ['./create-a-character.component.css']
})
export class CreateACharacterComponent implements OnInit {
  title = 'Chose your path';
  player: Mage;
  magicType = MagicType;

  constructor(
    private storeService: StoreService, 
    private audioService: AudioService,
    private spellsService: SpellsService,
    private _router: Router) { 
      this.player = storeService.player;
    }

  ngOnInit(): void {

  }

  selectMagicType(magicType: MagicType): void {
    this.player.type = magicType;
  }

  yes(): void {
    this._router.navigate(['battle']);
    this.player.spells.first = this.spellsService.generateSpell();
  }

}
