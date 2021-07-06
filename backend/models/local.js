const { ObjectID } = require('bson');
var mongoose = require('mongoose');

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
    countdislike: Number

});

module.exports = mongoose.model('Local', LocalSchema);