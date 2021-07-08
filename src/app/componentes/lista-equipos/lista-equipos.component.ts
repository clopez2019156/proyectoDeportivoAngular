import { Component, OnInit } from '@angular/core';
import { EquiposService } from 'src/app/servicios/equipos.service';
import { LigasService } from 'src/app/servicios/ligas.service';

@Component({
  selector: 'app-lista-equipos',
  templateUrl: './lista-equipos.component.html',
  styleUrls: ['./lista-equipos.component.scss'],
  providers: [EquiposService, LigasService]
})
export class ListaEquiposComponent implements OnInit {

  public equipos: any = {liga: ''};
  public equiposs:any;
    constructor(public _ligaService: LigasService,
      public _equipoService: EquiposService,) {
        //this.eventos = _eventoService.getHotel();
       }


  ngOnInit(): void {
    this.obtenerListaEquipos()
  }

  obtenerListaEquipos(){
  this.equipos.liga = this._equipoService.getLiga()._id;
  this._equipoService.obtenerListaEquipo(this.equipos).subscribe(
    response => {
      this.equiposs = response.equiposEncontrados;
        console.log(response.equiposEncontrados);
    },error=>{
      console.log(<any>error);

  }
  )
}

}
