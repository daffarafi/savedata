const container = document.querySelector('.container')
const show = document.querySelector('.show')
const thumb = document.querySelectorAll('.thumb')
container.addEventListener('click', e => {
	if(e.target.className == 'thumb') {
		thumb.forEach(e => e.classList.remove('active'))
		show.src = e.target.src
		show.classList.add('fade')
		setTimeout(() => show.classList.remove('fade'), 500)
		e.target.classList.add('active')
	}
})