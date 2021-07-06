import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalModel } from 'src/app/model/local';
import { User } from 'src/app/model/user';
import { AuthRestServiceService } from 'src/app/services/auth-rest-service.service';
import { LocalRestServiceService } from 'src/app/services/local-rest-service.service';

@Component({
  selector: 'app-ver-local',
  templateUrl: './ver-local.component.html',
  styleUrls: ['./ver-local.component.css']
})
export class VerLocalComponent implements OnInit {
  currentLocal: any;  
  currentUser: User;
  userName : string;
  img: any;

  constructor(private router: Router, private route: ActivatedRoute, private rest: LocalRestServiceService,private auth: AuthRestServiceService) {
   // this.currentLocal = new LocalModel();
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
    console.log(this.currentLocal);
    this.route.params.subscribe(params =>{
      console.log(params);
      this.rest.getLocal(params.id).subscribe((Local: any)=>{
          this.currentLocal=Local;
          this.img=this.currentLocal.imagem;

    });

    })
  }

 /*listLocal(): void {
    console.log('chegou aqui');
      if (this.currentLocal) {
            console.log(this.currentLocal);
            console.log(this.Locals);

            this.rest.getLocal(this.b.eventID).subscribe((evento: any) => {
              //como é apenas para listar
              this.b.eventName= evento.eventName; 
              
              this.Locals.push(this.b);
            });
        this.router.navigate(['/']);
      } else {
        alert('Erro na listagem!');
      }
    
  }*/

  updateLocal(): void {
    console.log("chegou aqui");
    this.rest.editLocal(this.currentLocal)
    .subscribe((currentLocal: any) => {
      if (this.currentLocal) {
        this.load();
      } else {
        alert('Erro no update!');
      }
    });
  }

  logout(): void {
    console.log('clicou no logout');
    this.auth.logout();
  }
  load() {
    location.reload();
  }

  like(): void{

    this.route.params.subscribe(params =>{
    this.rest.getLocal(params.id).subscribe((Local: any)=>{
      this.currentLocal=Local;

    });
    console.log(this.currentLocal);
    
    for(var i=0; i<this.currentLocal.countlike;i++){
      if(this.currentLocal.like[i]==this.currentUser.userName){
        alert("Já deu like");
        //this.load();
      }
    }
    this.rest.likeLocal(this.currentLocal, this.currentUser)
    .subscribe((currentLocal: any) => {
      if (this.currentLocal) {
        this.load();
      } else {
        alert('Erro no like!');
      }
    });
  });
}

  dislike(): void{
    this.rest.dislikeLocal(this.currentLocal, this.currentUser)
    .subscribe((currentLocal: any) => {
      if (this.currentLocal) {
        this.load();
      } else {
        alert('Erro no dislike!');
      }
    });
  }
}

