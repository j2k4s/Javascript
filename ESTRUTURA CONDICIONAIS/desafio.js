const precoGasolina = 4.59;
const precoEtanol = 3.49;
const tipoDeCombustivel = 'Gasolina'
const gastoMedio = 10;
const distancia = 50;

calculoEtanol = distancia/gastoMedio*precoEtanol;
caculoGasolina = distancia/gastoMedio*precoGasolina;

if (tipoDeCombustivel === 'Etanol') {
    console.log('o valor gasto será: ' + calculoEtanol.toFixed(2));
} else {
    console.log('o valor gasto será: ' + caculoGasolina.toFixed(2));
}
