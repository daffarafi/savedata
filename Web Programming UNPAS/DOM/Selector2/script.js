const p = document.querySelector('p');
p.innerHTML = 'Diganti oleh JS';

const baris2 = document.querySelector('section#b ul li:nth-child(2)')
baris2.innerHTML = "ini baris 2"

const isiPertama = document.querySelectorAll('p')
isiPertama[1].style.backgroundColor = 'lightblue'

const sectionB = document.getElementById('b')

const baris3 = sectionB.querySelector('ul li:last-child')
baris3.innerHTML = 'Ini baris 3'