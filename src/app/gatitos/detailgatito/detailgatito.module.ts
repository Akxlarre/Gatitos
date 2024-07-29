import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailgatitoPageRoutingModule } from './detailgatito-routing.module';

import { DetailgatitoPage } from './detailgatito.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailgatitoPageRoutingModule
  ],
  declarations: [DetailgatitoPage]
})
export class DetailgatitoPageModule {}
