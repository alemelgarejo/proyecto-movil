import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteAddPage } from './cliente-add.page';

const routes: Routes = [
  {
    path: '',
    component: ClienteAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteAddPageRoutingModule {}
