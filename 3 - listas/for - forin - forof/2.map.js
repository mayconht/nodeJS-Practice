const service = require('./service')

//How it works on background
Array.prototype.meuMap = function (callback){
    const novoArrayMapeado = []
    for(let indice = 0; indice <= this.length -1; indice ++){
        const resultado = callback(this[indice], indice)
        novoArrayMapeado.push(resultado)
    }
    return novoArrayMapeado
}

async function main() {
    try {
        const res = await service.getPeople(`a`)
        // const names = []
        // res.results.forEach(function(item) {
        //     names.push(item.name)
        // });

        //     const names = res.results.map(function(pessoa){
        //         return pessoa.name
        //     })
        //     console.log(names)

        // const names = res.results.map((pessoa) => pessoa.name)

        const names = res.results.meuMap(function(pessoa, indice){
            console.log(indice)
            return pessoa.name
        })

        console.log(names)
    }

    catch (error) {
        console.error('internal error', error)
    }
}

main()