const modeButton = document.getElementById("display-toggle-button")

modeButton.onclick = function(){
    modeButton.classList.toggle("move-button-right");
    document.querySelector("header").classList.toggle("header-dark-mode");
    document.querySelector("body").classList.toggle("background-dark-mode");

    let largeCards = document.querySelectorAll(".big-card");
    let smallCards = document.querySelectorAll(".small-card");

    let heading = document.querySelector("h1");
    heading.classList.toggle("font-white");

    let button = document.querySelector(".display-toggle-box");
    button.classList.toggle("button-dark-background");
    console.log(button)

    for(let i = 0 ; i < largeCards.length; i++){
        let card = largeCards[i];
        setTimeout(function(){
            card.classList.toggle("big-card-dark")
        }, i * 100)

    }
    for(let i = 0 ; i < smallCards.length; i++){
        let card = smallCards[i];
        setTimeout(function(){
            card.classList.toggle("big-card-dark")
        }, i * 50)

    }

    let fontColors = ["h2", "h3", "p", ".medium-size-number"]

    let secondList = ["h4", ".followers", ".hashtags"]

    for(let i = fontColors.length; i >=0 ; i--){
        let elementToChange = fontColors[i];
        let elementList = document.querySelectorAll(elementToChange);
        for(let j = 0; j < elementList.length; j++){
            let element = elementList[j];
            setTimeout(() =>{
                element.classList.toggle("font-white")
            }, i * 50)
        }
    }

    for(let i = secondList.length; i >=0 ; i--){
        let elementToChange = secondList[i];
        let elementList = document.querySelectorAll(elementToChange);
        for(let j = 0; j < elementList.length; j++){
            let element = elementList[j];
            setTimeout(() =>{
                element.classList.toggle("font-grey")
            }, i * 50)
        }
    }


}