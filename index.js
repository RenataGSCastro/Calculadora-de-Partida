function calcularNivel(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return { saldoVitorias, nivel };
}

// Lista de instâncias de vitórias e derrotas.
const jogos = [
    { vitorias: 30, derrotas: 10 },
    { vitorias: 70, derrotas: 20 },
    { vitorias: 100, derrotas: 5 },
    { vitorias: 150, derrotas: 25 },
];

// Loop for para iterar sobre cada jogo.
for (let jogo of jogos) {
    let { saldoVitorias, nivel } = calcularNivel(jogo.vitorias, jogo.derrotas);
    console.log(`Para ${jogo.vitorias} vitórias e ${jogo.derrotas} derrotas, o Herói tem um saldo de ${saldoVitorias} está no nível de ${nivel}`);
}
