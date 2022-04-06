import { Component, OnInit } from '@angular/core';
import { Mage, StoreService } from './store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mage-game';
  player: Mage;

  constructor(private storeService: StoreService) {
    this.player = storeService.player;
  }

  ngOnInit(): void {

  }

  confirmName() {
    console.log(this.storeService.player.name);
  }
}
