const container = document.querySelector(".container");
const button = document.querySelector(".howmany");

crearGrilla(5);

button.addEventListener("click", function(){
    let ingresado = prompt("Ingrese la cantidad de cassillas que quiere", "5");
    if(ingresado > 100 || ingresado < 0){
        ingresado = 100;
    }
    eliminarGrilla();
    crearGrilla(ingresado);
});


function crearGrilla (numFilCol){
    for( let i = 0; i < numFilCol; i++){
        const rowDiv = document.createElement("div");
        for( let j = 0; j < numFilCol; j++){
            const squareElement = document.createElement("div");
            squareElement.classList.add("square");
            squareElement.addEventListener("mouseover", function(){
                let randomColor = generateRandomColor();
                squareElement.style.cssText = `background-color:${randomColor};`;
            });
            rowDiv.appendChild(squareElement);
        }
        container.appendChild(rowDiv);
    }
}

function eliminarGrilla(){
    let divToBeDeleted = container.lastChild;
    while(divToBeDeleted != null){
        container.removeChild(divToBeDeleted);
        divToBeDeleted = container.lastChild;
    }
}

function generateRandomColor(){
    let maxValue = 0xFFFFFF;
    let randomNumber = Math.random() * maxValue;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    randomColor = randomNumber.padStart(6,0);
    return `#${randomColor.toUpperCase()}`;  
}
