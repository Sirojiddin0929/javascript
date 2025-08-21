function duty(arr){
    let massiv=[]
    for(let i=0; i<arr.length; i++){
        massiv.push(arr[i].name)

    }
    return massiv

}
let arr=[]
let n=+prompt("Nechta obj bor")
for(let i=0; i<n; i++){
    let name=prompt(`${i+1}-ismni kiriting`)
    let email=prompt(`${i+1}-emailni kiriting`)
    arr.push({"name":name,"email": email})
}
console.log(duty(arr))
