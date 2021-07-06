export class LocalModel{

    constructor(public _id?: string, public userID?: string, public titulo?:string, public descricao?:string, public imagem?: string, public comentarios?: [string], public like?:[string], public dislike?:[string], public countlike: number=0, public countdislike: number=0, ){}

  }