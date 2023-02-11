document.write("<div class='tirage'><button onclick='nom()'>Ajouter un nom</button><button onclick='tirage()'>Tirage au sort</button></div>")

var tab=new Array();
function nom(){
    tab.push(prompt("Saisir un nom"));
}

function tirage(){
    if(tab.length>0){
/*Math.random()*tab.length renvoie un nombre réel entre 0 et la taille du tableau tab.length et on arrondit à l'entier inférieur par la fonction Math.floor()*/
    var rand = Math.floor(Math.random()*tab.length);
    alert("Le nom gagnant est : "+tab[rand]);
    }
    else alert("Veillez ajouter des noms");
}

