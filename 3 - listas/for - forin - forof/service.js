const axios = require('axios')
const URL = 'https://swapi.py4e.com/api/people'

//Fara a busca no site swapi que traz dados dos personagens do star wars

async function getPeople(name) {
    const url = `${URL}/?search=${name}&format=json`
    const response = await axios.get(url)
    return response.data
}

module.exports = {
    getPeople
}



// getPeople('r2')
//     .then(function (res) {
//         console.log('result', res)
//     })
//     .catch(function (error) {
//         console.error('erro', error)
//     })