import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from 'src/app/Models/produto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient) {}

  findAll(): Observable<Produto[]> {
    const url = `${this.baseUrl}/produtos`
    return this.http.get<Produto[]>(url)
  }

  findById(id: String):  Observable<Produto>{
    const url = `${this.baseUrl}/produtos/${id}`;
    return this.http.get<Produto>(url);
  }

  create(produto: Produto): Observable<Produto> {
    const url = `${this.baseUrl}/produtos`
    return this.http.post<Produto>(url, produto)
  }

  update(produto: Produto): Observable<void> {
    const url = `${this.baseUrl}/produtos/${produto.id}`
    return this.http.put<void>(url, produto)
  }
}
