

// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

const fs = require('fs').promises;
const faturamentoMensal = async() => {
    try{ 
        const data = await fs.readFile('dados.json', 'utf8');
        const response = JSON.parse(data)

      
        const dados = response.map(f => f.valor).filter(valor => valor > 0);


        const menorValor = Math.min(...dados);
        const maiorValor = Math.max(...dados);

        const mediaMensal = dados.reduce((acc, valor) => acc + valor, 0) / dados.length;

     
        const diasAcimaMedia = dados.filter(valor => valor > mediaMensal).length;
        
        console.log(`Menor valor: ${menorValor}`);
        console.log(`Maior valor: ${maiorValor}`);
        console.log(`Dias com faturamento acima da média: ${diasAcimaMedia}`);

    }catch(error){
        console.log(error);
    }
}

faturamentoMensal()