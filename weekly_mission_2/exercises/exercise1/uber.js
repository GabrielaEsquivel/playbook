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
    user: {},
    destiny: '',
    departure:'',
    gpsLocationDestiny: '',
    gpsLocationDeparture: '',
    driver:{},
    cost: 35625,
    dateCreated: new Date(),
    timeEstimated:'',
    getGeneralInfo: function(){
      return `trending topic ${this.title} - ${this.amountOfTweets} at ${this.currentCity}`
    },
   }
   
console.log(trendingTopic.getGeneralInfo())
