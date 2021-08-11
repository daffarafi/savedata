let angka = [1, 4, 5, 2, 6, 7, 5, 6, 8, 9, 6, 10, 20, 23]

let angkaBaru = [];

for(i = 0; i < angka.length; i++) {
    if(angka[i] >= 3) {
        angkaBaru.push(angka[i])
    }
}

console.log(angkaBaru)

let angkaBaru2 = angka.filter(e => e >= 3)
console.log(angkaBaru2)

let angkaBaru3 = angka.map(e => e * 2)
console.log(angkaBaru3)

function angkaLebihDariLimaKaliTigaJumlahkan(matt) {
    return matt.filter(e => e > 5)
    .map(e => e * 3)
    .reduce((a, b) => a + b);
}

console.log(angkaLebihDariLimaKaliTigaJumlahkan(angka))