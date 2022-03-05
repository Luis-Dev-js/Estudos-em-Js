//  funções........................

function aq(lado) {
    return lado * lado;
}
console.log(` a area é ${aq(5)}.`);


// teste de imc.........................

function imc(peso, altura) {
    const imc = peso / (altura ** 2);
    return imc;
}

console.log(imc(80, 1.90).toFixed(2));
console.log(imc(90, 1.60).toFixed(2));


// Cor favorita ................................

function corFav(cor) {
    if (cor === 'azul') {
        return 'Cruzeiro Cabuloso...';
    } else if (cor === 'verde') {
        return 'Palmeiras tem bi ?????';
    } else {
        return 'Não gosto de nada....'
    }
}
console.log(corFav());
console.log(corFav('azul'));
console.log(corFav('verde'));

// 
let q = 0;
const beta = document.querySelector('.click').addEventListener('click', () => {

    console.log('clicou', q++);
});

console.log('');
console.log('');
console.log('....idade...');
console.log('');

function boaIdade(idade) {
    if(typeof idade !== 'number'){
        return 'informe idade!';
    }else if(idade >= 60){
        return '... entrou na Boa idade.......';
    }else{
        return '.........mais novo.......'
    }
}

boaIdade();
console.log(boaIdade(90));


console.log('');
console.log('');
console.log('....Paises...');
console.log('');


function faltaVisitar(visitados){
    let paises = 193;
    return `Falta visitar ${paises - visitados} paises....`
}
console.log(faltaVisitar(63));



console.log('');
console.log('');
console.log('....profissão...');
console.log('');

let profissao = 'designer'

function dados(){
    let nome = 'Luis';
    let sobreNome = 'Santos';
    let idade = 32
    function novosDados(){
        let endereco = 'Um';
        let cidade = 'BH';
        return `nome: ${nome},\nSobre nome: ${sobreNome},\nIdade: ${idade} ,\nEndereço: ${endereco} ,\nCidade: ${cidade}....  `
    }
    return novosDados();
}
dados();
console.log(dados());



















// 