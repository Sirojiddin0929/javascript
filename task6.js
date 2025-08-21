function doublechar(str){
    let natija=''
   for (let char of str){
      natija+=char.repeat(2)


   }
   return natija
}
let str=prompt("Stringni kirit")
alert(doublechar(str))