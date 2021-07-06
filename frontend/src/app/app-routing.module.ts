import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarLocaisComponent } from './Components/criar-locais/criar-locais.component';
import { EditarLocalComponent } from './Components/editar-local/editar-local.component';
import { LoginComponent } from './Components/login/login.component';
import { MenuComponent } from './Components/menu/menu.component';
import { MeusLocaisComponent } from './Components/meus-locais/meus-locais.component';
import { PerfilComponent } from './Components/perfil/perfil.component';
import { RegistarComponent } from './Components/registar/registar.component';
import { TodosLocaisComponent } from './Components/todos-locais/todos-locais.component';
import { VerLocalComponent } from './Components/ver-local/ver-local.component';
import { VerMeuLocalComponent } from './Components/ver-meu-local/ver-meu-local.component';

const routes: Routes = [ 
  {path: 'login', component: LoginComponent },  
  {path: 'registar', component: RegistarComponent },
  {path: 'menu', component: MenuComponent },
  {path: 'criarLocal', component: CriarLocaisComponent },
  {path: 'perfil', component: PerfilComponent },
  {path: 'allLocais', component: TodosLocaisComponent },
  {path: 'verlocal/:id', component: VerLocalComponent },
  {path: 'meuslocais', component: MeusLocaisComponent },
  {path: 'vermeulocal/:id', component: VerMeuLocalComponent },
  {path: 'editarlocal/:id', component: EditarLocalComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
