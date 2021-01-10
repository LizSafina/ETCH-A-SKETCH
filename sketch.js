var holder = document.getElementById('holder');
var startBtn = document.getElementById('start');
let answer;


window.addEventListener('load', setDefaultGrid);
startBtn.addEventListener('click',changeGrid);

//As the peage loads set the grid to default size 16x16

function setDefaultGrid(){
    setGridSize(16);
    createGrid(16);
}

//Create requested ammount of divs
function createGrid(size){
for(let i=0; i<size*size;i++){
    let div =document.createElement('div');
    div.classList.add("cell");
    div.addEventListener('mouseover',changeColor);
    holder.appendChild(div);
    
}
    }  
    //organize them in a grid
    function setGridSize(answer){
        holder.style.gridTemplateColumns = `repeat(${answer}, 1fr)`;
    }


    //Change the size of the grid

function changeGrid(){
    answer = parseInt(prompt("Pick the size from 1 to 100"));

    if(answer < 1|| answer >100 || Number.isNaN(answer)){
        alert("Enter a correct number");
        changeGrid();
    }else{
        resetGrid();
        setGridSize(answer);
        createGrid(answer);
    }
}


//Reset the grid

function resetGrid(){
    let gridArray = Array.from(holder.childNodes);
    gridArray.forEach((el) =>{
        holder.removeChild(el);
    });
}

//function that generates random color when hovered over
function changeColor(e){
    let randomR = Math.round(Math.random() * 256);
    let randomG = Math.round(Math.random()* 256);
    let randomB = Math.round(Math.random()* 256);
    e.target.style.background = `rgb(${randomR}, ${randomG}, ${randomB})`;
}


