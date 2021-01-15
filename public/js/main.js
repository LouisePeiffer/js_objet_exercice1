// // Exo 1
// let  perso1 = {
//     nom : 'Peiffer',
//     prenom : 'Louise',
//     age : 22,
//     taille : '1m63'
// }
// console.log(perso1);
// // Exo 2
// let perso2 = {
//     nom : 'Hill',
//     prenom : "Dushane",
//     age : "30",
//     taille : "1m65",
// }

// // Exo 3
// let perso3 = {
//     nom : perso1.nom,
//     age : perso2.age,
//     taille : "1m92",
// }
// console.log(perso3);

// // Exo 4
// let perso4 = {
//     saluer() {
//         console.log(`Coucou ${perso2.prenom}`);
//     }
// }
// perso4.saluer()

// // Exo 5
// let perso5 = {
//     prenom : "Sully",
//     nom : "TopBoy",
//     sePresenter() {
//     console.log(`Bonjour je m'appelle ${perso5.prenom} ${perso5.nom}`);
//     }
// }
// console.log(perso5);
// perso5.sePresenter()

// // Exo 6
// let perso6 = {
//     nom : "euh",
//     age : prompt('Age?'),
//     methodee () {
//         console.log(`${perso6.nom} a ${perso6.age} ans`);
//     }
// }
// perso6.methodee()

// // Exo 7
// let pers1 = {
//     age : 22,
//     prenom : "Loulou",
// }

// let pers2 = {
//     age : 29,
//     prenom : "Hatim",
// }

// let pers3 = {
//     age : 33,
//     prenom : "Otmane"
// }

// let pers4 = {
//     nom : pers2.prenom,
//     age : pers2.age,
//     usurpation () {
//         console.log(pers4.nom + pers4.age);
//     }
// }
// pers4.usurpation()

// Exo 8
let françois = {
    nom : "François",
    panier : ['patate', 'tomate', 'aubergine'],
    derober() {
        console.log(françois.panier.push(sergio.panier[1], sergio.panier[2]));
        console.log(sergio.panier.splice(1, 2); 
    }
}

let sergio = {
    nom : "Sergio",
    panier : ['courgette', 'ail', 'concombre']
}

françois.derober()
console.log(françois);
console.log(sergio);