class Pokemon {
    constructor(name) {
        this.name = name
    }

    sayMessage(message) {
        console.log(`Mi ${this.name} te dice: ${message}`)
    }

    sayHello() {
        console.log(`Mi ${this.name} te saluda!`)
    }
}

module.exports = Pokemon // Esta clase se exporta en este módulo
