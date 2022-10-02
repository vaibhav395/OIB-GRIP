const display1El = document.querySelector('.display1');
const display2El = document.querySelector('.display2');
const tempresultEl= document.querySelector('.temp-result');
const numbersEl = document.querySelectorAll('.number');
const operationEl = document.querySelectorAll('.operation');
const equalEl = document.querySelector('.equal');
const clearallEl = document.querySelector('.all_clear');
const clearLastEl = document.querySelector('.last_entity_clear');

let dis1Num = '';
let dis2Num = '';
let result = null;
let lastOperation = '';
let haveDot = false;

console.log(numbersEl);

numbersEl.forEach((number) => {
    number.addEventListener('click' , (e)=>{
    console.log(e.target.innerText);
    if(e.target.innerText==='.' && !haveDot){
        haveDot=true;
    }else if(e.target.innerText==='.' && haveDot)
    {
        return;
    }
    dis2Num = dis2Num +  e.target.innerText;
    console.log(dis2Num);
    display2El.innerText = dis2Num;
  })
});

operationEl.forEach((operation) => {
    operation.addEventListener('click' , (e)=>{
        if(!dis2Num) return;
        haveDot=false;
        const operationName=e.target.innerText;
        if(dis1Num && dis2Num && lastOperation)
        {
            mathOperation();
        }
        else{
            result = parseFloat(dis2Num);
        }
        clearVar(operationName);
        lastOperation = operationName;
        console.log(result);
    })
});

function clearVar(name = '')
{
    dis1Num += dis2Num + ' ' + name + ' ';
    display1El.innerText = dis1Num;
    display2El.innerText = '';
    dis2Num = '';
    tempresultEl.innerText = result; 
}

function mathOperation()
{
    if(lastOperation==='X')
    {
        result = (result) * parseFloat(dis2Num);
    }
    else if(lastOperation==='+')
    {
        result = (result) + parseFloat(dis2Num);
    }
    else if(lastOperation==='-')
    {
        result = (result) - parseFloat(dis2Num);
    }
    else if(lastOperation==='/')
    {
        result = (result) / parseFloat(dis2Num);
    }
    else if(lastOperation==='%')
    {
        result = (result) % parseFloat(dis2Num);
    }
}

equalEl.addEventListener('click' , (e)=>{
    if(!dis1Num || !dis2Num) return;
    haveDot=false;
    mathOperation();
    clearVar();
    display2El.innerText = result;
    tempresultEl.innerText = '';
    dis2Num = result;
    dis1Num = '';
})

clearallEl.addEventListener('click' , (e)=>{
    display1El.innerText='0';
    display2El.innerText='0';
    dis1Num='';
    dis2Num='';
    result='';
    tempresultEl.innerText='0';
})

clearLastEl.addEventListener('click' , (e)=>{
    display2El.innerText='';
    dis2Num=''; 
})