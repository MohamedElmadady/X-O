let turn = "x"
let title = document.querySelector(".title")
let squares = []

function end(num1 , num2 , num3){
        title.innerHTML = squares[num1] + " Winner"
        document.getElementById("item" + num1).style.background ="black"
        document.getElementById("item" + num2).style.background ="black"
        document.getElementById("item" + num3).style.background ="black"
        setInterval(function(){title.innerHTML += "." },1000)
        setTimeout(function(){location.reload()},3500)
        turn="none"
}


function winner() {
    for(let i = 1 ; i <10 ; i++){
        squares[i] =document.getElementById("item" + i).innerHTML
        
    }
    if (squares[1]== squares[2] && squares[2]== squares[3] && squares[1] != "" ){

        end(1,2,3)
    }
    if (squares[4]== squares[5] && squares[5]== squares[6] && squares[4] != "" ){
        end(4,5,6)
    }
    if (squares[7]== squares[8] && squares[8]== squares[9] && squares[7] != "" ){
        
        end(7,8,9)
    }
    if (squares[4]== squares[1] && squares[1]== squares[7] && squares[4] != "" ){
        
        end(4, 1, 7)
    }
    if (squares[2]== squares[5] && squares[5]== squares[8] && squares[2] != "" ){
        
        end(2, 5,8)
    }
    if (squares[3]== squares[6] && squares[6]== squares[9] && squares[3] != "" ){
        
        end(3,6,9)
    }
    if (squares[3]== squares[5] && squares[5]== squares[7] && squares[3] != "" ){
        
        end(3,5,7)
    }
    if (squares[1]== squares[5] && squares[5]== squares[9] && squares[1] != "" ){
        
        end(1,5,9)
    }
    else if( squares[1] != "" && 
        squares[2] != "" && 
        squares[3] != "" && 
        squares[4] != "" && 
        squares[5] != "" && 
        squares[6] != "" && 
        squares[7] != "" && 
        squares[8] != "" && 
        squares[9] != "" 
    ){
        title.innerHTML ="Draw" 
        setInterval(function(){title.innerHTML +="."}, 1000)
        setTimeout(function(){location.reload()},3500)
    }
}
function game(id) {
    
    if (turn === "x" && document.getElementById(id).innerHTML == "" ){
        document.getElementById(id).innerHTML="X"
        turn = "o"
        title.innerHTML="O"
    }else if (turn === "o" && document.getElementById(id).innerHTML == "" ){
        document.getElementById(id).innerHTML="O"
        turn="x"
        title.innerHTML="X"
    };
    winner();
}

