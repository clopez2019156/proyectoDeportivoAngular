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
  public ligaModel: Ligas;

  constructor(public _ligasService: LigasService, private _usuarioService: UsuarioService,
    private _router: Router) {
    this.token = this._usuarioService.getToken();
    this.ligaModel = new Ligas("","","");
   }

  ngOnInit(): void {
    this.verLigas();
  }

  verLigas(){
    this._ligasService.verLigas().subscribe(
      response=>{
        this.ligaModel = response.ligasEncontradas;
        console.log(this.ligaModel)
      },
      error=>{

      
    }
    )
  }

}
