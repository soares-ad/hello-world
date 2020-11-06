var agora = new Date()
var exibeHora = agora.getHours()
var exibeMinuto = agora.getMinutes()
var exibeSegundo = agora.getSeconds()

console.log(`Agora são exatamente ${exibeHora}:${exibeMinuto}:${exibeSegundo}.`)
if (exibeHora < 12) {
    close.log('Bom dia!')
} else if (exibeHora < 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}