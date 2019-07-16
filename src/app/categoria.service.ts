import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { Categoria } from './models/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  public categoriasUrl = `${this.apiService.urlApi}/categorias`

  constructor(
    private apiService: ApiService,
    private http: HttpClient) { }

  public listar() {
    return this.http.get<Categoria[]>(this.categoriasUrl)
  }
}
