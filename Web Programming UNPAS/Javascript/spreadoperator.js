const siswa = ['Joko', 'Bobi', 'Sandi', 'Irawan']

console.log(...siswa)

const guru = ['Ilham', 'Dimas', 'Heri']

console.log(...guru)
console.log(siswa, guru)

console.log(...siswa, ...guru)

const manusia = [...siswa, ...guru]

console.log(manusia)
console.log(...manusia)


const mhs = ['Toro', 'Danang', 'Susi']
const copyMhs = [...mhs]
copyMhs[0] = 'Gani'
console.log(...mhs)
console.log(...copyMhs)


let nama = document.querySelector('.nama')

const huruf = [...nama.innerHTML]

const spanHuruf = huruf.map(e => `<span class="zoom">${e}</span>`)

nama.innerHTML = spanHuruf.join('')

function jumlahkan(...angka) {
    // let total = 0
    // for(const e of angka) {
    //     total += e
    // }
    // return total

    return angka.reduce((e, el) => e + el)
}

console.log(jumlahkan(1, 2, 3, 4, 5))

const kelompok = ['Toru', 'Siska', 'Kamil', 'Mulan', 'Jamilah']

const [ketua, wakil, ...anggota] = kelompok

console.log(ketua)
console.log(wakil)
console.log(anggota)

const dataDiri = {
    nama2: 'Jonathan',
    umur2: 29,
    jenisKelamin: 'Laki-laki',
    tempatLahir: 'Jakarta'
}

const {nama2, umur2, ...lainLain} = dataDiri

console.log(nama2)
console.log(umur2)
console.log(lainLain)

function filterBy(type, ...values) {
    return values.filter(e => typeof(e) === type)
}

console.log(filterBy('number', true, 10, 11, 1, 2, 'Doni', 'Kuro', 11, 14, false))




