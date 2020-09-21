import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TierListComponent } from './components/tier-list/tier-list.component';
import { LegendsComponent } from './components/legends/legends.component';

const routes: Routes = [
  {
    path: '',
    component: TierListComponent,
  },
  {
    path: 'legends',
    component: LegendsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
