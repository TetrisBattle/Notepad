class DataHandler {
  constructor(items) {
    items ? this.items = items :
      console.log("%cERROR: DataHandler needs array of data", 
      "color: red; font-size: 24px;")
  }
  
  printData() { console.log(items) }
  
  hasName(name) {
    // const names = []
    // items.forEach((item) => {
    //   names.push(item.name)
    // })
    
    const names = this.getAllNames()
    return names.includes(name)
  }
  
  hasItem(name) {
    return items.some((item) => item.name === name)
  }
  
  allItemsAreHigherThan(value) {
    return items.every((item) => item.value > value)
  }
  
  getItem(value) {
    return items.find((item) => item.name === value)
  }
  
  getAllHigherThan(value) {
    return this.items.filter((item) => item.value > value)
  }
  
  getAllNames() {
    return this.items.map((item) => item.name)
  }
  
  totalOfvalues() {
    return items.reduce((currentTotal, item) => {
      return item.value + currentTotal
    }, 0) // starts from 0
  }
}

const items = [
  { name: "A",  value: 1 },
  { name: "B",  value: 2 },
  { name: "C",  value: 3 },
  { name: "D",  value: 4 },
  { name: "E",  value: 5 }
]

const dataHandler = new DataHandler(items)
dataHandler.printData()
console.log(dataHandler.hasName("B")) // forEach, includes
console.log(dataHandler.hasItem("B")) // some
console.log(dataHandler.allItemsAreHigherThan(0)) // every
console.log(dataHandler.getItem("B")) // find
console.log(dataHandler.getAllHigherThan(3)) // filter
console.log(dataHandler.getAllNames()) // map
console.log(dataHandler.totalOfvalues()) // reduce
