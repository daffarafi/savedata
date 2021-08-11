const comLogic = function() {
	const a = Math.floor((Math.random() * 3) + 1)
	if(a == 1) return 'gajah';
	if(a == 2) return 'orang';
	else return 'semut';
}

const rules = function(comLogic, p) {
	if(comLogic == p) return 'SERI!';
	if(p == 'gajah') return (comLogic == 'orang') ? 'MENANG!' : 'KALAH!'
	if(p == 'orang') return (comLogic == 'semut') ? 'MENANG!' : 'KALAH!'
	else return (comLogic == 'gajah') ? 'MENANG!' : 'KALAH!'
}


function rolling() {
	const gambarComp = document.getElementsByClassName('img-komputer')[0]
	const gambar = ['gajah', 'orang', 'semut']
	let i = 0;
	const waktuAwal = new Date().getTime()
	const a = setInterval(function() {
		if(new Date().getTime() > waktuAwal + 1000) {
			clearInterval
			return;
		}
		gambarComp.setAttribute('src', `img/${gambar[i++]}.png`)
		if(i == gambar.length) return i = 0
	}, 100)
}



const pilihanP = document.querySelectorAll('li img')
pilihanP.forEach(e => {
	e.addEventListener('click', () => {
		const com = comLogic()
		const p = e.getAttribute('class')
		rolling()
		setTimeout(function() {
			const gambarComp = document.getElementsByClassName('img-komputer')[0]
			gambarComp.setAttribute('src', `img/${com}.png`)
			const info = document.getElementsByClassName('info')[0]
			info.innerHTML = rules(com, p)
		}, 1000)
		
	})
})
