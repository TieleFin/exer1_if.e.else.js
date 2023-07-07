/*
Exercício: estamos deselvolvendo um programa para um cinema
- tem que ter ingresso para entrar;
- o filme exibido tem classificação indicativa de 16 anos;
- o programa deve retornar se o usuário pode ou não assistir o filme
*/

const temIngresso = true
const censura = 16
const idade = 19

/*
1° temIngresso tem que ser verdadeiro (não importa a idade se não tiver ingresso)
2° observar a censura, precisa ter 16 anos ou mais
3° Se as duas condições forem verdadeiras é possível ingressar no cinema
*/

if (temIngresso && idade >= censura) {
    console.log("Pode assistir o filme.")
} else {
    console.log("Barrado")
}
