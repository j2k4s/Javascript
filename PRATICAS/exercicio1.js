const nota1 = 2;
const nota2 = 3;
const nota3 = 5;

const media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
    console.log('Reprovado')
} else if (media >= 5 & media <=7 ) {
    console.log('Recuperação')
} else if (media > 7) {
    console.log('Aprovado')
} else {
    console.log('Digite uma nota valida')
}