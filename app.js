let isModalOpen = false;
let contrastToggle = false;

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

