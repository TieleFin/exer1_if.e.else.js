const temIngresso = true
const censura = 16
const idade = 9
const estaComOspais = false

if (temIngresso) {
    if (idade >= censura || estaComOspais === true) {
        console.log("Pode assistir o filme.")
    } else {
        console.log("Barrado")
    }
} else {
    console.log("Barrado")
}