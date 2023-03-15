/* Opgave 1*/

let myBall=document.getElementById('ballOne');
let myBuhButton=document.getElementById('buhOneButton');

myBuhButton.addEventListener('click', () => {
    myBall.classList.toggle('active')
});


/*opgave 2*/

let myBalls=document.getElementsByClassName('balls');
let myBuhTwoButton=document.getElementById('buhTwoButton');

myBuhTwoButton.addEventListener('click', () => {
    for(const ball of myBalls){
        ball.classList.toggle('active')
    }
});

/*opgave 3*/
let hardBall = document.querySelectorAll('.hardBalls');
let btn = document.getElementById('buhThreeButton')

btn.addEventListener("click", () => {
    for(const ball of hardBall){
        ball.classList.toggle("active")
        btn.disabled=true;
    }
    setTimeout(() => {
        // for(const ball of hardBall){
        //     ball.classList.toggle("active")
        // }
        btn.disabled=false;
    }, 3100)
});



