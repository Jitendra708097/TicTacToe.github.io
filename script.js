let arr = new Array(9).fill("E");
 let p1=0,p2=0;
let checkwinner = [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],
[0,3,6],[1,4,7],[2,5,8]];

function cwinner()
{
    for(let [index0,index1,index2] of checkwinner)
    {
        if(arr[index1] != 'E' && arr[index0] === arr[index1] && arr[index1] === arr[index2])
        {
            return 1;
        }
    }

    return 0;
}

let turn = 'O',count=0;
const Box = document.querySelector('.Box');

const boardl = function(event){
    const element = event.target;
    if(turn === 'O' && arr[element.id] === "E")
    {
         element.innerHTML = "O";
         turn = 'X';
         arr[element.id] = 'O';
         element.style.color = "purple";
         element.style.backgroundColor =" #aed6dc";
         if(cwinner())
         {
            document.getElementById('result').innerHTML = "Player O Is Winner";
            document.getElementById('player1').innerText = `Player01:${++p1}`;
            Box.removeEventListener('click',boardl);
            return;
         }
         count++;
    }
    else if(arr[element.id] === "E")
    {
        element.innerHTML = "X";
        arr[element.id] = 'X';
         turn = 'O';
         element.style.color = "red";
         element.style.backgroundColor = "#ff9a8d";
         if(cwinner())
        {
           document.getElementById('result').innerHTML = "Player X Is Winner";
           Box.removeEventListener('click',boardl);
           document.getElementById('player2').innerText = `Player02:${++p2}`;
           return;
        }  
        count++;      
    }
    if(count === 9)
    {
        document.getElementById('result').innerHTML = "Match Is Draw";
    }
}

Box.addEventListener('click',boardl);


// restart game
const first = document.getElementById('first');
first.addEventListener('click',()=>{
    turn = 'O';
    const one = document.getElementsByClassName('one');
    Array.from(one).forEach((element)=>{
        element.innerHTML = "";
        element.style.backgroundColor = "";
    });

    document.getElementById('result').innerHTML = "";
    count=0;
    
    p1=0,p2=0;
    document.getElementById('player2').innerText = "Player02:";
    document.getElementById('player1').innerText = "Player01:"

    arr = new Array(9).fill("E");
    Box.addEventListener('click',boardl);
    // event.target.id
})

// continue button
const second = document.getElementById('second');
second.addEventListener('click',()=>{
    turn = 'O';
    const one = document.getElementsByClassName('one');
    Array.from(one).forEach((element)=>{
        element.innerHTML = "";
        element.style.backgroundColor = "";
    });
     
    document.getElementById('player1').innerText =  `Player01:${p1}`;
    document.getElementById('player2').innerText =  `Player02:${p2}`;
    document.getElementById('result').innerHTML = "";
    count=0;

    arr = new Array(9).fill("E");
    Box.addEventListener('click',boardl);
    // event.target.id
})
