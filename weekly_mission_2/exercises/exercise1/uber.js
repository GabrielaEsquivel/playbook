const uberUser = {
    id: 12345,
    name: "Andrea Esquivel",
    birthdate: new Date('18-12-1998'),
    email: "ing.andreaesquivel@gmail.com",
    phone: "7771112244",
    password: "password123",
    country: "Mexico",
    state:'Morelos',
    city: 'Cuernavaca',
    qualified: 4.98,
    travelsRealized: 132,
    getGeneralInfo: function(){
      return `The user is ${this.name} and had done ${this.travelsRealized} travels with uber.`
    },
    getCredentials: function(){
      return {email: this.email, paswd: this.password}
    }
   }

console.log(uberUser.getGeneralInfo())


const travel = {
    id: 123565754654,
    user: {
      id: 12345,
      name: "Andrea Esquivel",
    },
    destiny: 'El Pochotal',
    departure: 'Los Gallos',
    gpsLocationDestiny: '',
    gpsLocationDeparture: '',
    driver:{
      id: 12345,
      name: "Ashton Brooke",
    },
    cost: 35625,
    dateCreated: new Date(),
    timeEstimated: 1445434402309.34,
    getGeneralInfo: function(){
      return `information about the travel: 
        ${this.user.name} is going to ${this.destiny} with ${this.driver.name}`
    },
   }
   
console.log(travel.getGeneralInfo())
