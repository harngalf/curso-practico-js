const cupons = [
    "FREE",
    "MEDIUM",
    "HIGH"
];

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function onClickButtonPriceDescount(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = Number(inputPrice.value);
    console.log(priceValue);
    const inputCpn = document.getElementById("inputCupon");
    const cuponValue = inputCpn.value;

    let descuento;

    switch(cuponValue) {
        case cupons[0]: //FREE
            descuento = Number(15);
        break;    
        case cupons[1]: //MEDIUM
            descuento = Number(25);
        break;
        case cupons[2]: //HIGH
            descuento = Number(30);
        break;
    };
    console.log(descuento);

    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
     console.log(precioConDescuento);

    const resultP = document.getElementById("resultPrice");
    const resultB = document.getElementById("resultBlack");

    

    resultP.innerText = "El precio con descuento es de: "; 
    resultB.innerText = "$ " + precioConDescuento + " pesos (MXP)";

};



