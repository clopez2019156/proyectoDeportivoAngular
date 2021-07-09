import { Component, OnInit } from '@angular/core';
import { Equipos } from 'src/app/modelos/equipo.model';
import { EquiposService } from 'src/app/servicios/equipos.service';
import { LigasService } from 'src/app/servicios/ligas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-equipos',
  templateUrl: './lista-equipos.component.html',
  styleUrls: ['./lista-equipos.component.scss'],
  providers: [EquiposService, LigasService]
})
export class ListaEquiposComponent implements OnInit {

  public equipo: any = {liga: ''};

  public equiposEncontrados: any;


    constructor(public _ligaService: LigasService,
      public _equipoService: EquiposService,private _router: Router) {
        //this.eventos = _eventoService.getHotel();
        //this.equiposs = new Equipos("","","","","" ,"","","");
       }


  ngOnInit(): void {
    this.obtenerListaEquipo()
  }

  obtenerListaEquipo(){
  this.equipo.liga = this._equipoService.getLiga()._id;
  this._equipoService.obtenerListaEquipo(this.equipo).subscribe(
    response => {
      this.equiposEncontrados = response.equiposEncontrados;
       console.log(response.equiposEncontrados);
    },error=>{
      console.log();

  }
  )
}


}
