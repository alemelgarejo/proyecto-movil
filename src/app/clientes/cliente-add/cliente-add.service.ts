import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cliente } from '../cliente.model';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})

export class ClientesService {

  constructor(private http: HttpClient) { }


  addCliente(cliente: Cliente): Observable<Cliente>  {

    return this.http.post<Cliente>('http://alejet-jllky.run-eu-central1.goorm.io/api/clientes', cliente);
  }
}
