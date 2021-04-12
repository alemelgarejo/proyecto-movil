import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cliente } from '../cliente.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteEditService {

  constructor(private http: HttpClient) { }

  editCliente(clienteId: number, cliente: Cliente): Observable<Cliente>  {
    return this.http.put<Cliente>('http://alejet-jllky.run-eu-central1.goorm.io/api/clientes/'+clienteId, cliente);
  }
}
