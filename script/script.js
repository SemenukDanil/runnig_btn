var yesbtn = document.getElementById("yes_bt");

let jump = 50;

yesbtn.addEventListener("mouseover", button_run);
yesbtn.addEventListener("click", () => alert('Ты чо бегун? !'));


function button_run(event){

    let coords = yesbtn.getBoundingClientRect();

    let height = coords.bottom - coords.top;
    let weight = coords.right - coords.left;

    if(coords.left == 0 || coords.top == 0 || coords.left == document.documentElement.clientWidth-weight || coords.top == document.documentElement.clientHeight-height) {
        yesbtn.style.left = Math.random()*(document.documentElement.clientWidth-weight);
        yesbtn.style.top = Math.random()*(document.documentElement.clientHeight-height);
        return;
    }

    let btnCenterX = coords.left + weight/2;
    let btnCenterY = coords.top + height/2;

    let vector1X = btnCenterX - event.pageX;
    let vector1Y = btnCenterY - event.pageY;


    let vector1Length = Math.sqrt(vector1X**2 + vector1Y**2);
    console.log(vector1Length);

    let vector2X = vector1X * ((vector1Length+jump)/vector1Length);
    let vector2Y = vector1Y * ((vector1Length+jump)/vector1Length);

    let newX = vector2X + event.pageX - weight/2 ;
    let newY = vector2Y + event.pageY - height/2;

    if(newX < 0)
        newX = 0;
    if(newY < 0)
        newY = 0;
    if(newX > document.documentElement.clientWidth)
        newX = document.documentElement.clientWidth-weight;
    if(newY > document.documentElement.clientHeight)
        newY = document.documentElement.clientHeight-height;

    yesbtn.style.left = newX + 10;
    yesbtn.style.top = newY + 10;
} 

