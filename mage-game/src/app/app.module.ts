import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreService } from './services/store.service';
import { AppRoutingModule } from './app-routing.module';
import { AudioService } from 'src/app/services/audio.service';
import { CreateACharacterComponent } from './scenes/create-a-character/create-a-character.component';
import { OpeningComponent } from './scenes/opening/opening.component';
import { BattleComponent } from './scenes/battle/battle.component';
import { SpellsService } from './services/spells.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateACharacterComponent,
    OpeningComponent,
    BattleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [StoreService, AudioService, SpellsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
