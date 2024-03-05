
//on va ajouter un event lorsque le users va soumettre et rechargement doit se fare par defaut

document.getElementById("inscriptionForm").addEventListener(submit, function(event){
    event.preventDefault; 
})   

   //on va creer un serveur propre 

   const user = {
    username: "mohamed55", 
    password: "12345"
   }

    const Nom = document.getElementById("nom").value; 
    const preNom = document.getElementById("prenom").value; 
    const Email = document.getElementById("email").value;  

    // conditionner les points 

    if(user.username === Nom){
        alert(" Le nom est :"); 
    }
    else if(user.username === preNom){
        alert(" Le prenom est : ");
    }
    else if(user.username === Email){
        alert(" L'email est : ")
    } 

