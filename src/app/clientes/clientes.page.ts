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
export class ClientesPage {

  clientes$: Observable<Cliente>;
  constructor(private clientesService: ClientesService, private router: Router, private loadingCtrl: LoadingController, private modalCtrl: ModalController) { }

  /* async ngOnInit() {
    this.ionViewWillEnter();
    } */


  async ionViewWillEnter() {
    const loading =await this.loadingCtrl.create({message: 'Cargando ...'});
    loading.present();

    this.clientes$ = this.clientesService.getClientes().pipe(
      tap((clientes) => {
        loading.dismiss();
        return clientes;
      })
    );
  }



  async openDetailModal(cliente: Cliente) {
    const modal = await this.modalCtrl.create({
      component: DetailComponent,
      componentProps: {cliente}
    });

    await modal.present();

    const { data: updatedCliente, role } = await modal.onDidDismiss();

    if(updatedCliente && role === 'edit') {
      let clientes = this.clientes$.pipe(
        map(() => {
          console.log(clientes);
            clientes.forEach(
              (cli) => {
                if(cli.id == updatedCliente.id) {
                  cli = updatedCliente;
                }
                this.router.navigate(['/clientes']);
                return cli;
              })
            return clientes;
          }
        )
      );

    }
    if(role === 'delete') {
      let clientes = this.clientes$.pipe(
        map(() => {
            clientes.filter(cli => cli.id !== updatedCliente);
            return clientes;

          })

      );


    }




  }




}
