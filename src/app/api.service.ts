import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public teste = 'teste'

  // public urlApi = 'http://localhost:3000'
  public urlApi = 'https://apippn.herokuapp.com'

  constructor() { }
}
