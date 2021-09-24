/**
 * @author Vitória Bernardo <vitoriabernardocc@gmail.com>
 */

//Declarando a função:
function print(msg){
    console.log(msg)
}


//Main (principal)
//Declarando Variáveis
const ID = 0
const NAME = 1
const AGE = 2
//Segue tabela com os dados das pessoas
var pessoas = [
 [1, "Isaac Newton", 28],
 [2, "Friedrich Gauss", 33],
 [3, "Marie Curie", 29],
 [4, "Hedy Lamarr", 23],
 [5, "Albert Einstein", 39],
 [6, "Nicolau Copernico", 30],
 [7, "Galileu Galilei", 25],
 [8, "Alexander Volta", 36],
 [9, "André-Marie Ampère", 23],
 [10, "James Clerk Maxwell", 25],
 [11, "James Prescott Joule", 33],
 [12, "James Watt", 23],
 [13, "Archimedes de Siracusa", 39],
 [14, "Simom Ohm", 35]

]

//Ordenando a Array:
for(n = 1; n <= pessoas.length; n++){
    for(i = 0; i <=pessoas.length-2; i++){
        if(pessoas[i][ID] > pessoas[i+1][ID]){
            aux = pessoas[i];
            pessoas[i] = pessoas[i+1];
            pessoas[i+1] = aux
        }
    }
}

//Exibindo o resultado
console.log(pessoas)