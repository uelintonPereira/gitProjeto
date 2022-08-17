const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function(req ,res){
   const items = [
      {
          title: "D",
          message:"Desenvolver aplicações/seviços de forma facil"
      },
      {
          title: "E",
          message:"EJS usa Java script para renderizar HTMl"
      
      },
      {
         title: "M",
         message:"Muito facil de usar"
      },
      {
         title: "A",
         message:"Amorzinho"
      },  
      {
         title: "I",
         message:"Install EJS"
      }, 
      {
         title: "S",
         message:"Sintaxe Simples"
      }, 
   
   ]
   const subtitle = "Uma linguagem de modelagem para criação de paginas HTML utilizando JAVA SCRIPT"

    res.render("pages/index", {
       qualitys: items,
       subtitle: subtitle,
    });
 })

 app.get("/sobre", function(req ,res){
    res.render("pages/about");
 })

 app.listen(8080)

 console.log('rodando')