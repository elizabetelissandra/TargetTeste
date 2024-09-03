// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

const fibonacci = (n) => {
    let fib = [0, 1];
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
        fib.push(fib[i]);
    }
    return fib;
}

let numero = prompt("Digite um numero: ");

if (fibonacci(numero).includes(numero)) {
    console.log("O numero pertence a sequência de Fibonacci");
} else {
    console.log("O numero NAO pertence a sequência de Fibonacci");
}


