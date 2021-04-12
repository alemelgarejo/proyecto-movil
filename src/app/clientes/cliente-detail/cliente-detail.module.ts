import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienteDetailPageRoutingModule } from './cliente-detail-routing.module';

import { ClienteDetailPage } from './cliente-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteDetailPageRoutingModule
  ],
  declarations: [ClienteDetailPage]
})
export class ClienteDetailPageModule {}
