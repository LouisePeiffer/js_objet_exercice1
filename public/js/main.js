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
// let perso3 = {}
// perso3.nom = perso1.nom
// perso3.age = perso2.age
// perso3.taille = '1m57'

// console.log(perso3);
// // on a mis en dehors des accolades pour montrer qu'on peut réassigner des infos 

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
//     console.log(`Bonjour je m'appelle ${this.prenom} ${this.nom}`);
//     }
// }
// perso5.sePresenter()

// // Exo 6
// let perso6 = {
//     nom : "euh",
//     changerAge () {
//         this.age = prompt('Quel âge as-tu?')
//         console.log(`${this.nom} a ${this.age} ans`);
//     }
// }
// perso6.changerAge()

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

// let voleur = {
//     usurpation () {
//         this.nom = perso1.nom
//         this.age = perso2.age
//         console.log(`${this.nom} a ${this.age} ans`);
//     }
// }
// voleur.usurpation()

// Exo 8
let françois = {
    nom : "François",
    panier : ['patate', 'tomate', 'aubergine'],
    derober(a) {
        for (let i = 0; i < 2; i++) {
            let product = prompt(`que voulez vous voler chacal.? \n ${sergio.panier}`)
            this.panier.push(product);
            a.panier = a.panier.filter((el) => {
                return el != product
            })
        }
    }
}

let sergio = {
    nom : "Sergio",
    panier : ['courgette', 'ail', 'concombre']
}

françois.derober(sergio)
console.log(françois);
console.log(sergio);