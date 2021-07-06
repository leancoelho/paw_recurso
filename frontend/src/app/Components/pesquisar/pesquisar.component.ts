import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { categoria } from 'src/app/model/categoria';
import { LocalModel } from 'src/app/model/local';
import { User } from 'src/app/model/user';
import { AuthRestServiceService } from 'src/app/services/auth-rest-service.service';
import { LocalRestServiceService } from 'src/app/services/local-rest-service.service';

@Component({
  selector: 'app-pesquisar',
  templateUrl: './pesquisar.component.html',
  styleUrls: ['./pesquisar.component.css']
})
export class PesquisarComponent implements OnInit {
  public formulario: FormGroup = new FormGroup({
    category: new FormControl
    
    });
  local: LocalModel;
  locals: Array<LocalModel> = [];
  currentUser: User;
  userName: string;
  categ=new FormControl();
  categorias= this.enumSelector(categoria);

  constructor( private router: Router,
    private rest: LocalRestServiceService,
    private auth: AuthRestServiceService) {
      this.local = new LocalModel();
      this.currentUser = new User();
      this.userName = '';
     }

  ngOnInit(): void {
    
    var tempUser = localStorage.getItem('currentUser');
    if (tempUser != null) {
      this.userName = JSON.parse(tempUser).userName;
      this.auth.getUser(this.userName).subscribe((user: User) => {
        if (user) {
          this.currentUser = user;
          console.log(this.currentUser);
        } else {
          alert('Erro no pedido do utilizador!');
        }
      });
    }
  }

  pesquisa(){
    

  }

  logout(): void {
    console.log('clicou no logout');
    this.auth.logout();
  }
  enumSelector(definition: { [x: string]: any; }) {
    return Object.keys(definition)
      .map(key => ({ value: definition[key], title: key }));
  }
}
