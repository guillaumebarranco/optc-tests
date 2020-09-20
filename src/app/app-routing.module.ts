import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { RareRecruitsComponent } from './components/rare-recruits/rare-recruits.component';
import { LegendsComponent } from './components/legends/legends.component';

const routes: Routes = [
  {
    path: '',
    component: RareRecruitsComponent,
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
