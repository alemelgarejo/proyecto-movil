import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'clientes',
    children: [
      {
        path: '',
        loadChildren: () => import('./clientes/clientes.module').then( m => m.ClientesPageModule)
      },
      {
        path: ':clienteId',
        loadChildren: () => import('./clientes/cliente-detail/cliente-detail.module').then( m => m.ClienteDetailPageModule)
      },
    ]

  },
  {
    path: 'cliente-add',
    loadChildren: () => import('./clientes/cliente-add/cliente-add.module').then( m => m.ClienteAddPageModule)
  },
  {
    path: 'cliente-edit'+':clienteId',
    loadChildren: () => import('./clientes/cliente-edit/cliente-edit.module').then( m => m.ClienteEditPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
