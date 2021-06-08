let firstNumber=document.getElementById("one");
let secondNumber=document.getElementById("two");
let btnClick=document.getElementById("button");
let result =document.getElementById("result");


btnClick.addEventListener("click",doTask);


function doTask(e){
    if(!firstNumber.value || !secondNumber.value){
        alert("invalid input");
        return;
    }
    const val1=Number(firstNumber.value);
    const val2=Number(secondNumber.value);
    const operation=e.target.innerText;
    console.log(operation);

    switch (operation) {
        case "Add":ans(val1+val2);
            break;
        case "Sub":ans(val1-val2);
            break;
        case "Mul":ans(val1*val2);
            break;
        case "Div":ans(val1/val2);
            break;
    
        default:
            alert("wrong answer");
            break;
    }
}
function ans(r){
    result.innerText=r;
}