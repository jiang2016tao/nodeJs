/**
 * Created by Administrator on 2017/7/16.
 */
var express=require("express");
var router=require("./controller/controller");
var app = express();
app.set("view engine","ejs");
app.use(express.static("./public"));
app.use(express.static("./upload"));
app.get("/",router.showIndex);
app.get("/:ablumName",router.getAblum);
app.listen(3000,"127.0.0.1");