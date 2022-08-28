import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnInitPageRoutingModule } from './on-init-routing.module';

import { OnInitPage } from './on-init.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnInitPageRoutingModule
  ],
  declarations: [OnInitPage]
})
export class OnInitPageModule {}
