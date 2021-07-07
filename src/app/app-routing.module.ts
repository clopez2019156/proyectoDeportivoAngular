import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminstradorComponent } from './componentes/adminstrador/adminstrador.component';
import { CuentaComponent } from './componentes/cuenta/cuenta.component';
import { EquiposComponent } from './componentes/equipos/equipos.component';
import { JornadasComponent } from './componentes/jornadas/jornadas.component';
import { LigasComponent } from './componentes/ligas/ligas.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';

const routes: Routes = [
  { path: "login", component: LoginComponent},
  { path: "registro", component: RegistroComponent},
  {path: "ligas", component: LigasComponent},
  {path: "jornadas", component: JornadasComponent},
  {path: "equipos", component: EquiposComponent},
  {path: "administrador", component: AdminstradorComponent},
  {path: "cuenta", component: CuentaComponent},
  {path: "**", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
