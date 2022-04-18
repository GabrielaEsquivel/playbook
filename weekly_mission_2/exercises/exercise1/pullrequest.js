const pr = {
    title: "Fix title in index",
    branchName: "fix/title",
    dateCreated: new Date('01-04-2022'),
    status: "merged",
    repositoryNameAssociated: "LaunchX",
    getStatus: function(){
      return this.status
    },
    getTitleAndAutor: function(){
      return `This repository ${this.title} was created by ${this.author}`
    }
   }
   
   console.log("Nombre del PR:" + pr.title)
   console.log("Status: " + pr.getStatus())
   console.log(pr.getTitleAndAutor())
   