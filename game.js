let boxes =document.querySelectorAll(".box");
let resetButton=document.querySelector("#reset-button");
let turn =  true //player x,player o

const winPattern= [ ["0,1,2"],
["0,3,6"],
["0,4,8"],
["1,4,7"],
["2,5,8"],
["2,4,6"],
["3,4,5"],
["6,7,8"]

];
boxes.forEach(box =>{
    box.addEventListener("click",()=>
    {
        console.log("box was click");
            if (turno) {
                //player o
                box.innerText="o";
                turno=false;
            }else{
                //player x
                box.innerText="x";
                turno = true;
            }

        box.Disabled=true;
    });

    const checkWinner =()=>{
        for (pattern of winPatterns) {
            console.log(pattern [0],pattern[1],pattern[2]);

        }
    }
});
