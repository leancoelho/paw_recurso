import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { categoria } from 'src/app/model/categoria';
import { LocalModel } from 'src/app/model/local';
import { User } from 'src/app/model/user';
import { AuthRestServiceService } from 'src/app/services/auth-rest-service.service';
import { LocalRestServiceService } from 'src/app/services/local-rest-service.service';

@Component({
  selector: 'app-editar-local',
  templateUrl: './editar-local.component.html',
  styleUrls: ['./editar-local.component.css']
})
export class EditarLocalComponent implements OnInit {
  public formulario: FormGroup = new FormGroup({
    titulo: new FormControl(null, [Validators.required]),
    descricao: new FormControl(null, [Validators.required]),
    imagem: new FormControl(null,[Validators.required]),
    countlike: new FormControl(0),
    countdislike: new FormControl(0),
    category: new FormControl
    });
  currentLocal:any;
  local: LocalModel = new LocalModel();
  currentUser: User;
  currentUserID: string;
  userName:string;
  img:string | undefined;
  erro!:any;
  categ=new FormControl();
  categorias = this.enumSelector(categoria);
 
  
  constructor(
    private auth: AuthRestServiceService,
    private router: Router,
    private rest: LocalRestServiceService,
    private route: ActivatedRoute
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
    this.route.params.subscribe(params =>{
      console.log(params);
      this.rest.getLocal(params.id).subscribe((Local: any)=>{
          this.currentLocal=Local;
          this.img=this.currentLocal.imagem;

    });

    })
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

  updateLocal(): void {
    console.log('chegou aqui');
    console.log(this.currentLocal);
    this.formulario.value["category"]=this.categ.value;
    this.rest.editLocal(this.currentLocal).subscribe((currentLocal: any) => {
      if (currentLocal) {
        console.log(currentLocal);
      } else {
        alert('Erro no update!');
      }
    });
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
