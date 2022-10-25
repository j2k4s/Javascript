const precoDoProduto = 50;
const formaDePagamento = 2;

if (formaDePagamento === 1) {
   console.log( precoDoProduto - (precoDoProduto * 0.1));
} else if (formaDePagamento === 2 ) {
    console.log( precoDoProduto - (precoDoProduto * 0.15));
} else if (formaDePagamento === 3) {
  console.log(precoDoProduto);
} else {
    console.log(precoDoProduto + (precoDoProduto * 0.1));
}