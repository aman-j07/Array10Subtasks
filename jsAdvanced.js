const details=[
    {id:1,name:'John',basicSal:8000,updatedSal:0},
    {id:2,name:'Mark',basicSal:9000,updatedSal:0}
  ];
  update();
  function update(){
    let ele=''
  for(i=0;i<details.length;i++){
    try{
    details[i].updatedSal=details[i].basicSal*1.10;
    }
    catch{
      document.getElementById("para").innerHTML="Salary of "+details[i].name+"cannot be calculated";
    }
  }
  tableDetails.innerHTML="<tr><th>Id</th><th>Name</th><th>Total Salary</th><th>Updated Salary</th></tr>"
  for(i=0;i<details.length;i++){
    ele+="<tr><td>"+details[i].id+"</td><td>"+details[i].name+"</td><td>"+details[i].basicSal+"</td><td>"+details[i].updatedSal+"</td></tr>";
  }
  tableDetails.innerHTML+=ele;
  }

  function add(){
    let flag=0;
    regexNum=/\D+/;
    var id=document.getElementById("inputId").value;
    var name=document.getElementById("inputName").value;
    var basicSal=document.getElementById("inputBasicSal").value;
    var tableDetails=document.getElementById("tableDetails");
    tableDetails.innerHTML='';
    document.getElementById("para2").innerHTML='';
    try{
        if(regexNum.test(basicSal)==true){
            flag=1;
        } throw "Updated Salary cannot be calculated because Basic salary entered is not a number"  
  }
    catch(err){
      document.getElementById("para2").innerHTML=err;
    }
  
//   else{
if(flag==0){
    document.getElementById("para2").innerHTML='';
     var detail={id:id,name:name,basicSal:basicSal};
     details.push(detail);}
    

    tableDetails.innerHTML="<tr><th>Id</th><th>Name</th><th>Total Salary</th></tr>"
    for(i=0;i<details.length;i++){
        tableDetails.innerHTML+="<tr><td>"+details[i].id+"</td><td>"+details[i].name+"</td><td>"+details[i].basicSal+"</td></tr>";
    }
    update();
    document.getElementById("inputId").value='';
    document.getElementById("inputName").value='';
    document.getElementById("inputBasicSal").value=''; 
// }
  }
// function add(){
//     var id=document.getElementById("inputId").value;
//     var name=document.getElementById("inputName").value;
//     var basicSal=document.getElementById("inputBasicSal").value;
//     var tableDetails=document.getElementById("tableDetails");
//     tableDetails.innerHTML='';

//     var detail={id:id,name:name,basicSal:basicSal};
//     details.push(detail);
//     populate();
//     update();

//     document.getElementById("inputId").value='';
//     document.getElementById("inputName").value='';
//     document.getElementById("inputBasicSal").value='';
// } 

function populate(){
let ele='';
tableDetails.innerHTML="<tr><th>Id</th><th>Name</th><th>Total Salary</th><th>Updated Salary</th></tr>"
for(i=0;i<details.length;i++){
    ele+="<tr><td>"+details[i].id+"</td><td>"+details[i].name+"</td><td>"+details[i].basicSal+"</td><td>"+details[i].updatedSal+"</td></tr>";
}
tableDetails.innerHTML+=ele;
}

function Delete(args){
    index=args.id;
    details.splice(index,1);
    populate();
}