import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AnuncioService {

  public anuncioUrl: string = this.apiService.urlApi

  constructor(private http: HttpClient, private apiService: ApiService) { }

  public listar() {
    return this.http.get(`${this.anuncioUrl}/anuncios`)
  }
}
