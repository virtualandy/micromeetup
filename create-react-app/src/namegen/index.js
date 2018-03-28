//const namegen = require('startup-name-generator.js')
const name = require('./lib')

function namify(inputs) {
    // Will generate a lot of names, let's only use first 50
    let names = name(inputs)
    if (names.length >= 50) {
        return names.slice(0,50)
    }
    return names.slice(0, names.length-1)
}

export default namify