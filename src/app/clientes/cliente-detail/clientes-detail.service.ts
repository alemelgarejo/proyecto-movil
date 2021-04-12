import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cliente } from '../cliente.model';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})

export class ClientesService {

  constructor(private http: HttpClient) { }

  getCliente(clienteId: String) {
    return this.http.get<any>('http://alejet-jllky.run-eu-central1.goorm.io/api/clientes/'+clienteId);
  }


}
