let value = 13

function soma(a, b)
{
    return a + b
}

if (value == 20){ console.log('vinte')}
else{
    console.log('não é vinte')
}

if ( (value % 2) == 0){
    console.log('numero par')
}else if((value % 2) != 0){
    console.log('numero IMPAR')
}

let aux = 0

while(true)
{
    console.log(aux)
    aux+=1
    if (aux == 15){
        aux = 15
        break
    }
}

while (aux>=0)
{
    console.log(aux)
    aux -=1
}

for(aux =0; aux<100; aux++)
{
    console.log(aux)
}


for(aux=0; aux<=100; aux++){
    if(aux % 2 == 0)
    {
        console.log(`numero par: ${aux}`)
        switch(aux){
            case 80:
                console.log("oitenta")
                break
            case 90:
                console.log("noventa")
                break
                default:
                    console.log("continua contando")
                    continue

        }

    }
    if( aux == 100){
        break
    }
}

console.log('Resultado da soma:'+soma(25,30))