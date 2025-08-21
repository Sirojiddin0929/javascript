function title(str){
    let a=str.split(' ')
    return a.every(i=> i[0]===i[0].toUpperCase())
}


let str=prompt("Stringni kirit")
alert(title(str))