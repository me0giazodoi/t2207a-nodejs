const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const mysql = require("mysql");

app.listen(PORT,function (){
    console.log("server is running...");
});

const config = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 't2207a',
    multipleStatements: true
};
const conn = mysql.createConnection(config);

app.get("/",function (req,res){
    res.send("Hello world!");
});
app.get("/lophoc",function (req,res){
    const sql = "select * from lophoc";
    conn.query(sql,function (err,data){
        res.send(data);
    })
});
app.get("/sinhvien",function (req,res){
    const sql = "select * from sinhvien";
    conn.query(sql,function (err,data){
        res.send(data);
    })
});
app.get("/sinhvien-theo-lop",function (req,res){
    const lh = req.query.lhid;
    const sql = "select * from sinhvien where lhid="+lh;
    conn.query(sql,function (err,data){
        res.send(data);
    })
})
app.get("/tim-kiem-sinhvien",function (req,res){
    const q = req.query.q;
    const sql = `select * from sinhvien where name like '%${q}%'`;
    conn.query(sql,function (err,data){
        res.send(data)
    })
});