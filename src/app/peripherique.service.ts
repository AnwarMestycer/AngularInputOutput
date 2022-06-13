import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Peripherique } from './peripherique';

@Injectable({
  providedIn: 'root'
})
export class PeripheriqueService {
  urlApi = 'assets/ecom.json/'
  constructor( private _Http : HttpClient) { }
  getProdService(){
    return this._Http.get<any>(this.urlApi) }

  // getProdById( ref : string){
  //   return this._Http.get<Peripherique[]>(this.urlApi).pipe()
  // }
}

