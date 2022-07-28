const details=[];
class details1{
    constructor(id,name,basicSal){
      this.id=id;
      this.name=name;
      this.basicSal=basicSal;
    }
}
// let obj1=new details1(1,'John',8000);
// console.log(obj1)
text='{"id":"1","name":"John","basicSal":"8000"}';
const obj2=JSON.parse(text);


// var tableDetails=document.getElementById("tableDetails");
// tableDetails.innerHTML='';
// tableDetails.innerHTML="<tr><th>Id</th><th>Name</th><th>Total Salary</th><th>Action</th></tr>"
// tableDetails.innerHTML+="<tr><td>"+obj1.id+"</td><td>"+obj1.name+"</td><td>"+obj1.basicSal+"</td><td><a href=''>Delete</a></td></tr>";

var tableDetails=document.getElementById("tableDetails");
tableDetails.innerHTML='';
tableDetails.innerHTML="<tr><th>Id</th><th>Name</th><th>Total Salary</th><th>Action</th></tr>"
tableDetails.innerHTML+="<tr><td>"+obj2.id+"</td><td>"+obj2.name+"</td><td>"+obj2.basicSal+"</td><td><a href=''>Delete</a></td></tr>";

 
// function add(){
//     var id=document.getElementById("inputId").value;
//     var name=document.getElementById("inputName").value;
//     var basicSal=document.getElementById("inputBasicSal").value;
//     var tableDetails=document.getElementById("tableDetails");
//     tableDetails.innerHTML='';

//     var detail={id:id,name:name,basicSal:basicSal};
    

//     tableDetails.innerHTML="<tr><th>Id</th><th>Name</th><th>Total Salary</th><th>Action</th></tr>"
//     for(i=0;i<details.length;i++){
//         tableDetails.innerHTML+="<tr><td>"+details[i].id+"</td><td>"+details[i].name+"</td><td>"+details[i].basicSal+"</td><td><a href=''>Delete</a></td></tr>";
//     }
  
// }
// comment