import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienteAddPageRoutingModule } from './cliente-add-routing.module';

import { ClienteAddPage } from './cliente-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ClienteAddPageRoutingModule
  ],
  declarations: [ClienteAddPage]
})
export class ClienteAddPageModule {}
