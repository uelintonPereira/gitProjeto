
const { inherits } = require('util')
const { EventEmitter } = require('events')

function Character(name){
    this.name = name
}
inherits(Character, EventEmitter)

const chapolin = new Character('chapolin')
chapolin.on('help', () => console.log(`Eu! o ${chapolin.name} colorado!`))

console.log('Oh! e agora, quem podera me defender?')
chapolin.emit('help')


//Ultilizar os eventos
//const ev = new EventEmitter()

//Ouvir "on" eventos e dispara o evento muitas vezes
//ev.on('saySomething', (message) => {
//    console.log('Eu ouvi voce: ', message)
//})

//Ouvir "once" eventos e dispara o evento uma unica vez Execultar ações para determinados eventos
//ev.once('saySomething', (message) => {
 //   console.log('Eu ouvi voce: ', message)
//})

//Diparar eventos
//.emit('saySomething', "Uelinton")
//ev.emit('saySomething', "Joao")