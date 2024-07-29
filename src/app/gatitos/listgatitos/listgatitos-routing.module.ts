import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListgatitosPage } from './listgatitos.page';

const routes: Routes = [
  {
    path: '',
    component: ListgatitosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListgatitosPageRoutingModule {}
