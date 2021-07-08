import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ligas } from '../modelos/ligas.model';
import { Usuario } from '../modelos/usuario.model';
import { GLOBAL } from './global.service';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class LigasService {
  public url: String;
  public token: any;
  public identidad: any;
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(public _http: HttpClient, public _usuarioService: UsuarioService) {
    this.url = GLOBAL.url , this.token = this._usuarioService.getToken(); }

  registroLiga(liga: Ligas, token: any): Observable<any>{
    let params = JSON.stringify(liga);
    let headersToken = this.headersVariable.set('Authorization', this.getToken())
    return this._http.post(this.url + "crearLiga", params , {headers: headersToken})
  }

  verLigas(): Observable<any>{
    let headersToken = this.headersVariable.set("Authorization", this.token);
    return this._http.get(this.url + "verLigas",  {headers: headersToken});

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
}
