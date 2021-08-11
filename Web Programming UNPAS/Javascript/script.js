const videos = Array.from(document.querySelectorAll('[data-duration]'));

const jsVideo = videos.filter(e => e.textContent.includes('JAVASCRIPT LANJUTAN'));

const durations = jsVideo.map(e => e.dataset.duration);

const durationsSplit = durations.map(e => e.split(':').map(e => parseFloat(e))[0] * 60 + e.split(':').map(e => parseFloat(e))[1])

const totalDuration = durationsSplit.reduce((a, b) => a + b)

const hour = Math.floor((totalDuration / 3600))

const minute = Math.floor(totalDuration / 60 - hour * 60)

const second = (totalDuration % 60)

const pDuration = document.getElementsByClassName('total-durasi')[0]
pDuration.textContent = `${hour}:${minute}:${second}`

const pVideos = document.getElementsByClassName('jumlah-video')[0]
pVideos.textContent = jsVideo.length