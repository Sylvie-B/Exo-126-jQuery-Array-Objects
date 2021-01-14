
let arrObj = [
    {"person" : "Mark","age":25, "avatar":"https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Blank&hairColor=Auburn&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=Overall&clotheColor=Gray01&eyeType=Close&eyebrowType=UpDown&mouthType=Sad&skinColor=Black"},
    {"person" : "Bill", "age":65, "avatar" : "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Wayfarers&hairColor=SilverGray&facialHairType=MoustacheMagnum&facialHairColor=Black&clotheType=ShirtCrewNeck&clotheColor=Gray02&eyeType=Surprised&eyebrowType=SadConcernedNatural&mouthType=Default&skinColor=Light"},
    {"person" : "Spencer", "age" : 34, "avatar" : "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Prescription02&hairColor=Blonde&facialHairType=BeardMedium&facialHairColor=Black&clotheType=CollarSweater&clotheColor=PastelRed&eyeType=Dizzy&eyebrowType=SadConcerned&mouthType=Sad&skinColor=Yellow"}
];

//Methode js native pour parcourir un tableau d'objets ( avec for...in )
for(let i in arrObj) {
    // i est l'index de mon tableau d'objet
    console.log("index = " + i);

    // j'accède à mon tableau d'objet comme n'importe quel tableau
    console.log("arrObj = " + arrObj[i]);

    // J'accéde à une propriété particuliére de mon objet ,ici l'age
    console.log("age = " + arrObj[i].age);
}

//Autre méthode : utilisation de forEach
arrObj.forEach(function(arr) {
    //Afficher la propriété age pour chaque objet contenu dans mon tableau
   console.log("Resultat avec foreach = " + arr.age);
});

//Méthode utilisant jQuery
$.each(arrObj, function(index, value) {
    //Afficher la propriété age pour chaque objet contenu dans mon tableau
   console.log("Affichage age utilisant jQuery = " + value.age);
});

//
let frame = document.createElement('div');
frame.style.display = 'flex';
frame.style.flexDirection = 'column';
frame.style.alignItems = 'center';
document.body.appendChild(frame);

let pict = document.createElement('img');
pict.src = arrObj[0].avatar;
frame.appendChild(pict);

let user = document.createElement('span');
user.innerHTML = arrObj[0].person;
frame.appendChild(user);

let age = document.createElement('span');
age.innerHTML = ' ( ' + arrObj[0].age + ' ans )';
user.appendChild(age);

let controls = document.createElement('div');
controls.style.fontSize = "3vw";
let previous = document.createElement('span');
previous.style.margin = "0 2vw";
let next = document.createElement('span');
next.style.margin = "0 2vw";
previous.innerHTML = '<';
next.innerHTML = '>';

controls.appendChild(previous);
controls.appendChild(next);
frame.appendChild(controls);
