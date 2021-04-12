import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingController, ModalController } from '@ionic/angular';
import { ClientesService } from '../clientes.service';
import { HttpClient } from "@angular/common/http";
import { first, take } from 'rxjs/operators';
import { Cliente } from '../cliente.model';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-cliente-add',
  templateUrl: './cliente-add.page.html',
  styleUrls: ['./cliente-add.page.scss'],
})
export class ClienteAddPage implements OnInit {
  @Input() cliente: Cliente;
  isEditMode = false;
  form:FormGroup;

  constructor(private clientesService: ClientesService, private loadingCtrl: LoadingController, private http: HttpClient , private modalCtrl: ModalController) { }

  ngOnInit() {
    this.createAddClienteForm();
    if(this.cliente) {
      this.isEditMode = true;
      this.setFormValues();
    }
  }

  createAddClienteForm() {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      surname: new FormControl(null, [Validators.required]),
      user_id: new FormControl(null, [Validators.required]),
      dni: new FormControl(null, [Validators.required]),
      estado: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      fecha_nacimiento: new FormControl(null, [Validators.required]),
      direccion: new FormControl(null, [Validators.required]),
      ciudad: new FormControl(null, [Validators.required]),
      provincia: new FormControl(null, [Validators.required]),
      telefono: new FormControl(null, [Validators.required]),
      observaciones: new FormControl(null),
    });
  }

  setFormValues() {
    this.form.setValue({
      name: this.cliente.name,
      surname: this.cliente.surname,
      user_id: this.cliente.user_id,
      dni: this.cliente.dni,
      estado: this.cliente.estado,
      email: this.cliente.email,
      fecha_nacimiento: this.cliente.fecha_nacimiento,
      direccion: this.cliente.direccion,
      ciudad: this.cliente.ciudad,
      provincia: this.cliente.provincia,
      telefono: this.cliente.telefono,
      observaciones: this.cliente.observaciones,
    });
    this.form.updateValueAndValidity();
  }

  closeModal(data = null) {
    this.modalCtrl.dismiss(data);
  }


  async submitCliente() {
    //console.log(this.form.value);
    const loading = await this.loadingCtrl.create({message: 'Loading ...'});
    loading.present();

    let response: Observable<Cliente>;

     if(this.isEditMode) {
      response = this.clientesService.updateCliente(
        this.cliente.id,
        this.form.value
        );
     }else {
      response = this.clientesService.addCliente(
        this.form.value
        );
    }
    response.pipe(take(1))
      .subscribe((cliente) => {
         loading.dismiss();
         this.form.reset();

         if(this.isEditMode) {
           this.closeModal(cliente);
         }
      });

      //this.http.post<any>('http://alejet-jllky.run-eu-central1.goorm.io/api/clientes/', this.form.value);
      //console.log(this.form.value);
  }

}
