import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistarComponent } from './Components/registar/registar.component';
import { AuthInterceptorInterceptor } from './interceptors/auth-interceptor.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatListModule} from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MenuComponent } from './Components/menu/menu.component';
import { CriarLocaisComponent } from './Components/criar-locais/criar-locais.component';
import { PerfilComponent } from './Components/perfil/perfil.component';
import { TodosLocaisComponent } from './Components/todos-locais/todos-locais.component';
import { VerLocalComponent } from './Components/ver-local/ver-local.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MeusLocaisComponent } from './Components/meus-locais/meus-locais.component';
import { VerMeuLocalComponent } from './Components/ver-meu-local/ver-meu-local.component';
import { EditarLocalComponent } from './Components/editar-local/editar-local.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistarComponent,
    MenuComponent,
    CriarLocaisComponent,
    PerfilComponent,
    TodosLocaisComponent,
    VerLocalComponent,
    MeusLocaisComponent,
    VerMeuLocalComponent,
    EditarLocalComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatListModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
