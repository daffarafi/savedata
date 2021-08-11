const p3 = document.getElementsByClassName('p3')[0]

function ubahWarna(e) {
	e.style.backgroundColor = 'yellow';
}


const p4 = document.querySelector('section#b p')

const ul = document.querySelector('section#b ul')

function tambahList() {
	const newList = document.createElement('li')
	const newText = document.createTextNode('List baru')
	newList.appendChild(newText)
	ul.appendChild(newList)
}

p4.onclick = tambahList


const p2 = document.getElementsByTagName('p')[1]
p2.addEventListener('click', () => p2.style.backgroundColor = 'yellow')


const p1 = document.getElementsByTagName('p')[0]
p1.addEventListener('dblclick', () => p1.style.backgroundColor = 'yellow')

p1.addEventListener('mouseenter', () => p1.style.color = 'red')
 

