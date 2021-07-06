import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalRestServiceService } from 'src/app/services/local-rest-service.service';
import { AuthRestServiceService } from '../../services/auth-rest-service.service';
import { User } from 'src/app/model/user';
import { LocalModel } from 'src/app/model/local';

@Component({
  selector: 'app-meus-locais',
  templateUrl: './meus-locais.component.html',
  styleUrls: ['./meus-locais.component.css']
})
export class MeusLocaisComponent implements OnInit {
  local: LocalModel;
  locals: Array<LocalModel> = [];
  currentUser: User;
  userName: string;

  constructor(
    private router: Router,
    private rest: LocalRestServiceService,
    private auth: AuthRestServiceService
  ) {
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
    this.getAllLocal();
  }

  getAllLocal() {
    this.rest.getAllLocals().subscribe((locals: Array<LocalModel>) => {
      console.log(locals);
      for (let i = 0; i < locals.length; i++) {
        if (locals[i]._id != null && locals[i].userID==this.currentUser.userName) {
          this.locals.push(locals[i]);
          console.log(locals[i]);
        }
      }
    });
  }
  verMais() {
    this.rest.editLocal(this.local).subscribe((local: any) => {});
  }
  logout(): void {
    console.log('clicou no logout');
    this.auth.logout();
  }
}
