let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1/20;

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if(contrastToggle){
        document.body.classList += " dark-mode"
    }
else{
    document.body.classList.remove("dark-mode")
}
}

function contact(event) {
    event.preventDefault();
    emailjs 
    .sendForm(
        ''
    )
    //re-watch module 5 1.11 up to 6:40 to finish this
}

function toggleModal(){
    
    
    if (isModalOpen){
        isModalOpen = false;
        return document.body.classList.remove("modal--open")
    }
     isModalOpen = !isModalOpen;
    document.body.classList +=" modal--open";
}
function moveBackground(event){
    const petals= document.querySelectorAll(".cherry")
    let x = event.clientX * scaleFactor;
    let y = event.clientY * scaleFactor;
    

    for(let i =0; i< petals.length; ++i){
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        petals[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }
}
