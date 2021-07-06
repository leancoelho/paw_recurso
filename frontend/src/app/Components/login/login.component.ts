import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthRestServiceService } from 'src/app/services/auth-rest-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName : string;
  password:string;

  constructor(private router: Router, private authService: AuthRestServiceService) { 
    this.password="";
    this.userName="";
  }

  ngOnInit(): void {
  }

  login(): void{
    console.log("clicou no login")
    this.authService.login(this.userName, this.password).subscribe((user : any)=>{
      console.log(user);
      if (user && user.token) {
        localStorage.setItem('currentUser', JSON.stringify({ auth: true, nome:user.nome,role: user.role, id:user._id,token: user.token ,userName: user.userName, email:user.email}));
       this.router.navigate(['/menu']);
      } else {
        alert('Erro no login!');
      }
    })
  }

}
