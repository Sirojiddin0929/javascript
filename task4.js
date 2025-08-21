 function afterNyears(people,N){
    let human={}
    for(let i in people){
        human[i]=people[i]+N

    }
    return human


 }
 let people={}
 let n=+prompt("Nechta kalit qiymat juftligi bor")
 for(let i=0; i<n; i++){
    let name=prompt(`${i+1}-ismni kiriting`)
    let age=+prompt(`${name}-yoshini kiriting`)
    people[name]=age
 }
 let N=+prompt("Necha yildan so'ng")
 console.log(afterNyears(people,N))