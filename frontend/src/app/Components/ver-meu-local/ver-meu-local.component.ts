import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalModel } from 'src/app/model/local';
import { User } from 'src/app/model/user';
import { AuthRestServiceService } from 'src/app/services/auth-rest-service.service';
import { LocalRestServiceService } from 'src/app/services/local-rest-service.service';

@Component({
  selector: 'app-ver-meu-local',
  templateUrl: './ver-meu-local.component.html',
  styleUrls: ['./ver-meu-local.component.css']
})
export class VerMeuLocalComponent implements OnInit {
  currentLocal: any;  
  currentUser: User;
  userName : string;
  img: any;
  comment: string;

  constructor(private router: Router, private route: ActivatedRoute, private rest: LocalRestServiceService,private auth: AuthRestServiceService) {
   // this.currentLocal = new LocalModel();
    this.currentUser = new User();
    this.userName = '';
    this.comment='';
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


  updateLocal(): void {
    console.log("chegou aqui");
    
    this.currentLocal.comentarios[this.currentLocal.comentarios.length]=this.comment;
    
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

  deleteLocal(){
    console.log('chegou aqui');
    console.log(this.currentLocal._id);
    this.rest.deleteLocal(this.currentLocal._id).subscribe((currentLocal: any) => {
      if (currentLocal) {
        console.log(currentLocal);
        this.router.navigate(['/meuslocais']);
      } else {
        alert('Erro na remoção!');
      }
    });
  }

}