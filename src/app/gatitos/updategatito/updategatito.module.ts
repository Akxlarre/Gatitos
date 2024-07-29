import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdategatitoPageRoutingModule } from './updategatito-routing.module';

import { UpdategatitoPage } from './updategatito.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdategatitoPageRoutingModule
  ],
  declarations: [UpdategatitoPage]
})
export class UpdategatitoPageModule {}
