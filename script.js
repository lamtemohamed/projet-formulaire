
//on va ajouter un event lorsque le users va soumettre et rechargement doit se fare par defaut

document.getElementById("inscriptionForm").addEventListener(submit, function(event){
    event.preventDefault; 

    /* on va récuper les valeurs de chaque 
    element de notre form*/ 

    let nom = document.getElementById("nom").value; 
    let prenom = document.getElementById("prenom").value; 
    let email = document.getElementById("email").value; 

    /* on va créer un objet pour stocké nos données */ 

    let data = { 
        nom: nom, 
        prenom : prenom, 
        email: email 
        
    };  

    // on va envoyer ces données vers un server 

    fetch("https://www.pierre-giraud.com", {
        method: "post", 
        headers:{
            "content-type": "application/json" 
        }, 

        body: JSON.stringify(data)
    }) 
    // on va gerer les reponses 
    .then(response => response.json()) 
    .then(data =>{  
        console.log("La réponse du serveur :", data); 


    }) 

    .catch(error =>{
        console.log("L'erreur lors de l'envoie du formulaire", error);
    }); 

})