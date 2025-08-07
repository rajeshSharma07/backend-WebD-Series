//import { faker } from '@faker-js/faker';

// CJS
const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');


let getRandomUser = ()=> {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(), // before version 9.1.0, use userName()
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'my_app',
  password:'Basti@123',
});
//insertig new data
// let q="INSERT INTO user(id, username, email, password) VALUE(?,?,?,?)";
//  let user =["123","123_newuser","abc@gmail.com", "abc"];



// insert multiple data

// let q="INSERT INTO user(id, username, email, password) VALUES ?";
//  let users =[
//   ["123b","123_newuserb","bcc@gmail.comb", "chintu"],
//  ["123c","1235_newusers","cd@gmail.comc", "badmas"],
//  ];


let q ="INSERT INTO user (id,username,email,password) VALUES ?";
let data = [];
for (let i=1;i<=100;i++){
  const u = getRandomUser();
  data.push([u.userId, u.username, u.email, u.password]); // 
}

 try{
 connection.query(q,[data],(err,result)=>{
    if (err) throw err;
    console.log(`✅ Successfully inserted ${result.affectedRows} users`);
  });
//     // console.log(result.length);
//     // console.log(result[0]);
//     // console.log(result[1]);
 }
 catch(err){
    console.log(err);
 }

 connection.end();

// let  getRandomUser=()=> {
//   return {
//     userId: faker.string.uuid(),
//     username: faker.internet.username(), // before version 9.1.0, use userName()
//     email: faker.internet.email(),
//     //avatar: faker.image.avatar(),
//     password: faker.internet.password(),
//     // birthdate: faker.date.birthdate(),
//     // registeredAt: faker.date.past(),
//   };
// }

// //console.log(getRandomUser());