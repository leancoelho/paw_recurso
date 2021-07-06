import { Component, OnInit } from '@angular/core';
import { LocalModel } from 'src/app/model/local';
import { LocalRestServiceService } from 'src/app/services/local-rest-service.service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { User } from 'src/app/model/user';
import { AuthRestServiceService } from '../../services/auth-rest-service.service';

@Component({
  selector: 'app-criarLocais',
  templateUrl: './criar-locais.component.html',
  styleUrls: ['./criar-locais.component.css'],
})
export class CriarLocaisComponent implements OnInit {
  public formulario: FormGroup = new FormGroup({
    titulo: new FormControl(null, [Validators.required]),
    descricao: new FormControl(null, [Validators.required]),
    imagem: new FormControl(null,[Validators.required]),
    countlike: new FormControl(0),
    countdislike: new FormControl(0)
    });

  local: LocalModel = new LocalModel();
  currentUser: User;
  currentUserID: string;
  userName:string;
  img:string | undefined;
  erro!:any;


  constructor(
    private auth: AuthRestServiceService,
    private router: Router,
    private rest: LocalRestServiceService
  ) {
    this.currentUser = new User();
    this.userName="";
    this.currentUserID="";
  }

  ngOnInit(): void {
    var tempUser = localStorage.getItem('currentUser');

    if (tempUser != null) {
      this.userName = JSON.parse(tempUser).userName;
      this.currentUser = JSON.parse(tempUser);
    }

    this.auth.getUser(this.userName).subscribe((user: any) => {
      console.log(user);
      if (user) {
          this.currentUser = user;
          this.currentUserID=user._id;
          console.log(this.currentUser);
        }
      
    });
  }
  onFileChange(local:any) {
    const reader = new FileReader();
    
    if(local.target.files && local.target.files.length) {
      const [file] = local.target.files;
      if(file.size<100000){
      reader.readAsDataURL(file);
    
      reader.onload = () => {
   
        this.img = reader.result as string;
     
        this.formulario.patchValue({
         imagem: reader.result
        });
   
      };
    }else{
      this.erro ="Imagem muito grande";
    }
    }
  }
  createLocal(): void {
    if (this.formulario.status === 'INVALID') {
      console.log('formulario invalido');
    } else {
      console.log('na funçao de adicionar local');
      this.formulario.value["userID"]=this.currentUserID;
      this.rest.createLocal(this.formulario.value).subscribe((local: any) => {
        console.log(local);
        if (local) {
          this.router.navigate(['/menu']);
        } else {
          alert('Erro em adicionar local');
        }
      });
    }
  }

  logout(): void {
    console.log('clicou no logout');
    this.auth.logout();
  }
}
