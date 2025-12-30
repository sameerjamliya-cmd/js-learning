/*const accountid = 113344
let accountemail="sameer@gmail.com"
accountpass="223344"
accountcity="indore"
console.log(accountid);
let accountstate
console.table([accountid,accountemail,accountpass,accountcity,accountstate])
let score =  112
let valueInnumber= Number(score)
console.log(valueInnumber)
console.log(typeof valueInnumber)
let loggedin = 1
console.log(typeof loggedin)
let booleanloggedin = Boolean(loggedin)
console.log( booleanloggedin)
let somenumber = 33
let somenumber1 = String(somenumber)
console.log(somenumber)
console.log(typeof somenumber1) */
/*let myname = "Sameer"
let mynaam = myname
mynaam= "Sameer jamliya"
console.log(myname);


console.log(mynaam);*/
/*let userone={
    email: "sameer@jamliya",
    upiid :"sam@upi"
}
let usertwo = userone
usertwo.email= "sameer2jamliya@gmail.com"
console.log(userone.email);
console.log(usertwo.email);*/

/*let gamename = new String("Sameerj")
console.log(gamename[1]);
console.log(gamename.toUpperCase())
let newname = gamename.substring(0,5)
newname1=gamename.slice(-7,4)
console.log(newname);
console.log(newname1);

const sentence = "The quick brown fox jumps over the lazy dog.";

let i = 5;

console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
// Expected output: "An index of 5 returns the character u"

index = -4;

console.log(`An index of ${index} returns the character ${sentence.at(index)}`);

// Expected output: "An index of -4 returns the charact
let number = 1000000000
console.log(number.toLocaleString("en-IN"));*/
/*let mydate = new Date("01-07-2025")
console.log(mydate.toLocaleString());*/
/*const myarr = [1,2,3,4,5,6,7,8,9]
const myarr1= myarr.slice(2,5)
console.log(myarr);
console.log(myarr1);
const myarr2 = myarr.splice(2,7)
console.log(myarr);
console.log(myarr2);*/
/*const marvelheroes = ["spiderman","ironman","thor","hulk","captain america"]
const dcheroes = ["batman","superman","flash","aquaman","wonderwoman"]
const allheroes = marvelheroes.concat(dcheroes)
console.log(allheroes);
const allheroes1 = [...marvelheroes,...dcheroes]
console.log(allheroes1);*/
/*const  my_arr = [1,2,4,5,[2,5,8,9],[11,22,33,[3,5,88,566]]]
const flatarr = my_arr.flat(2)
console.log(flatarr);
console.log(Array.from("Sameer"));
console.log(Array.from({name :"Sameer"}));*/
/*let s1= 100
let s2= 200
let s3= 300
const mysym= Symbol("key1")
console.log(Array.of(s1,s2,s3));
const my_user= {
    name: "Sameer",
    [mysym] : "i am a symbol",
    email: "sameerjamliya@gmail.com"}


console.log(my_user.email);
console.log(my_user["email"]);
console.log(my_user[mysym]);
console.log(typeof my_user[mysym]);
my_user.email= "sameer2jamliya@gmail.com"
Object.freeze(my_user)
my_user.email= "sameer3jamliya@gmail.com"
console.log(my_user.email);
console.log(my_user);*/
/*const my_user= {
    name: "Sameer",
   email: "sameerjamliya@gmail.com",
   age: 24,
   location: "indore"
}

my_user.greeting = function(){
    console.log(`Hello my name is ${this.name} and my email is ${this.email} and I am ${this.age} years old from ${this.location}`);
}
console.log(my_user.greeting())*/
/*const tinder_user = {}
tinder_user.name = "sameer"
tinder_user.age = 24
tinder_user.email = "sameerjamliya@gmail.com"
tinder_user.isloggedin = false
//console.log(tinder_user);
/*const new_user={
    name:{
        user_name:"samfam",
        first_name:"sameer",
        last_name:"jamliya"
    },
    age:24,
    email:"sameerjamliya@gmail.com"
    }*/
//console.log(new_user.name.first_name);
//console.log(Object.keys(tinder_user));
//console.log(typeof Object.values(tinder_user));
//const {name:n,age ,email}=tinder_user
//console.log(n);
//console.log(age);
//console.log(email)

/*function saymyname(){
    console.log("Hello my name is Sameer");
    
    
}
saymyname()
function sumtwo(num1,num2){
    return num1+num2
} 
const mysum = sumtwo(5,10)
console.log(mysum);
function msg_user(user_name){
    if(!user_name){
        console.log("pls enter your name");
        return
        
    }
    return `${user_name} logged in successfully`}

   
 console.log(msg_user("kratika"));

const tinder_user = {}
tinder_user.name = "sameer"
tinder_user.age = 24
tinder_user.email = "sameerjamliya@gmail.com"
tinder_user.isloggedin = false 
function object_user(obj){
    console.log(`User name is ${obj.name} and age is ${obj.age} and email is ${obj.email} and is logged in : ${obj.isloggedin}`)}


object_user(tinder_user) 
const myarr = [1,2,3,4,5,6,7,8,9]
function one(){
    const username = "sameer"
    function two(){
        const greet = "hello world"
        console.log(`${greet} ${username}`);
    }
    //console.log(greet)
    two()
}
const one_obj={
    username : "sameer",
    greet : "hello world",
    two : function(){
        console.log(`${this.greet} ${this.username}`);
    }
}
one_obj.two()*/
/*const arrow_func = ()=>{
    user_name = "sameer"
    console.log(this.user_name);
    
}
arrow_func()
const sum_two = (numm1 , num2) =>  (numm1 + num2)
   

console.log(sum_two(33,44));*/
/*(function chai(){
    console.log("u are connected");
    
}
)();
( (name) => {
    console.log(`u are again connected ${name}`);
    

})(`sameer`);
const month = 13
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
        
    

    default:
        break;
}*/
/*for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(`outer loop ${element}`);
    
    for (let j = 0; j <= 10; j++) {
        const element =  j;
        console.log(element);
        
        
    }
    
    
}*/
/*for (let i = 0; i < 11; i++) {
    if (i===5) {
        console.log(`5 is detected`);
        break;}
    console.log(i);
        
   
    
}
for (let i = 0; i < 11; i++) {
    if (i===5) {
        console.log(`5 is detected`);
        continue;}
    console.log(i);
        
   
    
}*/
/*let dcheroes = ["batman","superman","flash","aquaman","wonderwoman"]
let arr = 0
while (arr < dcheroes.length) {
    console.log(dcheroes[arr]);
    arr++;
}*/
/*let score =1 
do {
    console.log(`your score is ${score}`);
    score++
    
} while (score<=10);
let myarr = [1,2,3,4,5,6,7,8,9]
for (const num of myarr) {
    console.log(num);
    
}*/
/*const map = new Map()
map.set("name","sameer")
map.set("age",24)
map.set("email","sameerjamliya@gmail.com")
for (const [key, value] of map) {
    console.log(`Key is ${key} and value is ${value}`);

    
}*/
/*const myobj ={
    name: "sameer",
    age: 24,
    email: "sameerjamliya@gmail.com",
    City : "indore",
    state : "madhyapradesh",

}
for (const key in myobj) {
    console.log(`${key} : ${myobj[key]}`);
    
    
    
}
const map = new Map()
map.set("name","sameer")
map.set("age",24)
map.set("email","sameerjamliya@gmail.com")
for (const key in map) {
    console.log(key);
    
    
    
}
for (const key in object) {
    if (!Object.hasOwn(object, key)) continue;
    
    const element = object[key];
    
    
}*/
/*const myarr = [1,2,3,4,5,6,7,8,9]
myarr.forEach((num)=>{
    console.log(num);

})
function printnum(num){
    console.log(num);
    
}
myarr.forEach(printnum)*/
/*const arrobj=[
    {name:"sameer",age:24},
    {name:"kratika",age:22},
    {name:"jamliya",age:26}

]
arrobj.forEach((obj)=>{
    console.log(`name is ${obj.name} and age is ${obj.age}`);
    
    
})*/
/* myarr= [1,2,3,4,5,6,7,8,9]
const newarr = myarr.filter((num)=> num>5)
console.log(newarr);
const newrr1=[]
myarr.forEach((num)=>{
    if (num>5) {
        newrr1.push(num)
        
    }})
    console.log(newrr1);*/

const myarr= [1,2,3,4,5,6,7,8,9]
const newarr= myarr.reduce((acc,vals)=>acc+vals,2)
console.log(newarr);

              


    





    




























