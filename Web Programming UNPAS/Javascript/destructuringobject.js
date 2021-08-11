const siswa = {
    nama: 'Galih',
    umur: 18
}

const {nama, umur} = siswa

console.log(nama)
console.log(umur)

const {nama2, umur2} = {nama2:"Joko", umur2: 29}

console.log(nama2)
console.log(umur2);

({nama3, umur3} = {nama3: "Koro", umur3: 15});

console.log(nama3)
console.log(umur3);

({nama4: n, umur4: u, email4: e = 'Insert Email!'} = {nama4: "Juned", umur4: 15});

console.log(n)
console.log(u)
console.log(e)

const siswa2 = {
    nama: 'Janur',
    umur: 14
}

function getProperty({umur}) {
    return umur
}

console.log(getProperty(siswa2))
console.log(getProperty(siswa))



function calc(a, b) {
    return {
        tambah: a + b,
        kurang: a - b,
        kali: a * b,
        bagi: a / b
    }
}

const {tambah, kurang, bagi, kali} = calc(7, 8)

console.log(tambah)

function cetakSalam({nama, umur}) {
    return `Halo! nama saya ${nama}, saya berumur ${umur} tahun.`
}

console.log(cetakSalam(siswa))
console.log(cetakSalam(siswa2))


const siswa3 = {
    nama: 'Janur',
    umur: 14,
    nilai: {
        uas: 80,
        tugas: 99,
        uts: 79,
        uh1: 80,
        uh2: 85
    }
}

function cetakHasil({nama, umur, nilai: {uas, tugas, uts, uh1, uh2}}) {
    return `Nama saya ${nama}, umur saya ${umur}, nilai uas saya ${uas}`
}

console.log(cetakHasil(siswa3))








