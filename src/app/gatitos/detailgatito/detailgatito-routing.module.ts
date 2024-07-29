import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailgatitoPage } from './detailgatito.page';

const routes: Routes = [
  {
    path: '',
    component: DetailgatitoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailgatitoPageRoutingModule {}
