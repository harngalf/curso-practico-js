const cupons = [
    {
        cupon: "FREE",
        discount: 15
    },
    { 
        cupon: "MEDIUM",
        discount: 25
    },
    {
        cupon: "HIGH",
        discount: 35
    }
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


    const isCuponValueValid = function (cupon) {
        return cupon.cupon === cuponValue;
    };
    console.log(isCuponValueValid);
    const userCupon = cupons.find(isCuponValueValid);
    console.log(userCupon);
    if (!userCupon) {
        alert("El cupón " + cuponValue + " NO es válido");
    }
    else {
        const descuento = userCupon.discount;
        console.log(descuento);
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
        console.log(precioConDescuento);

        const resultP = document.getElementById("resultPrice");
        const resultB = document.getElementById("resultBlack");
        resultP.innerText = "El precio con descuento es de: "; 
        resultB.innerText = "$ " + precioConDescuento + " pesos (MXP)";


    }

    

};








