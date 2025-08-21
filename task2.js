function object(obj){
    let arr=[]
    for(let key in obj){
        arr.push([key,obj[key]])
    }
    return arr


}
let obj={}
let n=+prompt("Dictda nechta obj bor")
for(let i=0; i<n; i++){
   let key=prompt(`${i+1}-elemntni kiriting`)
   let value=+prompt(`${key}-narxi`)
    obj[key]=value
}
console.log(object(obj))