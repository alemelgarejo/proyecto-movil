import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Cliente } from '../cliente.model';
import { ClientesService } from './clientes-detail.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-cliente-detail',
  templateUrl: './cliente-detail.page.html',
  styleUrls: ['./cliente-detail.page.scss'],
})
export class ClienteDetailPage implements OnInit {

  cliente = {};

  constructor(private activatedRoute: ActivatedRoute, private clientesService: ClientesService, private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap) {

      } else if(paramMap) {
        const recipeId = paramMap.get('clienteId');
        this.clientesService.getCliente(recipeId).subscribe(val => {
          console.log(val);
          this.cliente = val;
        });

      }
    })
  }

}
