var fs = require("fs");

exports.getAllFileDirs=function(callback){
    fs.readdir("./upload",function(err,files){
        if(err){
            callback("没有找到upload文件夹",null);
        }
        var allAlbums = [];
        (function iterator(i){
            if(i==files.length){
                console.log(allAlbums);
                callback(null,allAlbums);
                return;
            }
            fs.stat("./upload/"+files[i],function(err,status){
                if(err){
                    callback("找不到文件"+files[i],null);
                }
                if(status.isDirectory()){
                    allAlbums.push(files[i]);
                }
                iterator(i+1);
            });
        })(0);
    });
};

exports.getAblum=function (ablumName,callback) {
    fs.readdir("./upload/"+ablumName,function (err,files) {
        if(err){
            callback("没有找到文件"+ablumName,null);
            return;
        }
        var allImages=[];
        (function iterator(i){
            if (i==files.length){
                console.log(allImages);
                callback(null,allImages);
                return;
            }
            fs.stat("./upload/"+ablumName+"/"+files[i],function (err,stats) {
                if(err){
                    callback("找不到文件"+files[i],null);
                    return ;
                }
                if(stats.isFile()){
                    allImages.push(files[i]);
                }
                iterator(i+1);
            });
        })(0);
    });
};