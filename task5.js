const database = {
  studentsList: {
    'xamidullo': {
      name: "xamidullo",
      age: 33,
      id: 123,
      tolov: false
    }
  },
  


  create(user) {
    this.studentsList[user.name] = user
    return this.studentsList
  },

  
  read(name) {
    return this.studentsList[name] || null
  },

  
  update(name, user) {
    if (this.studentsList[name]) {
      this.studentsList[name] = { ...this.studentsList[name], ...user }
      return this.studentsList[name]
    } else {
      return `${name} topilmadi!`
    }
  },

  
  delete(name) {
    if (this.studentsList[name]) {
      delete this.studentsList[name]
      return `${name} o'chirildi!`
    } else {
      return `${name} topilmadi!`
    }
  }
}



database.create({
  name: "azizbek",
  age: 21,
  id: 456,
  tolov: true
})
console.log("READ:", database.read("azizbek"))
database.update("azizbek", {
  age: 22,
  tolov: false
})

console.log("AFTER UPDATE:", database.read("azizbek"));

console.log(database.delete("azizbek"));
console.log("AFTER DELETE:", database.studentsList);
