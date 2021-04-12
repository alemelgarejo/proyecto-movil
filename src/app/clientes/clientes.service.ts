import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Cliente } from './cliente.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {


  constructor(private http: HttpClient) { }

  getClientes() {
    return this.http.get<any>('http://alejet-jllky.run-eu-central1.goorm.io/api/clientes');
  }
  getCliente(clienteId: String) {
    return this.http.get('http://alejet-jllky.run-eu-central1.goorm.io/api/clientes/'+clienteId);
  }
  addCliente(cliente: Cliente): Observable<Cliente>  {
    return this.http.post<Cliente>('http://alejet-jllky.run-eu-central1.goorm.io/api/clientes', cliente);
  }
  updateCliente(clienteId:number, cliente: Cliente): Observable<Cliente>  {
    return this.http.put<Cliente>('http://alejet-jllky.run-eu-central1.goorm.io/api/clientes/'+clienteId, cliente);
  }
  deleteCliente(clienteId: number): Observable<Cliente>{
    return this.http.delete<Cliente>('http://alejet-jllky.run-eu-central1.goorm.io/api/clientes/'+clienteId);
  }
}
