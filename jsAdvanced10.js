const details=[
  {id:1,name:'John',basicSal:8000,updatedSal:0},
  {id:2,name:'Mark',basicSal:9000,updatedSal:0},
  {id:3,name:'Yash',basicSal:7000,updatedSal:0}
];
update();
function update(){
for(i=0;i<details.length;i++){
  try{
  details[i].updatedSal=parseInt(details[i].basicSal*1.10);
  }
  catch{
    document.getElementById("para").innerHTML="Salary of "+details[i].name+"cannot be calculated";
  }
}
}
// class details1{
//     constructor(id,name,basicSal){
//       this.id=id;
//       this.name=name;
//       this.basicSal=basicSal;
//     }

// }
// let obj1=new details1(1,'John',8000);
// console.log(obj1)
// text='"employees":['+'{"id":"1","name":"John","basicSal":"8000"},'+'{"id":"2","name":"Mark","basicSal":"9000"},'+'{"id":"3","name":"Yash","basicSal":"7000"}]';

// var tableDetails=document.getElementById("tableDetails");
// tableDetails.innerHTML="<tr><th>Id</th><th>Name</th><th>Total Salary</th><th>Action</th></tr>"
// tableDetails.innerHTML+="<tr><td>"+objDetails.id+"</td><td>"+objDetails.name+"</td><td>"+objDetails.basicSal+"</td><td><a href=''>Delete</a></td></tr>";

// const details2=JSON.parse(text);
// console.log(details2[2])


// var tableDetails=document.getElementById("tableDetails");
// tableDetails.innerHTML='';
// tableDetails.innerHTML="<tr><th>Id</th><th>Name</th><th>Total Salary</th><th>Action</th></tr>"
// tableDetails.innerHTML+="<tr><td>"+obj1.id+"</td><td>"+obj1.name+"</td><td>"+obj1.basicSal+"</td><td><a href=''>Delete</a></td></tr>";

tableDetails.innerHTML+="<tr><th>Id</th><th>Name</th><th>Total Salary</th><th>Updated Salary</th></tr>"
for(i=0;i<details.length;i++){
    tableDetails.innerHTML+="<tr><td>"+details[i].id+"</td><td>"+details[i].name+"</td><td>"+details[i].basicSal+"</td><td>"+details[i].updatedSal+"</td></tr>";
}
function add(){
    var id=document.getElementById("inputId").value;
    var name=document.getElementById("inputName").value;
    var basicSal=document.getElementById("inputBasicSal").value;
    var tableDetails=document.getElementById("tableDetails");
    tableDetails.innerHTML='';

    var detail={id:id,name:name,basicSal:basicSal};
    details.push(detail);
    

    tableDetails.innerHTML="<tr><th>Id</th><th>Name</th><th>Total Salary</th><th>Action</th></tr>"
    for(i=0;i<details.length;i++){
        tableDetails.innerHTML+="<tr><td>"+details[i].id+"</td><td>"+details[i].name+"</td><td>"+details[i].basicSal+"</td></tr>";
    }
    update();
    document.getElementById("inputId").value='';
    document.getElementById("inputName").value='';
    document.getElementById("inputBasicSal").value=''; 
}
