function firstUniqueChar(s) {
  for (let i = 0; i < s.length; i++) {
    let ch = s[i]
    let count = 0
    for (let j = 0; j < s.length; j++) {
      if (s[j] === ch) {
        count++
      }
    }

    
    if (count === 1) {
      return i
    }
  }

  return -1
}
let s=prompt("Stringni kirit")
alert(firstUniqueChar(s))

