let length = 8
let pass = ""
let numbers = "0123456789"
let specialChars = "`~!@#$%Z^&*()*+,-./?"
let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdijkmnopqrstuvwxyz'
str += str + numbers
str += str + specialChars
for (let i = 1; i <= length; i++) {
   let char = Math.floor(Math.random() * str.length + 1)
   //    console.log(Math.random() * str.length + 1);
   console.log(str.charAt(char));
   pass += str.charAt(char)
}

console.log(pass);
