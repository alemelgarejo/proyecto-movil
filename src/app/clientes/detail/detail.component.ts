import { Component, Input, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { Cliente } from '../cliente.model';
import { ClienteAddPage } from "../cliente-add/cliente-add.page";
import { ClientesService } from '../clientes.service';
import { map, tap, take } from 'rxjs/operators';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  @Input() cliente: Cliente;

  constructor(private modalCtrl: ModalController, private clienteService: ClientesService, private loadingCtrl: LoadingController) { }

  ngOnInit() {}

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
    loading.present();
    this.clienteService.deleteCliente(this.cliente.id).pipe(take(1)).subscribe(()=> {loading.dismiss();this.closeModal('delete');});
    
  }

}
