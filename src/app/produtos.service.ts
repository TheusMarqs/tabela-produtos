import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produtos } from './produtos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http : HttpClient) { }

  getProducts() : Observable<Produtos[]> {
    let url = "http://localhost:3000/produtos";
    return this.http.get<Produtos[]>(url);
  }
}
