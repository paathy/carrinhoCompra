var valoRtotal = [0,0];
var valorProduto = [49.99,39.99];
var qtd = [0,0];

function adicionarItem(item){
    var quantidade = document.getElementById('quantidade' + item); 
    var total = document.getElementById("total" + item);
    qtd[item] += 1;
    valoRtotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item];
    quantidade.innerHTML = qtd[item];
    total.innerHTML = valoRtotal[item].toFixed(2);
    valorCompra()

}

function removerItem(item){
    
    if(qtd[item] > 0){
        qtd[item] -=1;
        var quantidade = document.getElementById('quantidade' + item); 
        var total = document.getElementById("total" + item);
        quantidade.innerHTML = qtd[item];
        valoRtotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item];
        total.innerHTML = valoRtotal[item].toFixed(2);
        valorCompra()
    }
}

function valorCompra(){

     var valorTotalCompra = document.getElementById('valorTotalCompra');
     var valor = 0;

    for(var i = 0; i < valoRtotal.length; i++){
        valor += valoRtotal[i];
    }

    valorTotalCompra.innerHTML = valor.toFixed(2);

}