const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

// Imprimir el atributo name por cada explorer en la lista.
console.log("2.1")
explorers.forEach(explorer=> console.log(explorer.name))

// Imprime el stack de cada explorer, usa FOR EACH
explorers.forEach(explorer=> console.log(`El explorer ${explorer.name} tiene el stack: ${explorer.stack}`))

// Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
const stacks = explorers.map(explorer => explorer.stack)
//console.log("nuevos stacks", stacks)

// Obtén la lista de explorers que tengan en su stack "js", usa 
// FILTER (para validar un elemento en un lista se usa el método includes)

const explorersWithJS = explorers.filter(explorer=> explorer.stack.includes('js'))
//console.log(explorersWithJS);

//Busca el primer explorer que sea de la CDMX, usa FIND
//console.log(explorers.find(explorer=> explorer.city==="CDMX"));

// Obtén la suma de todos los exercises_completed, usa REDUCE
const exCompleted = 0;
console.log(explorers.reduce( (previousExp, currentExp) => exCompleted + explorer.exercises_completed))

//Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME


/// Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.

///
///