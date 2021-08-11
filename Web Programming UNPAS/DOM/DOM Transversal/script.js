// const close = document.getElementsByClassName('close')[0]
// const card = document.getElementsByClassName('card')[0]
const container = document.querySelector('.container')

// close.addEventListener('click', function() {
// 	container.removeChild(card)
// })

// const close2 = document.getElementsByClassName('close')
const close = document.querySelectorAll('.close')
// close.forEach(e => e.addEventListener('click', e => {
// 	e.target.parentElement.style.display = 'none' 
// 	e.preventDefault()
// 	e.stopPropagation()
// 	})
// )

const cards = document.querySelectorAll('.card')
// cards.forEach(e => {
// 	e.addEventListener('click', e => {
// 		alert('ok')
// 	})
// })

container.addEventListener('click', e => {
	if(e.target.className == 'close') {
		e.target.parentElement.style.display = 'none'
	}
})

