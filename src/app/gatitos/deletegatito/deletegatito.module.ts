import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeletegatitoPageRoutingModule } from './deletegatito-routing.module';

import { DeletegatitoPage } from './deletegatito.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeletegatitoPageRoutingModule
  ],
  declarations: [DeletegatitoPage]
})
export class DeletegatitoPageModule {}
