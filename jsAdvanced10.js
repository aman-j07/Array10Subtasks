const details=[];

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
        tableDetails.innerHTML+="<tr><td>"+details[i].id+"</td><td>"+details[i].name+"</td><td>"+details[i].basicSal+"</td><td><a href=''>Delete</a></td></tr>";
    }
  
}