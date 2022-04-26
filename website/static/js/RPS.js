const toggleButton= document.getElementsByClassName('toggle-button')[0];
const navLinks= document.getElementsByClassName('nav-links')[0];

toggleButton.addEventListener('click',()=>{
    console.log("hi");
    navLinks.classList.toggle('active');
}
)

let user_score=0;
let computer_score=0;

const  user_score_span = document.getElementById("user_score");
const  computer_score_span = document.getElementById("computer_score");
const result_p =document.querySelector(".result >p");
const computer_choice_p = document.querySelector(".computer_choice >p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");



function generate_choice(){
    const choices = ["r","p","s"];
    const ran = Math.floor(Math.random()*3);
    return choices[ran];

}
function to_words (char){
    if (char === "r")
        return "Rock";
    if (char === "p")
        return "Paper";
    return "Scissors";

}
function win (user_choice, computer_choice){
    user_score ++;
    user_score_span.innerHTML= user_score;

    result_p.innerHTML =`${to_words(user_choice)} beats ${to_words(computer_choice) }. You Win!!`;

}
function loose (user_choice, computer_choice){
    computer_score++;
    computer_score_span.innerHTML= computer_score;
    result_p.innerHTML =`${to_words(computer_choice)} beats ${to_words (user_choice)}. You loose!!`;


}
function draw (user_choice, computer_choice){
    result_p.innerHTML =`${to_words(computer_choice)} equals ${to_words (user_choice)}. its a draw !!`;
}

function rps_play(user_choice){
       const computer_choice = generate_choice();
       computer_choice_p.innerHTML= "computer choice: "+ to_words(computer_choice);
       switch(user_choice+computer_choice){
            case "rr":
            case "pp":
            case "ss":
                draw(user_choice, computer_choice);
                break;

            case "rs":
            case "pr":
            case "sp":
                win(user_choice, computer_choice);
                break;

            case "sr":
            case "rp":
            case "ps":
                loose(user_choice, computer_choice);
                break;
            default:
                console.log("switch error");
       }


}

rock_div.addEventListener('click', function(){
    rps_play("r");
})
paper_div.addEventListener('click', function(){
    rps_play("p");
})
scissors_div.addEventListener('click', function(){
    rps_play("s");
})
