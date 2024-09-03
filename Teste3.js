// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

const faturamentoMensal = [
    { dia: 1, valor: 100.0 },
    { dia: 2, valor: 150.0 },
    { dia: 3, valor: 0.0 },
    { dia: 4, valor: 120.0 },
    { dia: 5, valor: 130.0 },
    { dia: 6, valor: 0.0 },
    { dia: 7, valor: 90.0 }
];

// Filtrando valores diferentes de 0
const valores = faturamentoMensal.map(f => f.valor).filter(valor => valor > 0);

// Calculando o menor e o maior valor
const menorValor = Math.min(...valores);
const maiorValor = Math.max(...valores);

// Calculando a média
const mediaMensal = valores.reduce((acc, valor) => acc + valor, 0) / valores.length;

// Contando os dias com faturamento acima da média
const diasAcimaMedia = valores.filter(valor => valor > mediaMensal).length;

console.log(`Menor valor: ${menorValor}`);
console.log(`Maior valor: ${maiorValor}`);
console.log(`Dias com faturamento acima da média: ${diasAcimaMedia}`);
