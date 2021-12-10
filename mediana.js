function calcularMediaAritmetica(lista){

        const sumalista=lista.reduce(
            function (valorAcomulado = 0,NewElement){
                return  valorAcomulado + NewElement;
            }
        );
    
    
        const promediolista1 = sumalista/lista.length;
        
        return promediolista1;
    
    }

const lista1=[
    100,
    200,
    300,
    400,
    4000000,

]

const mitadLista = parseInt(lista1.length / 2);

function esPar(numero){
    if(numero % 2 === 0){
        return true;
    }
    else{return false}
}

let mediana;

if (esPar(lista1.length)) {
    const elemento1=mediana=lista1[mitadLista-1];
    const elemento2=mediana=lista1[mitadLista];
    const calcularPromedo =calcularMediaAritmetica([
        elemento1,
        elemento2
    ])
 
    mediana=calcularPromedo;
    
}else{
    mediana=lista1[mitadLista];


}