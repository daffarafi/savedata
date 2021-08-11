const tombol1 = document.getElementById('tombol1')
const tombol2 = document.getElementById('tombol2')
const body = document.getElementsByTagName('body')[0]

tombol1.addEventListener('click', () => body.style.backgroundColor = 'green')

tombol2.addEventListener('click', () => body.classList.toggle('biru'))

body.appendChild(document.createElement('br'))

const newButton = document.createElement('img')
body.appendChild(newButton)
body.getElementsByTagName('img')[2].setAttribute('id', 'tombol3')

const tombol3 = document.getElementById('tombol3')
tombol3.setAttribute('src', 'button.png')
tombol3.setAttribute('height', '100px')

const acakWarna = function() {
	const r = Math.floor(Math.random() * (255) + 1)
	const g = Math.floor(Math.random() * (255) + 1)
	const b = Math.floor(Math.random() * (255) + 1)
	body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
}

tombol3.addEventListener('click', () => acakWarna())

body.appendChild(document.createElement('br'))
body.appendChild(document.createElement('br'))
body.appendChild(document.createElement('br'))

const newBox = document.createElement('div')
newBox.setAttribute('class', 'kotak merah')
body.appendChild(newBox)


const newSlider1 = document.createElement('input')
newSlider1.setAttribute('type', 'range')
newSlider1.setAttribute('id', 'slide1')
newSlider1.setAttribute('min', '0')
newSlider1.setAttribute('max', '255')
body.appendChild(newSlider1)

body.appendChild(document.createElement('br'))

const newBox2 = document.createElement('div')
newBox2.setAttribute('class', 'kotak biru')
body.appendChild(newBox2)

const newSlider2 = document.createElement('input')
newSlider2.setAttribute('type', 'range')
newSlider2.setAttribute('id', 'slide2')
newSlider2.setAttribute('min', '0')
newSlider2.setAttribute('max', '255')
body.appendChild(newSlider2)

body.appendChild(document.createElement('br'))

const newBox3 = document.createElement('div')
newBox3.setAttribute('class', 'kotak hijau')
body.appendChild(newBox3)

const newSlider3 = document.createElement('input')
newSlider3.setAttribute('type', 'range')
newSlider3.setAttribute('id', 'slide3')
newSlider3.setAttribute('min', '0')
newSlider3.setAttribute('max', '255')
body.appendChild(newSlider3)


const sMerah = document.getElementById('slide1')
sMerah.addEventListener('input', () => {
		body.style.backgroundColor = `rgb(${sMerah.value}, ${sHijau.value}, ${sBiru.value})`

	})

const sHijau = document.getElementById('slide2')
sHijau.addEventListener('input', () => body.style.backgroundColor = `rgb(${sMerah.value}, ${sHijau.value}, ${sBiru.value})`)

const sBiru = document.getElementById('slide3')
sBiru.addEventListener('input', () => body.style.backgroundColor = `rgb(${sMerah.value}, ${sHijau.value}, ${sBiru.value})`)


body.addEventListener('mousemove', e => {
	const xPos = Math.floor((e.clientX / window.innerWidth) * 255)
	const yPos = Math.floor((e.clientY / window.innerHeight) * 255)
	body.style.backgroundColor = `rgb(${xPos}, ${yPos}, 100)`
})

