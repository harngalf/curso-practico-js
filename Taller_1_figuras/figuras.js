const centimetroCuadrado = " cm²";

// Código del Cuadrado

console.group("Cuadrado");

function perimetroCuadrado(lado) {
    return lado * 4;
 };

function areaCuadrado(lado) {
    return lado * lado;
}; 

console.groupEnd();

//Código del triángulo
console.group("Triángulo");



function perimetroTriangulo(ladoUno, ladoDos, base) {
    return ladoUno + ladoDos + base;
};

function alturaTriangulo(lados, base){
    return Math.sqrt(
        (Math.pow(lados, 2))
        - (Math.pow((base / 2), 2)));
};

function areaTriangulo(lados, base){
    return ((base * (alturaTriangulo(lados, base))) / 2);
};


console.groupEnd();

//Código del círculo
console.group("Círculo");

// const pi = Math.PI

function diametroCirculo(radio) {
    return radio * 2;
};

function circunferencia(radio){
    const diametro = diametroCirculo(radio);
    return diametro * Math.PI;
};

function areaCirculo(radio) {
    return (radio * radio) * Math.PI;
};


console.groupEnd();

//Aquí interactuamos con el HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
};

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
};

function calcularPerimetroTriangulo() {
    const inputLados = document.getElementById("InputLadosTriangulo");
    const inputBase = document.getElementById("InputBaseTriangulo");
    const valueLados = Number(inputLados.value);
    const valueBase = Number(inputBase.value);
    const perimetro =  perimetroTriangulo(valueLados, valueLados, valueBase);
    alert(perimetro);
};

function calcularAreaTriangulo() {
    const inputLados = document.getElementById("InputLadosTriangulo");
    const inputBase = document.getElementById("InputBaseTriangulo");
    const valueLados = Number(inputLados.value);
    const valueBase = Number(inputBase.value);
    const area =  areaTriangulo(valueLados, valueBase);
    alert(area);
};

function calcularAlturaTriangulo(){
    const inputLados = document.getElementById("InputLadosTriangulo");
    const inputBase = document.getElementById("InputBaseTriangulo");
    const valueLados = Number(inputLados.value);
    const valueBase = Number(inputBase.value);
    const altura =  alturaTriangulo(valueLados, valueBase);
    alert(altura);
};


function calcularCircunferencia(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const circun = circunferencia(value);
    alert(circun);
};

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const area = areaCirculo(value);
    alert(area);
};