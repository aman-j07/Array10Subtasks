var operation = "";
function number(args) {
  let num = args.id;
  let inputValue = document.getElementById("inputNumber");
  document.getElementById("inputNumber").value = inputValue.value + num;
}
function decimal(args){
  let flag;
  let inputValue = document.getElementById("inputNumber");
  let asc=inputValue.value.charCodeAt(inputValue.value.length-1)
  for(i=0;i<inputValue.value.length;i++){
    if(inputValue.value.charCodeAt(i)==46){
       flag=1;
    }
  }
  if(flag==1){
    return;
  }
  else{
  let dec = args.id;
  document.getElementById("inputNumber").value = inputValue.value + dec;
}}
function number(args) {
  num = args.id;
  let inputValue = document.getElementById("inputNumber");
  document.getElementById("inputNumber").value = inputValue.value + num;
}
function operations(args) {
  operationId = args.id;
  if (operationId == "add") {
    let inputValue = document.getElementById("inputNumber");
    document.getElementById("inputNumber").value = inputValue.value + "+";
  }
  if (operationId == "subtract") {
    let inputValue = document.getElementById("inputNumber");
    document.getElementById("inputNumber").value = inputValue.value + "-";
  }
  if (operationId == "divide") {
    let inputValue = document.getElementById("inputNumber");
    document.getElementById("inputNumber").value = inputValue.value + "/";
  }
  if (operationId == "multiply") {
    let inputValue = document.getElementById("inputNumber");
    document.getElementById("inputNumber").value = inputValue.value + "*";
  }
}

function reset(){
    let inputValue = document.getElementById("inputNumber");
    document.getElementById("inputNumber").value = '';
}
 function calculate(){
    let inputValue = document.getElementById("inputNumber");
    let answer=eval(inputValue.value);
    if(answer=="Infinity"){
      inputValue.value="Error";  
    }
    else{
    inputValue.value=answer;
    }
 }
//  comment