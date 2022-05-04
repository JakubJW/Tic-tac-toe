const board = document.getElementById("board");
const fields = board.childNodes;
const firstPlayerBoard = document.getElementById("player1");
const secondPlayerBoard = document.getElementById("player2");
const restart = document.getElementById("restartBtn")
const winner = document.createElement("h1");
winner.innerText = "Winner";

var player = 1;

fields.forEach(field => {
    field.addEventListener("click", function(){
        if(!field.classList.contains("unclickable")) {
            const icon = document.createElement("i");
            if(player === 2){
                icon.classList.add("fa-solid", "fa-x", "cros");
                field.classList.add("cross");
                player = 1;
            }
            else {
                icon.classList.add("fa-regular", "fa-circle", "circ");
                field.classList.add("circle");
                player = 2;
            }
            icon.id = "icon";
            field.appendChild(icon);
            field.classList.add("unclickable")
        }
        winCheck(fields);
    })
});

restart.addEventListener("click", function(){
    fields.forEach(field => {
        if(field.nodeType!="3"){
            if(field.classList.contains("unclickable")){
                
                if(field.classList.contains("circle")){
                    const fieldChild = field.childNodes[0];
                    fieldChild.classList.add("restartAnimation");
                    fieldChild.addEventListener("transitionend", function(){
                        field.removeChild(fieldChild);
                    });
                    field.classList.remove("circle");
                }
                
                else if (field.classList.contains("cross")){
                    field.classList.remove("cross");
                    const fieldChild = field.childNodes[0];
                    fieldChild.classList.add("restartAnimation");
                    fieldChild.addEventListener("transitionend", function(){
                        field.removeChild(fieldChild);
                    });
                }

                field.classList.remove("unclickable");
            }
        }
    })
    player = 1;
    if(firstPlayerBoard.lastChild.innerText=="WINNER"){
        firstPlayerBoard.removeChild(firstPlayerBoard.lastChild);
    }
    
    else if(secondPlayerBoard.lastChild.innerText=="WINNER"){
        secondPlayerBoard.removeChild(secondPlayerBoard.lastChild);
    }
});

function freeze(element){
    element.forEach(field => {
        if(field.nodeType!="3"){
            if(!field.classList.contains("unclickable")) field.classList.add("unclickable");
        }
    });
}

function winCheck(element) {
    //row check
    if(
        (element[1].classList.contains("circle")
        &&element[3].classList.contains("circle")
        &&element[5].classList.contains("circle"))
        ){
            firstPlayerBoard.appendChild(winner);
            freeze(element);
        }
    
    else if( 
        (element[1].classList.contains("cross")
        &&element[5].classList.contains("cross")
        &&element[3].classList.contains("cross"))
        ){
            secondPlayerBoard.appendChild(winner);
            freeze(element);
        }
    
    else if(
        (element[7].classList.contains("circle")
        &&element[9].classList.contains("circle")
        &&element[11].classList.contains("circle"))
        ){
            firstPlayerBoard.appendChild(winner);
            freeze(element);
        }
        
    else if(    
        (element[7].classList.contains("cross")
        &&element[9].classList.contains("cross")
        &&element[11].classList.contains("cross"))
        ){
            secondPlayerBoard.appendChild(winner);
            freeze(element);
        }

    else if(
        (element[13].classList.contains("circle")
        &&element[15].classList.contains("circle")
        &&element[17].classList.contains("circle"))
        ){
            firstPlayerBoard.appendChild(winner);
            freeze(element);
        }
        
    else if(
        (element[13].classList.contains("cross")
        &&element[15].classList.contains("cross")
        &&element[17].classList.contains("cross"))
        ){
            secondPlayerBoard.appendChild(winner);
            freeze(element);
        }

    //column check
    else if(
        (element[1].classList.contains("circle")
        &&element[7].classList.contains("circle")
        &&element[13].classList.contains("circle"))
        ){
            firstPlayerBoard.appendChild(winner);
            freeze(element);
        }

    else if(
        (element[1].classList.contains("cross")
        &&element[7].classList.contains("cross")
        &&element[13].classList.contains("cross"))
        ){
            secondPlayerBoard.appendChild(winner);
            freeze(element);
        }

    else if(
        (element[3].classList.contains("circle")
        &&element[9].classList.contains("circle")
        &&element[15].classList.contains("circle"))
        ){
            firstPlayerBoard.appendChild(winner);
            freeze(element);
        }

    else if(
        (element[3].classList.contains("cross")
        &&element[9].classList.contains("cross")
        &&element[15].classList.contains("cross"))
        ){
            secondPlayerBoard.appendChild(winner);
            freeze(element);
        }

    else if(
        (element[5].classList.contains("circle")
        &&element[11].classList.contains("circle")
        &&element[17].classList.contains("circle"))
        ){
            firstPlayerBoard.appendChild(winner);
            freeze(element);
        }
        
    else if(
        (element[5].classList.contains("cross")
        &&element[11].classList.contains("cross")
        &&element[17].classList.contains("cross"))
        ){
            secondPlayerBoard.appendChild(winner);
            freeze(element);
        }
    
    //diagonal check

    else if(
        (element[1].classList.contains("circle")
        &&element[9].classList.contains("circle")
        &&element[17].classList.contains("circle"))
        ){
            firstPlayerBoard.appendChild(winner);
            freeze(element);
        }
    
    else if(
        (element[1].classList.contains("cross")
        &&element[9].classList.contains("cross")
        &&element[17].classList.contains("cross"))
        ){
            secondPlayerBoard.appendChild(winner);
            freeze(element);
        }

    else if(
        (element[5].classList.contains("circle")
        &&element[9].classList.contains("circle")
        &&element[13].classList.contains("circle"))
        ){
            firstPlayerBoard.appendChild(winner);
            freeze(element);
        }
    
    else if(
        (element[5].classList.contains("cross")
        &&element[9].classList.contains("cross")
        &&element[13].classList.contains("cross"))
        ){
            secondPlayerBoard.appendChild(winner);
            freeze(element);
        }
}

