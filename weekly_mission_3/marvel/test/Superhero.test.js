const Superhero = require('../app/superhero');

describe("Unit Case For Superhero Class", ()=>{
    test('Case test: Create a superhero', () => {
        const captainAmerica = new Superhero("Captain America", "Steeve Roggers", "Chris Evans");
        expect(captainAmerica.nameHero).toBe("Captain America");
        expect(captainAmerica.civilName).toBe("Steeve Roggers");
        expect(captainAmerica.actor).toBe("Chris Evans")


        expect().toBe()
    })
})