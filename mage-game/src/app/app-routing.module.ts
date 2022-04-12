import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BattleComponent } from './scenes/battle/battle.component';
import { CreateACharacterComponent } from './scenes/create-a-character/create-a-character.component';
import { OpeningComponent } from './scenes/opening/opening.component';

const routes: Routes = [
  { path: '', component: OpeningComponent },
  { path: 'opening', component: OpeningComponent },
  { path: 'create', component: CreateACharacterComponent},
  { path: 'battle', component: BattleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }