let input = document.getElementById("input-text")
let calculate = (number)=>{
 input.value = input.value + number;
}

let addNumber= ()=>{
    input.answer.value += input.value;
}
	
let res = ()=>{
   
    try{
        input.value = eval(input.value)
    }
    catch(error){
       alert('Enter The valid input')
    }
}

let clr = ()=>{
    input.value = " ";
}

let del = ()=>{
    input.value = input.value.slice(0,-1);
}



 

