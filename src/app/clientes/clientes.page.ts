import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ClientesService } from "./clientes.service";
import { Cliente } from './cliente.model';
import { map, tap } from 'rxjs/operators';
import { DetailComponent } from './detail/detail.component';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage{

  clientes$: Observable<Cliente>;
  constructor(private clientesService: ClientesService, private router: Router, private loadingCtrl: LoadingController, private modalCtrl: ModalController) { }

  async ngOnInit() {
    const loading =await this.loadingCtrl.create({message: 'Cargando ...'});
    loading.present();

    this.clientes$ = this.clientesService.getClientes().pipe(
      tap((clientes) => {
        loading.dismiss();
        return clientes;
      })
    );
    /* this.clientesService.getClientes().subscribe(data => {
      console.log(data);
      this.clientes = data;
    }); */
  }

  async openDetailModal(cliente: Cliente) {
    const modal = await this.modalCtrl.create({
      component: DetailComponent,
      componentProps: {cliente}
    });

    await modal.present();

    const { data: updatedCliente, role } = await modal.onDidDismiss();

    if(updatedCliente && role === 'edit') {
      this.clientes$ = this.clientes$.pipe(
        map((clientes) => {
          console.log(clientes);
            /* clientes.forEach(
              (cli) => {
                if(cli.id == updatedCliente.id) {
                  cli = updatedCliente;
                }
                return cli;
              }) */
            return clientes;

          }
        )
      );

    }
    if(role === 'delete') {
      this.clientes$ = this.clientes$.pipe(
        map((clientes) => {
            /* clientes.filter(cli => cli.id !== updatedCliente); */
            return clientes;
          })
      );
    }




  }




}
