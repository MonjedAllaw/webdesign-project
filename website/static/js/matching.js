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



const grid_div= document.querySelector("#grid");
let flips=0;
let found=0;
const found_span= document.querySelector("#found_nb");
const flips_span= document.querySelector("#flips_nb");
const action_message =  document.querySelector(".action_message");
let card_chosen=[];
let cards_ids=[];
const cards_won =[];

const cardArray=[
    {
    name: 'cheese',
    img: 'static/imgs/cheese.png'
    },
    {
    name: 'cherry',
    img: 'static/imgs/cherry.png'
    },
    {
    name: 'fries',
    img: 'static/imgs/fries.png'
    },
    {
    name: 'hamburger',
    img: 'static/imgs/hamburger.png'
    },
    {
    name: 'pizza',
    img: 'static/imgs/pizza.png'
    },
    {
    name: 'strawberry',
    img: 'static/imgs/strawberry.png'
    },
    {
    name: 'cheese',
    img: 'static/imgs/cheese.png'
    },
    {
    name: 'cherry',
    img: 'static/imgs/cherry.png'
    },
    {
    name: 'fries',
    img: 'static/imgs/fries.png'
    },
    {
    name: 'hamburger',
    img: 'static/imgs/hamburger.png'
    },
    {
    name: 'pizza',
    img: 'static/imgs/pizza.png'
    },
    {
    name: 'strawberry',
    img: 'static/imgs/strawberry.png'
    },
]

cardArray.sort(()=>0.5-Math.random())

function display_board(){
    for(let i=0; i<cardArray.length;i++){
        const card = document.createElement('img');
        card.setAttribute('src','static/imgs/questionMark1.png');
        card.setAttribute('data-id',i);
        card.addEventListener('click',flipCard);

        grid_div.appendChild(card);

    }

}
display_board();

function flipCard() {
    action_message.innerHTML ="click two cards to match";
    flips++;
    flips_span.innerHTML=flips;
    let card_id = this.getAttribute('data-id');
    card_chosen.push( cardArray[card_id].name);
    cards_ids.push(card_id);
    this.setAttribute('src',cardArray[card_id].img);
    if(card_chosen.length === 2){
        setTimeout(check_match, 500)
    }




}


function check_match(){
    const all_cards = document.querySelectorAll('#grid > img');
    const idOne = cards_ids[0];
    const idTwo = cards_ids[1];

    if(idOne == idTwo){
        action_message.innerHTML ="you clicked the same card";
        flips=flips-1;
         flips_span.innerHTML=flips;
        all_cards[idOne].setAttribute('src','static/imgs/questionMark1.png');


    }else if(card_chosen[0] == card_chosen[1]){
        all_cards[idOne].setAttribute('src','static/imgs/white.jpg');
        all_cards[idTwo].setAttribute('src','static/imgs/white.jpg');
        all_cards[idOne].removeEventListener('click',flipCard);
         all_cards[idTwo].removeEventListener('click',flipCard);
         cards_won.push(card_chosen);


    }else{
         all_cards[idOne].setAttribute('src','static/imgs/questionMark1.png');
        all_cards[idTwo].setAttribute('src','static/imgs/questionMark1.png');


    }
    found_span.textContent = (cards_won.length)*2;
    card_chosen=[];
    cards_ids=[];
    if(cards_won.length == (cardArray.length)/2){
        action_message.innerHTML='Congratulation you found them all';
       for(let i=0; i<cardArray.length;i++){

        all_cards[i].setAttribute('src','static/imgs/fireworks3.png');


    }
    }



}




