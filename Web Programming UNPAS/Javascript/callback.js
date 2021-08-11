function halo(nama) {
    alert(`Halo ${nama }`)
}

function tampilkanPesan(func) {
    let nama = prompt('Masukkan nama!')
    func(nama)
}

// tampilkanPesan(halo)

const siswa = [
    {
        nama: 'Doni',
        umur: 17,
        jenisKelamin: 'Laki-laki'
    },
    {
        nama: 'Akbar',
        umur: 18,
        jenisKelamin: 'Laki-laki'
    },
    {
        nama: 'Jono',
        umur: 17,
        jenisKelamin: 'Laki-laki'
    }
];

console.log(siswa.map(e => e.nama))
siswa.forEach(e => console.log(e.nama))

