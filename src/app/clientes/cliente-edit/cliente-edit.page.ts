import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ClienteAddPage } from '../cliente-add/cliente-add.page';
import { Cliente } from '../cliente.model';

@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente-edit.page.html',
  styleUrls: ['./cliente-edit.page.scss'],
})
export class ClienteEditPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  

}
