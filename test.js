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

let index = 5;

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

function saymyname(){
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



    




























