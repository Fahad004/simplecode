// Muhammad Fahad    JavaScript comment
// Project 3
// Due Date: Oct 19
// Submission Date: Oct 19

function selectBalls( ) {
    var dg = new Lotto(30, 5);
    dg.selectBalls( );
    for(let i = 1; i <= 5; i++) {
        let imgLocation = i.valueOf( );
        let imgNum = dg.getBall(i);
        let image = document.getElementById(imgLocation);
        let pathName = "lottoballs/" + imgNum + ".gif";
        image.src = pathName;
    }
}

function init( ) {
    let btn = document.getElementById("btn");
    btn.addEventListener("click", selectBalls);
}

window.addEventListener("load", init);