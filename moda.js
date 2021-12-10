const lista1=[
1,
2,
3,
4,
5,
6,
7,
3,
4,
5,
3,
4,
5
];
const listaCount={};

lista1.map(
    function(elemento){
        if(listaCount[elemento]){
            listaCount[elemento]+= 1;
        }else{
        listaCount[elemento] =1;
    }
    }
);

const lista1Array = Object.entries(listaCount).sort(
    function(valorAcomulado,nuevoValor){
        return valorAcomulado[1]-nuevoValor[1];
    }
);

const moda= lista1Array[lista1Array.length-1]



