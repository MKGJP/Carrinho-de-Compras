let totalGeral;
limpar();

function adicionar() { 
  // Recuperar valores:  nome do produto/quantidade/valor
  let produto = document.getElementById('produto').value;
  let quantidade = document.getElementById('quantidade').value;


  // Verificar se o produto selecionado é válido
    if (!produto || produto.trim() === "") {
        alert("Selecione um produto válido.");
        return;
    }

     // Verificar se a quantidade inserida é válida
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Insira uma quantidade válida.");
        return;
    }

  // Limpar as imperfeições 
  let nomeProduto = produto.split('-')[0];
  let valorUnitario = produto.split('R$')[1];

  // Remover zeros à esquerda da quantidade
  quantidade = String(Number(quantidade));

  // Calcular preço, o nosso subtotal
  let preco = quantidade * valorUnitario;

  // Adicionar no carrinho
  let carrinho = document.getElementById('lista-produtos');
  carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">R$ ${preco}</span>
  </section>`;

  // Atualizar o valor total
  totalGeral = totalGeral + preco;
  let campoTotal = document.getElementById('valor-total');
  campoTotal.textContent  = `R$ ${totalGeral}`;
  document.getElementById('quantidade').value = 0;
  
}

function limpar() { 
  totalGeral = 0;
  document.getElementById('lista-produtos').innerHTML = '';
  document.getElementById('valor-total').textContent = 'R$ 0';

}
