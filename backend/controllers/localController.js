var mongoose = require("mongoose");
var Local = require("../models/local");
const jwt = require("jsonwebtoken");
var authconfig = require("../config/authconfig");

var localController = {};

localController.createLocal = function (req, res) {
    var local = new Local(req.body);
    local.userID = req.params.id;
    local.save((err) => {
        {
            if (err) {
                console.log(err);
            } else {
                res.json(local);
            }
        }
    });
}

localController.editByID = function (req, res) {
    Local.findById(req.params._id, (err, local) => {
        if (err) {
          console.log(err);
        } else {
            local=req.body;
            Local.findByIdAndUpdate(local._id,local,(err) => {
                if (err) {
                    console.log(err);
                } else {
                    res.json(local);
                }
            });}
      });

};

localController.deleteByID = function (req, res) {
    Local.findByIdAndDelete(req.params.id, (err, deletedLocal) => {
      
        if (err) {
            console.log(err);
        } else {
            res.json(deletedLocal);
        }
    });
};

localController.showByID = function (req, res) {
    Local.findById(req.params.id, (err, dbLocal) => {
        if (err) {
            console.log(err);
        } else {
            console.log(dbLocal);
            res.json(dbLocal);
        }
    });
};

localController.showAllLocals = function (req, res){
    Local.find({}, (err, allLocals) =>{
        if(err){
            console.log(err);
        } else {
            res.json(allLocals);
        }
    });
}

localController.like = function (req, res) {
    console.log("chegou ao controlador");
    Local.findById(req.params._id, (err, local) => {
        if (err) {
          console.log(err);
        } else {
           for(var i=0;i<req.body.countdislike;i++){
                console.log("entrou");
                 if(req.body.dislike[i]==req.params.id1){
                    console.log("entrou");
                    req.body.dislike.splice(req.params.id1);
                    req.body.countdislike--;
            }
        }
                for(var i =0;i<req.body.countlike;i++){
                    if(req.body.countlike==0){
                        console.log(req.params.id1);
                        req.body.like[0]=req.params.id1;
                        req.body.countlike++;
                    
                    }
                    if(req.body.like[i]==req.params.id1){
                        console.log(err);
                    }
                }
                
                req.body.like[req.body.countlike]=req.params.id1;
                req.body.countlike++;
                }

                local=req.body;
            Local.findByIdAndUpdate(local._id,local,(err) => {
                if (err) {
                    console.log(err);
                } else {
                    res.json(local);
                }
            
        })
      });

};

localController.dislike = function (req, res) {
    Local.findById(req.params._id, (err, local) => {
        if (err) {
          console.log(err);
        } else {
            for(var i=0;i<req.body.countlike;i++){
                
                 if(req.body.like[i]==req.params.id1){
                  
                    req.body.like.splice(req.params.id1);
                    req.body.countlike--;
            }
        }
                for(var i =0;i<req.body.countdislike;i++){
                    if(req.body.countdislike==0){
                        console.log(req.params.id1);
                        req.body.dislike[0]=req.params.id1;
                        req.body.countdislike++;
                    
                    }
                }
                
                req.body.dislike[req.body.countdislike]=req.params.id1;
                req.body.countdislike++;
                }

                local=req.body;
            Local.findByIdAndUpdate(local._id,local,(err) => {
                if (err) {
                    console.log(err);
                } else {
                    res.json(local);
                }
            
        })
      });


};

module.exports = localController;