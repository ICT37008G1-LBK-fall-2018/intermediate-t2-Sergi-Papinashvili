let button = document.querySelector("#highlight-product");
     color = prompt("Sheiyvanet feri"),
     ID = prompt("sheiyvanet ID");

button.addEventListener('click', getColorByID)

function getColorByID() {
    let productById =document.querySelector(`.phone-list-item[data-product-id='${ID}']`);
    if((color && color[0] === '#' && color.length === 7) && productById){
        console.log(productById);
        productById.style.backgroundColor = color; 
    }else{
        if(color && ID){
            color = '';
            ID = '';
            alert('not found'); 
        }   
    }
}


getColorByID();



