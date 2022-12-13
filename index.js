var randomNumber1;
var randomNumber2;

function imgOne(){
    randomNumber1 = Math.floor(Math.random() * 6 + 1);

    var randomDiceImage = "dice" + randomNumber1 + ".png";

    var randomImageSource = "images/" + randomDiceImage;

    var image1 = document.querySelectorAll("img")[0].setAttribute("src" , randomImageSource);

    return image1, randomNumber1;

}

function imgTwo(){
    randomNumber2 = Math.floor(Math.random() * 6 + 1);

    var randomDiceImage2 = "dice" + randomNumber2 + ".png";

    var randomImageSource2 = "images/" + randomDiceImage2;

    var image2 = document.querySelectorAll("img")[1].setAttribute("src" , randomImageSource2);

    return image2, randomNumber2;
}

function buttonTextChange(){
    var change = document.getElementById("btn-click").innerHTML = "Again!!";

    return change;
}

function Change(){
    imgOne();
    imgTwo();
    buttonTextChange();

    if(randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML = "Player 1 Win 🚩";
    }else if (randomNumber2 > randomNumber1){
        document.querySelector("h1").innerHTML = "Player 2 Win 🚩";
    }else{
        document.querySelector("h1").innerHTML = "Equal Round 🏳️";
    };

    return;

    

}





