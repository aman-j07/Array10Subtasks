const details=[];

function add(){
    var id=document.getElementById("inputId").value;
    var name=document.getElementById("inputName").value;
    var basicSal=document.getElementById("inputBasicSal").value;
    var tableDetails=document.getElementById("tableDetails");
    tableDetails.innerHTML='';

    var detail={id:id,name:name,basicSal:basicSal};
    details.push(detail);

    populate();
    document.getElementById("inputId").value='';
    document.getElementById("inputName").value='';
    document.getElementById("inputBasicSal").value='';
    console.log(details)
} 
function populate(){
    let ele='';
    tableDetails.innerHTML="<tr><th>Id</th><th>Name</th><th>Total Salary</th><th>Action</th></tr>"
    for(i=0;i<details.length;i++){
        ele+="<tr><td>"+details[i].id+"</td><td>"+details[i].name+"</td><td>"+details[i].basicSal+"</td><td><a onclick='Delete(this)' id='"+i+"'>Delete</a></td></tr>";
    }
    tableDetails.innerHTML+=ele;
}
function Delete(args){
    index=args.id;
    console.log(details)
    details.splice(index,1);
    console.log(details)
    populate();

}