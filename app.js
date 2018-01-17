//const app= require("./dist/all");
const {user,person} = require("./dist/all");
console.log(person,user)
const userdemo =new user("user") ;
const persondemo = new person("person")
console.log(userdemo.printname());
console.log(persondemo.printpersonname());
const mydemo =new user("ddd-user");
console.log(mydemo.printname());