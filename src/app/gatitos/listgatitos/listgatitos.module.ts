import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListgatitosPageRoutingModule } from './listgatitos-routing.module';

import { ListgatitosPage } from './listgatitos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListgatitosPageRoutingModule
  ],
  declarations: [ListgatitosPage]
})
export class ListgatitosPageModule {}
