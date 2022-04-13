import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Track, AudioService } from 'src/app/services/audio.service';
import { StoreService } from 'src/app/services/store.service';
import { Mage } from 'src/app/structs/mage';

@Component({
  selector: 'app-opening',
  templateUrl: './opening.component.html',
  styleUrls: ['./opening.component.css']
})
export class OpeningComponent implements OnInit {

  title = 'mage-game';
  player: Mage;

  constructor(
    private storeService: StoreService, 
    private audioService: AudioService,
    private _router: Router
    ) {
      this.player = this.storeService.player;
      audioService.setTrack(Track.Opening);
  }

  ngOnInit(): void {

  }

  confirmName() {
    // this.audioService.play();
    this._router.navigate(['create']);
  }

}
