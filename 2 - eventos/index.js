const EventEmitter = require('events')

class MeuEmissor extends EventEmitter{

}

const meuEmissor = new MeuEmissor ()
const nomeEvento = 'usuario:click'

meuEmissor.on(nomeEvento, function(click){
    console.log('clicou', click)
})

// meuEmissor.emit(nomeEvento, 'barra de rolagem')
// meuEmissor.emit(nomeEvento, 'sair do site')

// let count = 0

// setInterval(function() {
//     meuEmissor.emit(nomeEvento, 'ok ' + (count++))
// }, 1000)

const stdin = process.openStdin()

stdin.addListener('data', function (value){
    console.log(`voce digitou: ${value.toString().trim()}`)
})