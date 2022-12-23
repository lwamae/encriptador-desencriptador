/*
Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

function encriptarFuncion(){
    let texto = document.getElementById("texto-ingresado").value;

    if(/([A-Z?!@$#%*&_()áéíóúÁÉÍÓÚñ])/.test(texto)){
        alert("El texto no esta en el siguiente formato: \nSolo letras minúsculas y sin acentos");
    }else{
        // regex expression
        const reg1 = /red/gm;
        const reg2 = /blue/gm;

        const newStr1 = texto.replace(reg1, "--");
        const newStr2 = texto.replace(reg2, "--");
        console.log(newStr1);
        console.log(newStr2);
    }
};

function desencriptarFuncion(){
    alert("The button desencriptar was pressed");
};

function copiarFuncion(){
    alert("The button copiar was pressed");
};