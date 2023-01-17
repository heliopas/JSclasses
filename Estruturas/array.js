/* let vet = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '11']

console.log('Tamanho vetor->' + vet.length)
console.log('Tem o numero 2?->' + vet.lastIndexOf('2'))

vet.forEach(aux => {
    console.log('Valores no vetor->' + vet[aux])
});

vet.pop(5)

console.log('Inserido valor->' + '5')

vet.forEach(aux => {
    console.log('Valores no vetor->' + vet[aux])
});

vet.push(10);

console.log('Inserido valor->' + '10')

vet.forEach(aux => {
    console.log('Valores no vetor->' + vet[aux])
});

vet.push(11);

console.log('Inserido valor->' + '11')

vet.forEach(aux => {
    console.log('Valores no vetor->' + vet[aux])
});

vet.push(12);

console.log('Inserido valor->' + '12')

vet.forEach(aux => {
    console.log('Valores no vetor->' + vet[aux])
});


let auxVar = "2532";
console.log('Usando pad->' + auxVar.padEnd(6, 0)) */


/* let frase = "meu casado esta sujo de poeira";

let frasesplit = frase.split(" ");

console.log('Tamanho vetor:'+ frasesplit.length)

for(let aux=0; aux<=frasesplit.length; aux++)
{
    console.log('Valores no vetor->'+ frasesplit[aux])
}

let juntar = frasesplit.join(' ')

console.log('Valores no vetor->'+ juntar) */

/* let carro = {
    parafuso: 6,
    rodas: 4,
    lata:100
}

//let {parafuso: par, rodas: rd} = carro; // pode ser cons 'não permite modificação ou let variavel'
const {parafuso: par, rodas: rd} = carro; 

console.log('var objeto parafuso: '+ par)
console.log('var objeto rodas: '+ rd)

par = 100;

console.log('var objeto parafuso: '+ par) */


let carro = ['parafuso', 'tinta', 'pneu']

let [motor, lata, aro] = carro

console.log(motor)
console.log(lata)
console.log(aro)


//***********JSON */

// sempre usar aspas duplas para string""
// não aceita comentários

let pes = {
    "nome": "Thiago",
    "Empresa": "CITS",
    "Idade": 25,
    "idioma": ["ingles", "Espanhol", "polones"]
}

console.log(pes.Empresa)
console.log(pes.nome)
console.log(pes.Idade)
console.log(pes.idioma[2])

// Coonverter de Json para string

let convertAux = JSON.stringify(pes)
console.log(convertAux)

// Coonverter de string para json

let pessparse = JSON.parse(convertAux)
console.log(pessparse.Idade)