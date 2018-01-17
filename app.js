const app= require("./dist/all");
console.log(app)
const user =new app.user("user") ;
const person = new  app.person("person")
console.log(user.printname());
console.log(person.printpersonname())