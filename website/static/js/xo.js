const toggleButton= document.getElementsByClassName('toggle-button')[0];
const navLinks= document.getElementsByClassName('nav-links')[0];

toggleButton.addEventListener('click',()=>{
    console.log("hi");
    navLinks.classList.toggle('active');
}
)
let turn = 0;
let x_wins=0
let o_wins=0
const choices=[];

const square_divs = document.querySelectorAll('.xo_square');


square_divs.forEach(div => {
    div.addEventListener('click',()=>{
      let index = div.getAttribute('data-index');
      if(div.innerHTML == ""){
         if(turn%2==0){
            div.innerHTML="X";
            choices[index]='x';

         }else{
            div.innerHTML="O";
            choices[index]='o';
        }
        turn++;
        check_win();

      }



    })


}
)
function check_win(){
   
}