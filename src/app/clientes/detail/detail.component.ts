import { Component, Input, OnInit } from '@angular/core';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { Cliente } from '../cliente.model';
import { ClienteAddPage } from "../cliente-add/cliente-add.page";
import { ClientesService } from '../clientes.service';
import { map, tap, take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  @Input() cliente: Cliente;

  constructor(private modalCtrl: ModalController, private clienteService: ClientesService, private loadingCtrl: LoadingController,  private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() {}

  goToClientes() {
    this.router.navigate(['/clientes']);
  }

  closeModal(role = 'edit') {
    this.modalCtrl.dismiss(this.cliente, role);
  }

  async openEditModal() {
    const modal = await this.modalCtrl.create({
      component: ClienteAddPage,
      componentProps: {cliente: this.cliente}
    });
    await modal.present();

    const {data} = await modal.onDidDismiss();
    if(data){
      this.cliente = data;
    }
  }

  async onDeleteCliente() {
    const loading = await this.loadingCtrl.create({message: 'Eliminando ...'});
    const alertElement = await this.alertCtrl.create({
      header: '¿Estás seguro?',
      message: 'Este botón eliminará el registro seleccionado.',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Eliminar',
          handler: () => {
            loading.present();
            this.clienteService.deleteCliente(this.cliente.id).pipe(take(1)).subscribe(()=> {loading.dismiss();this.closeModal('delete');});
            this.router.navigate(['/clientes']);
          }
        }
      ],
    });
    alertElement.present();

    //console.log('Eliminado');
    //this.clienteService.deleteCliente(this.cliente.id).pipe(take(1)).subscribe(()=> {loading.dismiss();this.closeModal('delete');});

  }

}
