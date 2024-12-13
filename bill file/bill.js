let firstname = "great";
let lastname = "julius";
let h2elem = document.getElementById ("name")
console.log (h2elem)
h2elem.style.color = "red";

h2elem.innerHTML = firstname + " " + lastname ;

let h1elem = document.getElementById ("wel")
console.log(h1elem); 
h1elem.innerHTML = "welcome to functions";


let pelem = document.querySelector(".Hel")
console.log(pelem)

h2elem.innerHTML = "introdutions to functions"

let btnelem = document.getElementById("change")
btnelem.addEventListener("click", () => {
    h1elem.style.color = "purple";
    h2elem.style.display = "none";
})

let createbtnelem = document.querySelector(".create")

createbtnelem.addEventListener("click", () => {
 document.write("i have erased everything")
})

function addNums(){
 let result = 10+5;
 console.log(result);
}

addNums();
addNums();

function addNum(a,b){ 
    let results = (a+b)
    console.log (results)
}
 
addNum( 40,15)

addNum(10,20)


function subNum(a,b){ 
    let results = (a-b)
    //console.log (results)
    return (a-b) 
}

subNum(40,15)
subNum(7,1)

function changeBg(){
    btnelem.style.backgroundColor ="orange";
    btnelem.style.padding = "10px";
}

//changeBg()

function changeNbt(){
    btnelem.style.backgroundColor ="";
    btnelem.style.padding = "";
}

function sum(){
    let a = 10;
}




let text = "Tinubu" ;



function showmessage(text) {
    alert("Hello" + " " + text);
}


showmessage ("great");


function showmes(){
     text = "Jhon bull";
    console.log("hello" + " " + text);
}
console.log (text)
showmes( text)

console.log(text)

let customer=["caleb","david","chinazo","wisdom"];

function newmessage(sender, customerName, message){
    console.log(`${sender}:Hello ${customerName}, ${sender}   ${message}`);
}

newmessage("UBA", customer[1], "wishes you a happy new year")



function mulNum(x,y){
    let product= x*y;
   console.log (product)
    return product;
console.log(product);
}

let p = mulNum(5,4)



console.log(p);


function diffence(a,y){

return a-y;
}
let y =diffence(2,5)



function product(l,c){
    return l*c;
}
let f=product(6,8)



function sum(b,x){
    return b+x;
}
let a =sum(2,7)




function quotient(x,d){
    return x/d;
}
let s= quotient(7,9)

console.log (y + f + a + s)


for (let i = 0; i<5; i++){
    console.log(i)
}

const studentNames =["steve","bob","allex","phillip","andrew","jhon","sale","blaze","baldwin","samsin"]

for (let item = 0; item<11; item++){
    console.log (studentNames[item])
}

function sendBirthday(sender , message ,studentNames){
    console.log(`${sender}:Hello  ${studentNames}, ${sender} ${message}`);
}

for(let i = 0; i <studentNames.lenght + 1; i++) {
    sendbirthday("union Bank", "Wishes you a Happy Birthday" , studentNames[i])
}






function count(p) {
    for (let n = 0; n <=p; n++) {
        console.log(n)
    }
}

count(20);


function selectEven_Odd(p) {
    for (let n = 0; n <=p; n++) {
        if(n % 2 == 0){
            console.log(n + " is an even number");
        }else {
            console.log(n + " is an odd number")
        }
    }
}

selectEven_Odd(100)


let searchInput = document.getElementById("search-a")
let searchbtn = document.getElementById("id-btn") 
 let resultElem = document.querySelector(".sp-span")
const names = ["Great", "mmesoma", "rowland", "wisdom", "precious", "david",
    "caleb","sampson", "praise", "chinazo", "divine", "austin", "uzoma"
]

function searchNames() {
    let searchItem = searchInput.Value;
    console.log(searchItem);
    if (names.includes(searchItem)){
        resultElem.innerHTML = "student exists!"
        resultElem.style.color ="green"

    } else {
        resultElem.innerHTML = "student dose not exist!"
        resultElem.style.color = "red"
    }
}






















































