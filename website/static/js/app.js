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





