/*
Attendre le chargement du DOM
*/
document.addEventListener('DOMContentLoaded', function(){
    
    // Créer une variable pour la balise HTML
    var burgerMenuBtn = document.getElementById('burgerMenuBtn');
    var burgerPicto = document.getElementById('burgerPicto');
    var myNav = document.getElementById('myNav');

    // Capter le clique sur la variable
    burgerMenuBtn.addEventListener('click', function(evt){
        // Bloquer le comportement naturel de la balise
        evt.preventDefault();

        // Ajouter la class .open sur la nav
        myNav.classList.toggle('open');

        // Changer l'aspect du picto
        burgerPicto.classList.toggle('fa-bars');
        burgerPicto.classList.toggle('fa-times');
        
    });

    

}); // Fin de la fonction d'attente de chargement du DOM