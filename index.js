function partidas(vitorias = 0, derrotas = 0){
    return vitorias - derrotas
}

function classificacao(saldoVitorias = 0){
    let classificacao
    if (saldoVitorias < 10){
        classificacao = "Ferro"
    } else if (11 <= saldoVitorias && saldoVitorias <= 20){
        classificacao = "Bronze"
    } else if (21 <= saldoVitorias && saldoVitorias <= 50){
        classificacao = "Prata"
    } else if (51 <= saldoVitorias && saldoVitorias <= 80){
        classificacao = "Ouro"
    } else if (81 <= saldoVitorias && saldoVitorias <= 90){
        classificacao = "Diamante"
    } else if (91 <= saldoVitorias && saldoVitorias <= 100){
        classificacao = "Lendário"
    } else{
        classificacao = "Imortal"
    }

    console.log(`O Herói ${heroi} tem de saldo de ${saldoVitorias} está no nível de ${classificacao}`)
}

var heroi = "Gustavo"
var saldoVitorias = 87
var derrotas = 27

var saldoVitorias = partidas(saldoVitorias, derrotas)
classificacao(saldoVitorias)

