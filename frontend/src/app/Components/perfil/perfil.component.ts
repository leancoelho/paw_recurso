import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AuthRestServiceService } from '../../services/auth-rest-service.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  password: string;
  userName: string;
  passwordV: string;
  currentUser: User;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private rest: AuthRestServiceService
  ) {
    this.userName = '';
    this.password = '';
    this.passwordV = '';

    this.currentUser = new User();
  }

  ngOnInit(): void {
    var tempUser = localStorage.getItem('currentUser');
    if (tempUser != null) {
      this.userName = JSON.parse(tempUser).userName;
      this.rest.getUser(this.userName).subscribe((user: User) => {
        if (user) {
          this.currentUser = user;
          console.log(this.currentUser);
        } else {
          alert('Erro no pedido do utilizador!');
        }
      });
    }
  }

  updateUser(): void {
    console.log(this.currentUser);

    if (this.password != '' && this.passwordV != '') {
      if (this.password == this.passwordV) {
        this.currentUser.password=this.password;
      }
    }
    this.rest.save(this.currentUser)
    .subscribe((currentUser: any) => {
      if (this.currentUser) {
        this.router.navigate(['/perfil']);
      } else {
        alert('Erro no update!');
      }
    });
  }

  deleteUser(){
    console.log(this.currentUser);
    
    this.rest.delete(this.currentUser).subscribe((currentUser: any) => {
    if (currentUser) {
      console.log(currentUser);
      this.router.navigate(['/login']);
    } else {
      alert('Erro na remoção!');
    }
  });

  }
}

