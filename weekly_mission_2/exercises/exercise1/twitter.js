const twUser = {
    id: 12345,
    name: "Andrea Esquivel",
    birthdate: new Date('18-12-1998'),
    email: "ing.andreaesquivel@gmail.com",
    phone: "7771112244",
    password: "password123",
    country: "Mexico",
    user: 'grinvented',
    getContacts: function(){
      return this.email + this.phone
    },
    getCredentials: function(){
      return {email: this.email, paswd: this.password}
    }
   }
   
console.log("Nombre del usuario de Twitter:" + twUser.name)
console.log("Credenciales: " + twUser.getCredentials())
console.log("Contacto: " + twUser.getContacts())



const trendingTopic = {
    title: "TAKE MY HAND TOUR IS SOLD OUT!",
    id: 123565754654,
    category: "Music",
    about: "5 Seconds of Summer",
    amountOfTweets: 35625,
    isWorldWide: true,
    currentCity: "Los Angeles",
    dateCreated: new Date(),

   }
   


const hashtag = {
    id: 1284058922,
}

