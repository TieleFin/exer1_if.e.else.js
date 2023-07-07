/*
Exercício: estamos deselvolvendo um programa para um cinema
- tem que ter ingresso para entrar;
- o filme exibido tem classificação indicativa de 16 anos, porém
se a criança estiver acompanhada dos pais ela pode assistir o filme;
- o programa deve retornar se o usuário pode ou não assistir o filme
*/

const temIngresso = true
const censura = 16
const idade = 9
const estaComOspais = false

/*
1° ver se tem ingresso
2° conferir se a idade é maior que a censura
3° se a idade for menor que a censura é necessário estar
acompanhado dos pais
*/

if (temIngresso) {
    if (idade >= censura || estaComOspais === true) {
        console.log("Pode assistir o filme.")
    } else {
        console.log("Barrado")
    }
} else {
    console.log("Barrado")
}