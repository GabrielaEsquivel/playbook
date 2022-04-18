const issue = {
    title: "Bug",
    repositoryNameAssociated: "LaunchX",
    status: "Pending",
    numberOfComments: 100,
    labels: 199,
    author: "GabrielaEsquivel",
    dateCreated: new Date('01-04-2022'),
    lastUpdated: new Date('17-04-2022'),
    getTitleAndAuthor: function(){
      return this.title + this.author
    },
    getGeneralInfo: function(){
      return `This issue ${this.title} was created by ${this.author}`
    }
   }
   
   console.log("Nombre del issue:" + issue.name)
   console.log("Info general: " + issue.getTitleAndAuthor())
   console.log(issue.getGeneralInfo())
   