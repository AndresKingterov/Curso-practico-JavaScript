
/* const PrecioOriginal = 120;
const descuento =18; */

function calcularPreciocondescuento(precio,descuento) {
    const porcentajeConDescuento = 100- descuento;
    const preciocondesc =(precio*porcentajeConDescuento)/100

    return preciocondesc;
}

function onClickbutonPriceButton(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue=inputPrice.value;
    const inputDiscount = document.getElementById("inputDiscount");
    const pricediscount = inputDiscount.value;
    const preciofinal= calcularPreciocondescuento( priceValue,pricediscount);
    const ResultPrice = document.getElementById("ResultPrice");
    ResultPrice.innerText="El precio Final es $" + preciofinal;
    
}


/* console.log({   
    PrecioOriginal,
    descuento,
    porcentajeConDescuento,
    preciocondesc
} ); */

