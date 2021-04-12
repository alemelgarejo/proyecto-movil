import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteDetailPage } from './cliente-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ClienteDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteDetailPageRoutingModule {}
