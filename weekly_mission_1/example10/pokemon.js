export default class Pokemon {
    constructor (name) {
      this.name = name
    }
  
    sayMessage(message) {
        console.log(`Mi ${this.name} te dice: ${message}`)
    }

    sayHello() {
        console.log(`Mi ${this.name} te saluda!`)
    }
  }