import { people } from'../people.js'

const men = people.filter(person => person.gender === 'male')
const women = people.filter(person => person.gender === 'female')
const other = people.filter(person => (person.gender === 'n/a') || (person.gender === 'hermaphrodite') || (person.gender === 'none'))

//console.log(men, women, other)

const mainContainer = document.createElement('div')
mainContainer.className = 'container'

men.forEach((man) => {
  let manElement = document.createElement('div)
  manElement.className = 'box'
  manElement.textContent = man.name
  mainContainer.appendChild(manElement)
  })

const mainContainer = document.createElement('div')
mainContainer.className = 'container'


