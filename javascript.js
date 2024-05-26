
let calcular = document.getElementById('calcular');

calcular.addEventListener("click", ()=> {
    //obter altura
    let altura = +document.getElementById('altura').value;

    //obter peso 
    let peso = +document.getElementById('peso').value;

    //Calcular o IMC, utilizando altura e o peso informado.
    let imc = peso / (altura * altura);
    
    //Com o imc calculado, econtrar o IMC da tabela. Se o resultado for 
    let situacao = "";

    if (imc < 17) {
        situacao = "Muita abaixo do peso";
    } else if (imc >= 17 && imc <= 18.49 ) {
       situacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.99) {
        situacao = "Peso normal";
    } else if (imc >= 25 && imc <= 29.99) {
        situacao = "Acima do peso normal";
    } else if (imc >= 30 && imc <= 34.99) {
        situacao = "Obesidade I";
    } else if (imc >= 35 && imc <= 39.99) {
        situacao = "Obesidade II";
    } else if (imc >= 40) {
        situacao = 'Obesidade III';
    }

     alert(situacao);


})