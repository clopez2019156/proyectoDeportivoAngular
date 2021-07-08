import { Component, OnInit } from '@angular/core';
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

  constructor(private _ligasService: LigasService, private _usuarioService: UsuarioService) {
    this.token = this._usuarioService.getToken();
    this.ligaModel = new Ligas("","","");
   }

  ngOnInit(): void {
    this.verLigas();
  }

  verLigas(){
    this._ligasService.verLigas(this.token).subscribe(
      response=>{
        this.ligaModel = response.ligasEncontradas;
      },
      error=>{

      
    }
    )
  }

}
