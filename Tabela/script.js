function adicionarItem(){
    //Obter valors dos campos digitados
    var tecido = document.getElementById("tecido").value;
    var tamanho = document.getElementById("tamanho").value;
    var quantidade = document.getElementById("quantidade").value;

    //Validar se todas existem

    if (!tecido || !tamanho || !quantidade) {
        alert("Preencha os campos!!");
        return;
    
    }

//Criar a tabela, mais precisamente, uma linha na tabela
var tabela = document.getElementById("tabela").getElementsByTagName("tbody")[0];
var novaLinha = tabela.insertRow(tabela.rows.length);
var celulaTecido = novaLinha.insertCell(0);
var celulaTamanho = novaLinha.insertCell(1);
var celulaQuantidade = novaLinha.insertCell(2);

//Colocar valores nas células
celulaTecido.innerHTML = tecido;
celulaTamanho.innerHTML = tamanho;
celulaQuantidade.innerHTML = quantidade;

//Limpar os campos depois de contribuir a linha da tabela

document.getElementById("tecido").value = '';
document.getElementById("tamanho").value = '';
document.getElementById("quantidade").value = '';
}


function exportarParaExcel(){
    var tabela = document.getElementById("tabela")
    var nomeArquivo = "tabela_Produtos.xlsx"
    var webBook = XLSX.utils.table_to_book(tabela, {sheet:"Tabela de Produtos"})
    XLSX.writeFile(webBook, nomeArquivo)
}
