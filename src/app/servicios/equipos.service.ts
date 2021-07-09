import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipos } from '../modelos/equipo.model';
import { GLOBAL } from './global.service';
import { LigasService } from './ligas.service';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {

  public url: String;
  public token: any;
  public identidad: any;
  public liga: any;
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(public _http: HttpClient, public _ligasService: LigasService) {
    this.url = GLOBAL.url , this.token = this._ligasService.getToken(); }

  registroEquipo(equipo: Equipos, token: any): Observable<any>{
    let params = JSON.stringify(equipo);
    let headersToken = this.headersVariable.set('Authorization', this.getToken())
    return this._http.post(this.url + "crearEquipo", params , {headers: headersToken})
  }

  verLigas(): Observable<any>{
    let headersToken = this.headersVariable.set("Authorization", this.token);
    return this._http.post(this.url + "verEquipos",  {headers: headersToken});

  }
  obtenerListaEquipo(equipo: any): Observable<any>{
    let params = JSON.stringify(equipo);

    return this._http.post(this.url + "verEquipos", params, {headers: this.headersVariable})
  }

  getToken(){
    var token2 = localStorage.getItem("token");
    if(token2 != "undefined"){
      this.token = token2;
    }else{
      this.token = null;
    }
    return this.token;
  }
  getLiga(){
    var liga2 = JSON.parse(localStorage.getItem("ligaSeleccionado")||"{}");
    if(liga2 != "undefined"){
      this.liga = liga2;
    }else {
      this.liga = null;
    }
    return this.liga;
  }
}


