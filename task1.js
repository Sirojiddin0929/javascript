function poison(drinks){
    return drinks.sort((a,b)=>a.price-b.price)

}
let drinks=[]
let n=+prompt("Nechta dictdan iborat")
for(let i=0; i<n; i++){
    let name=prompt(`${i+1}-elementni kiritng: `)
    let price=+prompt(`${i+1}-eelemnt narxi `)
    drinks.push({"name":name,"price":price})
}
console.log(poison(drinks))
