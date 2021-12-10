/* const lista1=[
    100,
    200,
    300,
    500
];

let sumalista1 =0;


for (let i = 0; i < lista1.length; i ++) {
    sumalista1 = sumalista1 + lista1[i];


    
} */



function calcularMediaAritmetica(lista){
/*     let sumalista =0;

    for (let i = 0; i < lista.length; i ++) {
        sumalista = sumalista + lista[i];
    
    
        
    }
 */
    const sumalista=lista.reduce(
        function (valorAcomulado = 0,NewElement){
            return  valorAcomulado + NewElement;
        }
    );


    const promediolista1 = sumalista/lista.length;
    
    return promediolista1;

}