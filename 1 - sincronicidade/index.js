const util = require('util')

const addressPromise = util.promisify(getAddress)

function getCellphone(userId) {
    return new Promise(function resolverPromise(resolve, reject) {
        //timeout apenas para testar as functions (usando arrow function)
        setTimeout(() => {
            return resolve({
                telefone: '1199002',
                ddd: 11
            })
        }, 2000);

    })
}

function getAddress(idUsuario, callback) {
    //Utilizando callback ao inves de Promisse...
    setTimeout(() => {
        return callback(null, {
            rua: 'dos bobos',
            numero: 0
        })
    }, 2000);
}

function getUser() {
    return new Promise(function (resolve, reject) {
        //timeout apenas para testar as functions (sem arrow function)
        setTimeout(function () {
            return resolve({
                id: 01,
                username: "Maycon Douglas",
                age: 27
            })
        }, 2000)
    })
}

main() // chamando main, pois se trata de uma funçao.

async function main() {
    try {
        console.time('promise')

        const usuario = await getUser()
        //Neste metodo ele espera 1 a 1 ser executado, usando promisse all ele executa todos os non dependents de uma unica vez.
        // const endereco = await addressPromise(usuario.id)
        // const telefone = await getCellphone(usuario.id)

        const resultado = await Promise.all([
            addressPromise(usuario.id),
            getCellphone(usuario.id)
        ])
        const endereco = resultado[0]
        const telefone = resultado[1]

        console.log(usuario, endereco, telefone)

        console.timeEnd('promise')

    } catch {
        console.error("erro", error)
    }
}