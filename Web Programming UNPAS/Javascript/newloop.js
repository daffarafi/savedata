const siswa = ['Galih', 'Ucok', 'Bobi', 'Udin']

for(const e of siswa) {
    console.log(e)
}

siswa.forEach(e => console.log(e))

const nama = 'Koro'

for(e of nama) {
    console.log(e)
}

siswa.forEach((e, i) => console.log(`${e} adalah mahasiswa ke-${i + 1}`))


const siswaa = document.querySelectorAll('body ol li')

siswaa.forEach(e => console.log(e.innerHTML))

for(const e of siswaa) {
    console.log(e.textContent)
}


function jumlahAngka() {
    let a = 0
    for(const e of arguments) {
        a += e
    }
    return a
}

console.log(jumlahAngka(1, 2, 3, 4, 5))

const object = {
    nama: 'Doni',
    kelas: 'XII MIPA',
    umur: 18,
    JenisKelamin: "Laki-laki"
}

for(e in object) {
    console.log(e)
}

for(e in object) {
    console.log(object[e])
}
