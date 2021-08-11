const judul = document.getElementById('judul')
judul.innerHTML = 'Ini Adalah Sebuah Judul'
judul.style.backgroundColor = 'lightblue'

const artikelSatu = document.getElementById('a')
const p1 = artikelSatu.getElementsByClassName('p1')[0]
p1.innerHTML = 'ini isi paragraf pertama'

const p2 = artikelSatu.getElementsByClassName('p2')[0]
p2.innerHTML = 'ini isi paragraf kedua'
p2.setAttribute('id', 'paragraph2')
p2.removeAttribute('id')

const link = artikelSatu.getElementsByTagName('a')[0]
link.innerHTML = 'Link'
console.log(link.getAttribute('href'))

const p3 = artikelSatu.getElementsByClassName('p3')[0]
p3.classList.add('para3')
p3.classList.remove('para3')
p3.classList.toggle('tambah-biru')
console.log(p3.classList.item(1))
console.log(p3.classList.contains('tambah-biru'))
p3.classList.replace('p3', 'para3')