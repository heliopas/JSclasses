///////////////metodos de objetos

/* const bd = {
    inserirBD: function(){
        console.log('inserido')
        return 0
    },
    deletarBD: function(){
        console.log('Deletado')
        return 0
    }
}

console.log(bd.inserirBD())
console.log(bd.deletarBD())

bd.deletarBD()
bd.inserirBD() */

///////////////Setter

/* let pessoa = {
    nome: 'None',
    insereNome: function(novoNome){
        this.nome = novoNome
    },
    printNome: function(){
        console.log(this.nome)
    }    
}

pessoa.printNome()
pessoa.insereNome('Luiz')
pessoa.printNome() */

///////////////Criar objetos

/* const pessoa = { maos : 2 }

const novaPessoa = Object.create(pessoa);
console.log(novaPessoa.maos) */

///////////////Classes

/* let cachorro = {
    raça: 'SRD',
    cor: 'amarelo'
}

let golden = Object.create(cachorro)
golden.cor = 'preto'
golden.raça = 'Labrador'

console.log(golden.cor + golden.raça)

function criarCachorro(patas, rabo, pelo){
    let dog = Object.create({})
    dog.patas = patas
    dog.rabo = rabo              // variaveis do objeto
    dog.pelo = pelo
    dog.latir = function(){      // função do objeto
        console.log('AuuAuu')
    }

    return dog
}

let boxer = criarCachorro(10, 'Sim', 'Branco')
console.log(boxer.patas)
boxer.latir()

let husky = new criarCachorro(4, 'Sim', 'Preto')
console.log(husky.patas)
husky.latir()

////// adicionando funções  as classes com prototype
function criardog(patas, rabo, pelo){
    let dog = Object.create({})
    dog.patas = patas
    dog.rabo = rabo              // variaveis do objeto
    dog.pelo = pelo
 */

/*     dog.patas = patas
    dog.rabo = rabo              // variaveis do objeto
    dog.pelo = pelo */
/* }

criardog.prototype.uivar = function(){
    console.log('aaaauuuuuauuuuauu')
}

let pincher = new criardog(4, 'Sim', 'Preto')
pincher.uivar() */

///////////// criando classe usando class ES6
/* class cachorro{
    constructor(cor){
        this.cor = cor
    }

    latir() {
        console.log('Auuuuuuuuuuuu')
    }

}

let viralata = new cachorro('Preto')
console.log(viralata.cor)
viralata.latir() */

///////////// herança

class Mamifero{
    constructor(mama)
    {
        this.mama = mama
    }
}

class cachorro extends Mamifero{ // herda mama da classe mamifero
    constructor(mama, patas)
    {
        super(mama, mama) //acessa setter herdado
        this.patas = patas
    }
}

let pincher = new cachorro('sim', 5)
console.log(pincher.mama + pincher.patas)
console.log(new cachorro instanceof Mamifero) // verifica se cachorro é uma instancia de mamifero