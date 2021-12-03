
//Codigo del Cudrado

console.group("Cuadrados");

//const LadoCudradoo = 5;
//console.log("Los lados del cuadrado miden:" +LadoCudradoo+" cm");

function perimetroCudrado(Lado){
    return Lado * 4;
} 
//console.log("El perimetro del cuadrado es: " + perimetroCudrado +" cm");


function AreaCuadrado(lado){
   return lado * lado;
} 


//console.log("El area del cudrado es: " + AreaCudrado+" cm cuadrado");

console.groupEnd();

//Codigo Triangulo

console.group("Triangulos");

//const LadoTiangulo1 = 6;
//const LadoTiangulo2 = 6;
//const base = 4;


//console.log(
  //              "los lado de mi triangulo miden " + LadoTiangulo1+" cm, "+LadoTiangulo2+" cm, "+ base +" cm"
   //        );

///const Alturatriangulo= 5.5;
//console.log("La altura del Triangulo: " + Alturatriangulo+" cm");

function perimetroTriangulo(lado1,lado2, base){
    return lado1 + lado2 + base;
};

//console.log("La el perimetro del triangulo: " + perimetroTriangulo+" cm");

function areaTriangulo(base,Altura){
   return (base * Altura) / 2;
}

console.groupEnd();


//Codigo Circulo

console.group("Circulo");

//const RadioCirculo = 4;

//console.log("La el radio del circulo: " + RadioCirculo+" cm");

function diametrocirculo(RadioCirculo) {
   return  RadioCirculo * 2;
};


//console.log("La el diametro del circulo: " + diametro+" cm");

const PI = Math.PI;
//console.log("pi es: " + PI);

function perimetroCirculo(radio){

    const diametro= diametrocirculo(radio);
   return  diametro * PI;
} 
//console.log("La perimetro del circulo: " + perimetroCirculo+" cm");


function AreaCirculo(RadioCirculo){
    (RadioCirculo * RadioCirculo) *PI;
}


//console.log("La area del circulo: " + AreaCirculo+" cm");




console.groupEnd();


//Aqui interactuamos con el html

function calcularPerimetroCudrado(){
    const input= document.getElementById("InputCuadrado");
    const value= input.value;

    const perimetro = perimetroCudrado(value);

    alert(perimetro);

}

function calcularAreaCudrado(){
    const input= document.getElementById("InputCuadrado");
    const value= input.value;

    const areacuadrado = AreaCuadrado(value);

    alert(areacuadrado);

}

