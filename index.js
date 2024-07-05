const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
"U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
"t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#",
"$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// const passwordoneEle = document.getElementById("password-one")
// const passwordtwoEle = document.getElementById("password-two")

const passwords = document.getElementsByClassName("password-style")
// const passwordtwoEle = document.getElementById("password-two")
passwordoneEle = passwords[0]
passwordtwoEle = passwords[1]

let inputEle = document.getElementById("input-ele")
let input = inputEle.value
password= ""

function passwordcall(){
    let input = inputEle.value
    inputEle.value =""
    let passone = passwordgenerator(input)
    passwordoneEle.innerText = passone
    password = ""

    let pass = passwordgenerator(input)
    passwordtwoEle.innerText = pass
    password = ""

}


function passwordgenerator(input){
    for(let i=0; i<input; i++){
    let random_num = Math.floor(Math.random()*characters.length)
        password +=characters[random_num]
    }
    return password
}

