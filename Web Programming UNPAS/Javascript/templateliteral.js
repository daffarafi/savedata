const player = {
    nama: 'Gio',
    role: 'Support',
    gender: 'Male'
} 

const e = `<div class="player">
    <h2 class="nama">${player.nama}</h2>
    <h3 class="role">${player.role}</h3>
    <h3 class="gender">${player.gender}</h3>
</div>`

// console.log(e)

const nama = 'Joni'
const umur = 11

const el = `${nama} berumur ${umur}`
// console.log(alert('halo'))
// console.log(`${alert('halo')}`)

const x = 12
const hasil = (x % 2 == 0 ? 'genap' : 'ganjil')

// console.log(hasil)

// console.log(`${x % 2 == 0 ? 'genap' : 'ganjil'}`)

// document.body.innerHTML = e;

const siswa = [
    {
        nama: 'Jono',
        umur: 17
    },
    {
        nama: 'Udin',
        umur: 16
    },
    {
        nama: 'Ucok',
        umur: 17
    }
]

const masuk = siswa.map(e => {
        return `<h2 class="nama">${e.nama}</h2>
        <h4 class="umur">${e.umur}</h4>`
    }).join(' - ')

// document.body.innerHTML = `<div class="daftar">
//     ${masuk}
// </div>`

const album1 = {
    lagu: 'balonku',
    penyanyi: 'windah'
}
const album2 = {
    lagu: 'cicak cicak',
    penyanyi: 'Joni',
    feat: 'Udil'
}

// document.body.innerHTML = `<div class="album">
//         <ul class="">
//             <li class="lagu">${album1.lagu}</li>
//             <li class="penyanyi">${album1.penyanyi}</li>
//         </ul>
//         <ul class="">   
//             <li class="lagu">${album2.lagu}</li>
//             <li class="penyanyi">${album2.penyanyi} ${album2.feat ? `feat: ${album2.feat}` : ``}</li>
//         </ul>
// </div>`


const dataPenduduk = {
    nama: 'Ucok',
    umur: 22,
    pekerjaan: [
        'Wirausahawan',
        'Agen Sembako',
        'Vlogger'
    ]
}

const ePekerjaan = dataPenduduk.pekerjaan.map(e => `<li>${e}</li>`).join('')

// document.body.innerHTML = 
// `<div class="penduduk1">
//     <h2 class="nama">${dataPenduduk.nama}</h2>
//     <h2 class="umur">umur: ${dataPenduduk.umur}</h2>
//     <h3 class="pekerjaan">
//         Pekerjaan :
//         <ol>
//             ${ePekerjaan}
//         </ol>
//     </h3>
// </div>`

function coba(string, ...args) {
    let a = '';
    for(let i = 0; i < string.length; i++) {
        if(i == string.length - 1) {
            a += string[i]
        } else {
            a += string[i] + args[i]
        }
        
    }
    return a
}

function coba2(strings, ...args) {
    // let a = '';
    // strings.forEach((e, i) => {
    //     a += e + (args[i] || '')
    // })
    // return a

    return strings.reduce((a, b, i) => a + b + `<span class="hl">${(args[i] || '')}</span>`, '')
}


const orang1 = 'Saleh'
const orang2 = 'Salman'
const orang3 = 'Dobleh'

const kalimat = coba2`Ada ${orang1}, dan ${orang2}, serta ${orang3} di taman`

console.log(kalimat)
const para = document.getElementsByClassName('text')[0]

para.innerHTML = kalimat



