import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ligas } from 'src/app/modelos/ligas.model';
import { LigasService } from 'src/app/servicios/ligas.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-lista-ligas',
  templateUrl: './lista-ligas.component.html',
  styleUrls: ['./lista-ligas.component.scss'],
  providers: [LigasService]
})
export class ListaLigasComponent implements OnInit {
  public token: String;
  public idLigas =  ''
  public listaLigas: any;
public ligaModel: Ligas;
public ligas: any;
public nombreBuscar = {nombre: ''};
public ligaSeleccionado: any;

  constructor(public _ligasService: LigasService, private _usuarioService: UsuarioService,
    private _router: Router) {
    this.token = this._usuarioService.getToken();
    this.ligaModel = new Ligas("","","");
   }

  ngOnInit(): void {
    this.verLigas();
    this.mostrarHoteles();
  }

  verLigas(){
    this._ligasService.verLigas().subscribe(
      response=>{
        this.listaLigas = response.ligasEncontradas;
        console.log(response.ligasEncontradas)
      },
      error=>{
    }
    )
  }
  mostrarHoteles(){
    this._ligasService.verLigas().subscribe(
      response=>{
        console.log(response)
        this.ligas=response.ligasEncontradas;
      },
      error=>{
        console.log(<any>error)
      }
    )
}


buscarLigaNombre(nombre: any){
  this.nombreBuscar.nombre = nombre;
  this._ligasService.buscarLiga(this.nombreBuscar).subscribe(
    response=>{
      console.log(response);
      this.ligaSeleccionado=response.ligaEncontrada;
      localStorage.setItem("ligaSeleccionado",JSON.stringify(this.ligaSeleccionado));
      this._router.navigate(['/equipos']);
    },
    error=>{
      console.log(<any>error);


    }
  )
}
editarLiga(){
  this._ligasService.editarLiga(this.ligaModel, this.token).subscribe(
   response => {
   console.log(response);
   this.verLigas();

  })
}

eliminarLiga(id: any){
  this._ligasService.eliminarLiga(id, this.token).subscribe(
    response => {
      console.log(response)
      this.verLigas();
    }
  )

 }
 obtenerLiga(_id: any){
  this.idLigas=_id;
  this._ligasService.obtenerLiga(this.idLigas, this.token).subscribe(
    response => {
      this.ligaModel = response.liga_registrado
      console.log(response.liga_registrado);
  })

}
}
