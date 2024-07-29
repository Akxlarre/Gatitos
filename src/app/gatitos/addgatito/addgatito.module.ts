import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddgatitoPageRoutingModule } from './addgatito-routing.module';

import { AddgatitoPage } from './addgatito.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddgatitoPageRoutingModule
  ],
  declarations: [AddgatitoPage]
})
export class AddgatitoPageModule {}
