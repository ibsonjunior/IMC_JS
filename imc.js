
// O getelementbyid liga a variável a tag html
// referenciada neste id

const calcular = document.getElementById('calcular');

function imc (){

    //o value pega o que  foi colocado num impput tipo texto e
    //alguns outros elementos

    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(nome !== '' && altura !== '' && peso !== ''){

        //tofixed define a quantidade de casas decimais
        let calcimc = (peso/(altura*altura)).toFixed(1);
        
        let classificacao = '';

        if(calcimc < 18.5){
            classificacao = 'abaixo do peso ideal.'
        }else if(calcimc < 25){
            classificacao = 'está com peso ideal!'
        }else if(calcimc < 30){
            classificacao = 'está levemente acima do peso!'
        }else if(calcimc < 35){
            classificacao = 'com obesidade grau I!'
        }else if(calcimc < 40){
            classificacao = 'com obesidade grau II!'
        }else{
            classificacao = 'Obesidade grau III'
        }   
        resultado.textContent = `${nome} seu IMC é: ${calcimc} e você está ${classificacao}`;
    }else{
            // A textContent propriedade define ou retorna
            // o conteúdo de texto do nó especificado
            //  e todos os seus descendentes .

            //Foi usado nesse caso para atribuir um valor a div ou texto
            resultado.textContent = 'Preencha todos os campos!';
    }

}

// O addEventListener()método anexa um manipulador de eventos a um elemento.

calcular.addEventListener('click', imc);