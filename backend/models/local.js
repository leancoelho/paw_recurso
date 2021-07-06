const { ObjectID } = require('bson');
var mongoose = require('mongoose');
var categoriaEnum = [ "IGREJA", "PAISAGEM" ,"PARQUE" , "PRAIA","MONUMENTO"];
var LocalSchema = new mongoose.Schema({
    userID: {
        type: String
    },
    titulo: {
        type: String
    },
    descricao:{
        type:String
    },
    imagem:{
        type:String
    },
    like:{
        type:[String]
    },
    dislike:{
        type: [String]
    },
    comentarios:{
        type: [String]
    },
    countlike: Number,
    countdislike: Number,
    categoria:  {
        type: String,
        //enum: categoriaEnum,
    },
    verifica: Boolean

});

module.exports = mongoose.model('Local', LocalSchema);