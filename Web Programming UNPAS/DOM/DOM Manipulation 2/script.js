const newParagraph = document.createElement('p')
const newText = document.createTextNode('Paragraf Baru')

newParagraph.appendChild(newText)

const sectionA = document.getElementById('a')

sectionA.appendChild(newParagraph)


const newList = document.createElement('li')
const newText2 = document.createTextNode('List baru')

newList.appendChild(newText2)

const sectionB = document.getElementById('b')
const placeListBefore = sectionB.querySelector('ul li:nth-child(2)')
const ul = sectionB.querySelector('ul')

ul.insertBefore(newList, placeListBefore)


const link = sectionA.getElementsByTagName('a')[0]

sectionA.removeChild(link)


const newTitle = document.createElement('h2')
const newText3 = document.createTextNode('Judul baru')

newTitle.appendChild(newText3)

const replaceNode = sectionB.getElementsByTagName('p')[0]

sectionB.replaceChild(newTitle, replaceNode)