const Ajolonauta = require('../app/Ajolonauta');

describe("Esto es un suite  de Ajolonauta", ()=>{
    test('Caso de prueba: CREATE', () => {
        const woopa = new Ajolonauta("Woopa");
        expect(woopa.name).toBe("Woopa")
    })
})