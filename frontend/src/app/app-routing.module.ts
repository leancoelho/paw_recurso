import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarLocaisComponent } from './Components/criar-locais/criar-locais.component';
import { LoginComponent } from './Components/login/login.component';
import { MenuComponent } from './Components/menu/menu.component';
import { PerfilComponent } from './Components/perfil/perfil.component';
import { RegistarComponent } from './Components/registar/registar.component';
import { TodosLocaisComponent } from './Components/todos-locais/todos-locais.component';
import { VerLocalComponent } from './Components/ver-local/ver-local.component';

const routes: Routes = [ 
  {path: 'login', component: LoginComponent },  
  {path: 'registar', component: RegistarComponent },
  {path: 'menu', component: MenuComponent },
  {path: 'criarLocal', component: CriarLocaisComponent },
  {path: 'perfil', component: PerfilComponent },
  {path: 'allLocais', component: TodosLocaisComponent },
  {path: 'verlocal/:id', component: VerLocalComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
