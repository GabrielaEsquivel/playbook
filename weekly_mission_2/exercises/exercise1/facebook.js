const fbUser = {
    id:12345,
    name: "Andrea",
    lastName: "Esquivel",
    birthdate: new Date('18-12-1998'),
    email: "ing.andreaesquivel@gmail.com",
    phone:"7771112244",
    password: "password123",
    genre: "Woman",
    getFullName: function(){
      return this.name + this.lastName
    },
    getCredentials: function(){
      return {email: this.email, paswd: this.password}
    }
   }
   
console.log("Nombre del usuario de Facebook:" + fbUser.getFullName())
console.log("Credenciales: " + fbUser.getCredentials())
   


const post = {
    description: "¿Qué estás pensando?",
    idFbUser: 11234,
    user: {
        id: 12345,
        name: "Andrea",
        lastName: "Esquivel",
    },
    datePostCreated: new Date(),
    lastModified: null,
    multimedia:[],
    tagged: [{idFbUser: 12424903}, {idFbUser: 1254641}],
    status: {
        status: 'loved',
        icon: '/loved.png'
    },
    getUsersTagged: function(){
      return this.tagged
    },
    getUserOwnPost: function(){
      return this.user.name + this.user.lastName
    }
   }
   
console.log(`Usuarios Etiquetados: ${post.getUsersTagged()}`)
console.log(`De quién es el post:  ${ post.getUserOwnPost()}`)


const biography = {
    actualCity: {
        name: 'Morelos',
        id: 12,
        country: 5,
    },
    workPlace: 'Dominion Global',
    schoolGrade: 'Engineering',
    emotionalSituation: 'Single',
    description: 'Hey, there! Im Gaby, 23, mexican, love painting, writing, and obviously coding!',
    idFbUser: 12345,
    user: {
        id: 12345,
        name: "Andrea",
        lastName: "Esquivel",
    },
    getScolarityAndWork: function(){
        return this.schoolGrade + this.workPlace
    },

}

console.log("biography description", biography.description)
console.log("about her proffesional life", biography.getScolarityAndWork())