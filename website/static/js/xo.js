const toggleButton= document.getElementsByClassName('toggle-button')[0];
const navLinks= document.getElementsByClassName('nav-links')[0];

const games_button=document.querySelector(".games_button");
const games_links=document.querySelector(".games_links");

games_button.addEventListener('click',()=>{
    games_links.classList.toggle('active');
}
)
toggleButton.addEventListener('click',()=>{
    navLinks.classList.toggle('active');
}
)

const play_button = document.getElementById('play_button');
play_button.addEventListener('click',start_game);
const x_span= document.querySelector("#x_score");
const o_span= document.querySelector("#o_score");
const result_p= document.querySelector(".result >p");


let turn = false;
let counter;
let x_wins=0
let o_wins=0
const win_combinations=[
[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]

];

const square_divs = document.querySelectorAll('.xo_square');
start_game();
function start_game(){
    counter=0;
    result_p.innerHTML="Lets play";
    square_divs.forEach(square => {
    square.innerHTML = "";
    square.addEventListener('click',choose,{once:true});
})


}



function choose(e){
    const square=e.target;
    const current = turn?"O":"X";
    square.innerHTML=current;
    turn =!turn;
    counter ++;
    if(check_win(current)){
        end_round(current);
    }

    else if(counter == 9)
        result_p.innerHTML="THIS ROUND IS A DRAW";

}
function check_win(current){
    return win_combinations.some(combination=>{
        return combination.every(index=>{
            return square_divs[index].innerHTML==current;
     })
    }
    )

}

function end_round(current){
    square_divs.forEach(square=>{
    square.removeEventListener('click',choose);
    }
    )
    if (current=="X"){
        x_wins++;
        x_span.innerHTML = x_wins;
        result_p.innerHTML="X WINS THIS ROUND";

    }else{
        o_wins++;
         o_span.innerHTML = o_wins;
         result_p.innerHTML="O WINS THIS ROUND";

    }

}



