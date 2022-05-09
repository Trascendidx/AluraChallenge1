const primerInput = document.querySelector(".principal");
const segundoInput = document.querySelector(".secundario");
const img = document.querySelector(".div-imagen");
const txt = document.querySelector(".caja-texto");

img.style.display = "block";
txt.style.display = "none";

function encriptar(frase){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    frase = frase.toLowerCase();
    for (let indice = 0; indice < matrizCodigo.length; indice++){
        if(frase.includes(matrizCodigo[indice][0])){
            frase = frase.replaceAll(matrizCodigo[indice][0],matrizCodigo[indice][1]);
        }
    }
    return frase;
}

function desencriptar(frase){
    let matrizCodigo = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]];
    frase = frase.toLowerCase();
    for (let indice = 0; indice < matrizCodigo.length; indice++){
        if(frase.includes(matrizCodigo[indice][0])){
            frase = frase.replaceAll(matrizCodigo[indice][0],matrizCodigo[indice][1]);
        }
    }
    return frase;
}

function encriptarboton(){
    const textoencriptado = encriptar(primerInput.value);
    segundoInput.value = textoencriptado;
    if(primerInput.value == ""){
        alert("No has ingresado ningún texto");
        return false;
    } else {
        img.style.display = "none";
        txt.style.display = "block";
    }
    

}

function desencriptarboton(){
    const textodesencriptado = desencriptar(primerInput.value);
    segundoInput.value = textodesencriptado;
    if(primerInput.value == ""){
        alert("No has ingresado ningún texto");
        return false;
    } else {
        img.style.display = "none";
        txt.style.display = "block";
    }
}

function copiarboton(){

    const textocopiado = segundoInput;
    
    textocopiado.select();
    document.execCommand("copy");
}
