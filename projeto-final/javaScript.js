// 6.1 Váriaveis são alocações de memoria para armazenamento de dados que podem se alterar ao longo do código e podem ser usadas para funcões e outras demandas.
    // Exemplos:
        var batata = 'bombinha de chocolate'
        var batata = 'torda de morango'
        //Neste caso a variavel batata aceitaria a informação nova na linha 4 pois uma variavel aceita qualquer informação para atualizar sua informação interna.
//6.1 Constantes são similares a variaveis, mas possuem uma diferença fundamental, como o próprio nome indica elas são constantes, logo não aceitam alterações.
        const tomate = 'abobrinha'
        const tomate = 'cebola'
        //Neste caso a constante tomate indicaria um grande erro, pois ela já possuia o valor 'abobrinha'.

//6.2 Comandos de decisão são usados para que o sistema tome decisões baseado em determinada informação fornecida (if, else e switch)
    //Exemplos:
        if (5>2){
            alert('Verdadeiro');
        }else{
            alert('falso');
        }
        //Neste caso se o 5 for maior do que o 2 o comando dará um retorno de alerta de verdadeiro, caso contrario dará um alerta de falso.
        switch(new Date().getDay()){
            case 0:
                day = 'Domingo';
                break;
            case 6:
                day = 'Sabado';
                break;
            default:
                day = 'Ainda estamos no meio da semana'  
        }
        //Neste caso o switch vai puxar o dia de hoje de um array com um numero entre 0 e 6 e retornará a informação baseada no numero recebido.

//6.3 loops são palavras chaves que se repetem enquanto a condição inicial não foi alcançada (for, while, for if e for of)
        var a
        for(a = 0; a < 10, a++){
            text += 'O numero é' + a + '<br';
        }
        //Neste caso o for irá incremantar a variavel a em +1 até que ele seja igual a 10.

//6.4 Funções são uma forma de armazenar uma ação que pode ser chamada em qualquer ponto do código sem que você tenha que ficar repetindo toda aquela informação toda vez que precisar usa-la.
        function salame(){
            for(a = 0; a < 10, a++){
                text += 'O numero é' + a + '<br';
            }
        }  
        //Neste caso toda vez que eu usar a palavra 'Salame' no código eu estarei chamando a função e executando o codigo dentro dela.

//6.5 Escopos podem ser globais ou locais, essencialmente eles determinam se você pode usar determinada informação apenas dentreo de todo o seu bloco de código ou apenas dentro de uma função especifica.
        var cachorro = 'amigo do homem'
        function bisnaga (){
            var gato = 'bicho chato'
        }
        //Neste caso a variavel cachorro pode ser usada em qualquer lugar, pois possui escopo global, a variavel gato só vai ser reconhecida dentro da função bisnaga.

//6.6 Inputs são palavras chaves que solicitam que o unsuario forneça alguma informação ao sistema.
        prompt('Insira o seu nome')
        //Neste caso o sistema irá soliciar que o usuário forneça o nome dele.
//6.6 Outputs são palavras chave que vão fornecer uma informação ao usuario.
        alert('Seu nome é Weberson')
        //ou
        document.write('Seu nome é Weberson')

//6.7 Um array é uma fila ou pilha de informações que o sistema pode utilizar.
        var almoco = ['cenoura','batata','arroz','bife']
        //Neste caso o array almoço contem as informações cenoura, batata, arroz e bife.

//6.8 Objetos é semelhante a um array, mas os itens dentro dele possuem propriedades.
        var Aluno = [Nome:'Rodrigo', Profissão:'Estudante', idade:33]
        //Neste caso o objeto aluno contem os dados do Rodrigo, estudante de 33 anos.

//6.9  - camelCase é utilizada no javaScript e possui a primeira letra minuscula e o inicio de cada palavra seguinte com letra maiuscula.
        //Exemplo: javaScript
//     - PascalCase é utilizada em Pascal e Mesa e possui a letra inicial de todas as palavrasem letra maiuscula.
        //Exemplo: FedEx
//     - kibab-case é utilizada em html e consiste na colocação de um hifen entre cada palavra.
        //Exemplo: rodrigo-lifsitch
//     - snake_case é utilizada em Python e C++ e consiste na utilizaçãod e um underline entre as palavras.
        //Exemplo: Eu_to_ficando_sem_tempo

//6.10 Caminho absoluto é quando o endereço de determinado objeto de referencia é dado de corma determinada 'c:/arquivos de programas/windows/telefone' ao utilizar este formato o sistema só encontra a informação se ela estiver na pasta indicada.
// o Caminho Relativo é indicado pelo \\ o que fará com que o sistema procure no diretorio raiz a pasta onde o sistema está instalado.

//6.11 && indica E e neste caso ambas as condições apontadas devem ser verdade para que o resultado seja alcançado.
        if(a > b && c > a){
            alert('Verdadeiro')
        }
//  || indica OU e neste caso uma ou outra das condições apondadas devem ser verdade para que o resultado seja alcançado.
        if(a > b || c > a){
            alert('verdadeiro')
       }        
//  == indica uma igualdade
       if(a == b){
           alert('a é igual a b')
       }
// != indica uma diferença
        if(a!=b){
            alert('a é diferente de b')
        }       

//6.12 EPER significa Entender, Planejar, Executar, Revisar. E serve para organizar melhor suas ações e entender o que deve ser feito gerando assim um processo mais eficiente

//6.13 Pilha e Fila são formas de organização de um array, pilha significa que o ultimo a entrar será o primeiro a sair e fila significa que o primeiro a entrar será o primeiro a sair.

//6.14 html é o esqueleto do código, essencialmente é a raiz onde sua aplição será construida, javaScript são os musculos, é o que da funcionalidade ao esqueleto html, seria o tronco e galhos e CSS é para dar uma aparencia mais agradavel e facil de entender a sua sestrutura, seriam as folhas e flores.
