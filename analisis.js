


const SalariosCol = colombia.map(
    function (persona) {
         return persona.Salary;
    }
);

const salarioSorted = SalariosCol.sort(
    function( salaryA, salaryB){
        return salaryA-salaryB;
    }
);


function esPar(numero){
    return (numero % 2 === 0)
}

function calcularMediaAritmetica(lista){

        const sumalista=lista.reduce(
            function (valorAcomulado = 0,NewElement){
                return  valorAcomulado + NewElement;
            }
        );
    
    
        const promediolista1 = sumalista/lista.length;
        
        return promediolista1;
    
    }

function medianaSalarios(lista) {
    const mitad =parseInt(lista.length / 2);    

    if(esPar(lista.length)){
        const personamitad1 = lista[mitad-1];
        const personamitad2 = lista[mitad];
        const mediana=calcularMediaAritmetica([personamitad1,personamitad2])
        return mediana;
    }else{
        const personamitad=lista[mitad];
        return  personamitad;
    }

}

const medianaGeneralSalarios =  medianaSalarios(salarioSorted);

//mediana salario top 10

const spliceStar = (salarioSorted.length * 90)/100;
const spliceCount = salarioSorted.length - spliceStar;

const salariosTop10 = salarioSorted.splice(spliceStar,spliceCount); 


const top10Salarios =  medianaSalarios(salariosTop10);

console.log({
    medianaGeneralSalarios,
    top10Salarios
});