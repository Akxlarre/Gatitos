import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddgatitoPage } from './addgatito.page';

const routes: Routes = [
  {
    path: '',
    component: AddgatitoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddgatitoPageRoutingModule {}
