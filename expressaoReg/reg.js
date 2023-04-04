/* const reg1 = new RegExp('bola')

console.log(reg1.test('Minhas bolas'))
console.log(reg1.test('Não tem'))

const reg2 = /bola/

console.log(reg1.test('Minhas bolas'))
console.log(reg1.test('Não tem'))

console.log(/ponto/.test('wdawdasdtenho 1 pontoasdasdasdas')) */

//Conjuntos caracteres

/*     const reg1 = /[12345]/

    console.log(reg1.test('tenho 6'))
    console.log(reg1.test('tenho 123'))
    console.log(reg1.test('tenho 4'))

    const reg2 = /[0-9]/

    console.log(reg2.test('tenho 10'))
    console.log(reg2.test('1'))
    console.log(reg2.test('abelha')) */

// caracteres especiais

/* 
\d - qualquer digito ou caractere
\w - Um caractere alfanumerico("teste")
\s - Qualquer caractere de espaço em branco
\D - Caracteres que não são digitos
\W - Caractere não-alfanumérico
\S - caractere que não seja espaço em branco
\. - qualquer caractere, menos nova linha
*/

/* const reg1 = /\d/

console.log(reg1.test('asmdkamsdas'))
console.log(reg1.test('asmdk  s'))
console.log(reg1.test('123@#!@'))

const reg2 = /\W/

console.log(reg2.test('asmdkamsdas'))
console.log(reg2.test('asmdk  s'))
console.log(reg2.test('123@#!@')) */

/* let ano = /\d\d\d\d/
console.log(ano.test('2014'))
console.log(ano.test('14'))
console.log(ano.test('201b'))

let palavratresLetras = /\w\w\w/
console.log(palavratresLetras.test('bbb'))
console.log(palavratresLetras.test('123'))
console.log(palavratresLetras.test('aa')) */

/* const reg1 = /[^ab]/
console.log(reg1.test('a'))
console.log(reg1.test('aqui tem'))


const reg2 = /[^a-z]/

console.log(reg2.test('asmdkamsdas'))
console.log(reg2.test('asmdk  s'))
console.log(reg2.test('123@#!@'))  */

/* let telefone = /\d{4,5}-\d{4}/

console.log(telefone.test("4004-5656"))
console.log(telefone.test("40044-5656"))
console.log(telefone.test("404-5656"))
console.log(telefone.test("40044-565"))

let telefone2 = /\(\d{4,5}\)-\d{4}/

console.log(telefone2.test("(4004)-5656")) */

// choice pattern

const reg = /\w+: (placa|teste|canarinho)/
console.log(reg.test("placa"))
console.log(reg.test("nome: placa"))
console.log(reg.test("nome: monkey"))

const web = /www.\w+\.com.br|.com/

console.log(web.test('www.google.com'))
console.log(web.test('google.net'))