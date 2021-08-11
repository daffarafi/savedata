const judul = document.getElementById('judul')
console.log(judul)
judul.style.color = '#FFEF00'
judul.style.backgroundColor = 'gray'
document.getElementById('judul').innerHTML = 'ini judul'

const paragraph = document.getElementsByTagName('p')
console.log(paragraph)
paragraph[3].style.color = 'red'
for(let i = 0; i < (paragraph.length - 1); i++) {
	paragraph[i].style.color = 'green'
}

const sub1 = document.getElementsByClassName('p1')
console.log(sub1)
for(let i = 0; i < sub1.length; i++) {
	sub1[i].style.fontSize = '25px'
}