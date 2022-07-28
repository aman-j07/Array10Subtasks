var result = 0;
var result2 = "";
var operation = "";
var sub = 0;
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
    inputValue.value=answer;

 }