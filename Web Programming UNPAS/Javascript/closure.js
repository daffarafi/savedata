// function init() {
//     return function (nama) {
//         console.log(nama)
//     }
// }

// let panggilNama = init()
// console.log(typeof(panggilNama))
// panggilNama()


function ucapkanSalam(waktu) {
    return function(nama) {
        console.log(`Halo ${nama}!, Selamat ${waktu}!`);
    }
}

let munculkanSalam = ucapkanSalam("Pagi");
// function(nama) {
//     console.log(`Halo ${nama}!, Selamat Pagi`);
// }
munculkanSalam("Udin");

function add() {
    let counter = 0
    return function() {
        return ++counter
    }
}

let tambah = add()
console.log(tambah())
console.log(tambah())
console.log(tambah())
console.log(tambah())
