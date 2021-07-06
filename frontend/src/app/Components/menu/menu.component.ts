import { Component, OnInit } from '@angular/core';
import { AuthRestServiceService } from '../../services/auth-rest-service.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  currentUser: User;
  userName: string;
  constructor(private auth: AuthRestServiceService
    ) {
      this.currentUser= new User();
      this.userName="";
     }

  ngOnInit(): void {
    var tempUser = localStorage.getItem('currentUser');
    console.log(localStorage.getItem('currentUser'));
    if (tempUser != null) {
      
      this.userName = JSON.parse(tempUser).userName;
      console.log(JSON.parse(tempUser).userName);
      this.auth.getUser(this.userName).subscribe((user: User) => {
        if (user) {
          console.log(user);
          this.currentUser = user;
       } else {
          alert('Erro no pedido do utilizador!');
        }
      });
    }
  }
  logout(): void {
    console.log('clicou no logout');
    this.auth.logout();
  }

}
