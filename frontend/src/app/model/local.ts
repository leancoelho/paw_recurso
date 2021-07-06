import { categoria } from "./categoria";

export class LocalModel{

    constructor(public _id?: string, public userID?: string, public titulo?:string, public descricao?:string, public imagem?: string, public comentarios?: [string], public like?:[string], public dislike?:[string], public categoria?: categoria, public category?: string, public countlike: number=0, public countdislike: number=0,public verifica:boolean=true ){}

  }