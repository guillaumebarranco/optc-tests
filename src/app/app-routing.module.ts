import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  PvpComponent,
  LegendsComponent,
  TierListComponent,
} from './components';

const routes: Routes = [
  {
    path: '',
    component: TierListComponent,
  },
  {
    path: 'legends',
    component: LegendsComponent,
  },
  {
    path: 'pvp',
    component: PvpComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
