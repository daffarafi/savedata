// console.log("Hai!")

// function newFunc(part) {
//     return `Function1 says ${part}`; 
// }

// console.log(newFunc("Embot"));

// let newFunc2 = function(part) {
//     return `Function2 says ${part}`;
// }

// console.log(newFunc2("Sus"));

// let newFunc3 = part => `Function2 says ${part}`;

// console.log(newFunc3("Konz"));
  

// let anggota = ["Joko", "Udin", "Ucup", "Sandi"]

// let jumlahHuruf = anggota.map(e => e.length)

// console.log(jumlahHuruf)

function jumlahHuruf2(nama) {
    return {Nama: nama,
            "Jumlah Huruf": nama.length};
}
// console.log(anggota.map(jumlahHuruf2)) 

// console.table(anggota.map(e => ({nama: e, "Jumlah Huruf": e.length})))



function Pemain(name, gender, umur) {
    this.nama = name;
    this.gender = gender;
    this.umur = umur;
    this.intro = function() {
        console.log( `Nama saya ${this.nama}!`)
    }
    setInterval(function() {
        console.log(umur)}, 200
    )
}

let udinDatabase = new Pemain("Udin", "Male", 20);

// let enemyDatabase = {
//     nama: "Boar",
//     "tingkat kesulitan": "Easy",
//     intro: function() {
//         return `${this.nama} memiliki tingkat kesulitan ${this["tingkat kesulitan"]}`
//     }
// }
