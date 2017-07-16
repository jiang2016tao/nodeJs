/**
 * Created by Administrator on 2017/7/16.
 */
var file=require("../models/file");

exports.showIndex=function(req,res,next){
    file.getAllFileDirs(function(err,data){
        if(err){
            console.log(err);
            next();
            return;
        }
        res.render("index",{"albums":data});
    })
};

exports.getAblum=function (req,res,next) {
    var ablumName=req.params.ablumName;
    console.log(ablumName);
    file.getAblum(ablumName,function(err,data){
        if(err){
            console.log(err);
            next();
            return;
        }
        console.log("jiang");
        res.render("ablum",{"albums":data,"albumName":ablumName});
    })
};