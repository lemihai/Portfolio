
document.addEventListener("DOMContentLoaded", function(){
    var cards = document.querySelectorAll(".card");

    cards.forEach(function(dv) {
        var name = dv.className;

        console.log("class: " + name);
    })
    
});

console.log("hey");

document.addEventListener("DOMContentLoaded", function() {

    var divs = document.getElementsByClassName("card");


    for (var i = 0; i < divs.length; i++) {
        var currentDiv = divs[i];
        var divClass = currentDiv.className;
        var divContent = currentDiv.textContent || currentDiv.innerText;
        console.log("Class: " + divClass + ", Content: " + divContent);
    }
});

var a = new Array();

function checkStyle(){
    var cards = document.querySelectorAll('.card');
    a = document.getElementsByClassName("card");
    for (var i = 0; i < a.length; i++) {
        var currentDiv = a[i];
        var divClass = currentDiv.className;
        var divContent = currentDiv.textContent || currentDiv.innerText;
        console.log("CL: " + divClass);
    }

//INTRODUCE THE BELOW CODE INTO THE FOR TO SOLVE THE DISORDER

    cards.forEach(function (box) {
        var order = getComputedStyle(box).order;
        if (parseInt(order) === 1){
            box.classList.remove(box.classList.item(2));
            box.classList.add('left-left');
            
        }
        if (parseInt(order) === 2){
            box.classList.remove(box.classList.item(2));
            box.classList.add('left');

        }
        if (parseInt(order) === 3){
            box.classList.remove(box.classList.item(2));
            box.classList.add('middle');

        }
        if (parseInt(order) === 4){
            box.classList.remove(box.classList.item(2));
            box.classList.add('right');

        }
        if (parseInt(order) === 5){
            box.classList.remove(box.classList.item(2));
            box.classList.add('right-right');
        }
        console.log("Box " + box.id + " has flex order: " + order);
        
        cards.forEach(function (box){
            var order = getComputedStyle(box).order;
            if (parseInt(order) === 1){
            box.style.order = 2;}
            if (parseInt(order) === 2){
                box.style.order = 3;}
                if (parseInt(order) === 3){
                    box.style.order = 4;}
                    if (parseInt(order) === 4){
                        box.style.order = 5;}
                        if (parseInt(order) === 5){
                            box.style.order = 1;}
        });
    });
}


function shuffle(){
    var diva 
}
