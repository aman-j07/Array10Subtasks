var details=[
    {company:"Samsung",model:"Galaxy",memory:64,price:15000,quantity:20,rating:''},
    {company:"Nokia",model:"S730",memory:128,price:22000,quantity:15,rating:''},
    {company:"Xiaomi",model:"Note",memory:32,price:12000,quantity:21,rating:''},
    {company:"Motorola",model:"G10",memory:32,price:15000,quantity:13,rating:''},
    {company:"Apple",model:"S12",memory:64,price:25000,quantity:18,rating:''}
]
arrBill=[]
detailscopy=[];
for(i=0;i<details.length;i++){
    detailscopy.push(details[i]);
}
console.log(detailscopy)
const arr=[];
var total=0;
var c=0;
// var ele="";
populate();
createSelect();



optionsel=document.getElementById("heads");
searched=document.getElementById("search");
tablesearch=document.getElementById("tablesearch");

function createSelect(){
  ele="";
    for(i=0;i<details.length;i++){
   ele +="<option>"+details[i].company+details[i].model+"</option>" 
}
document.getElementById("billSelect").innerHTML=ele;
document.getElementById("inventorySelect").innerHTML=ele;
document.getElementById("ratingProduct").innerHTML=ele;
}

function populate(){
list=document.getElementById("list");
list.innerHTML="";
list.innerHTML="<tr><th>Company</th><th>Model</th><th>Memory(GB)</th><th>Price(Rs)</th><th>Quantity</th><th>Rating</th><th>Action</th></tr>";
text=""
for(i=0;i<details.length;i++){
    j=i+1;
    text+="<tr id='"+j+"'><td>"+details[i].company+"</td><td>"+details[i].model+"</td><td>"+details[i].memory+"</td><td>"+details[i].price+"</td><td>"+details[i].quantity+"</td><td>"+details[i].rating+"</td><td><input type='checkbox' id='toBeDeleted' onclick='selected(this)'></td></tr>";
}
list.innerHTML+=text;
}


function search(){
index=optionsel.selectedIndex;
tablesearch.innerHTML=""
tablesearch.innerHTML+="<table id='table2'><tr><th>Company</th><th>Model</th><th>Memory(GB)</th><th>Price(Rs)</th></table>"
table2=document.getElementById("table2");
for(i=0;i<details.length;i++){
if(index==0 && searched.value.toLowerCase()==details[i].company.toLowerCase()){
    table2.innerHTML+="<tr><td>"+details[i].company+"</td><td>"+details[i].model+"</td><td>"+details[i].memory+"</td><td>"+details[i].price+"</td></tr>";
}
else if(index==1 && searched.value.toLowerCase()==details[i].model.toLowerCase()){
    table2.innerHTML+="<tr><td>"+details[i].company+"</td><td>"+details[i].model+"</td><td>"+details[i].memory+"</td><td>"+details[i].price+"</td></tr>";
}
else if(index==2 && searched.value==details[i].memory){
    table2.innerHTML+="<tr><td>"+details[i].company+"</td><td>"+details[i].model+"</td><td>"+details[i].memory+"</td><td>"+details[i].price+"</td></tr>";
}
else if(index==3 && searched.value==details[i].price){
    table2.innerHTML+="<tr><td>"+details[i].company+"</td><td>"+details[i].model+"</td><td>"+details[i].memory+"</td><td>"+details[i].price+"</td></tr>";
}
}
}




function sorting(){
    for(i=0;i<arrBill.length;i++){
        billtable.innerHTML="<tr><td>"+arrBill[i].company+arrBill[i].model+"</td><td>"+arrBill[i].quantity+"</td><td>"+arrBill[i].amount+"</td></tr>"
         }
    sort=document.getElementById("sort");
    indexSort=sort.selectedIndex;
    optionsel2=document.getElementById("heads2");
    index=optionsel2.selectedIndex;
    if(indexSort==1){
        if(index==1){
            detailscopy.sort((a,b)=>{
            x=a.company.toLowerCase();
            y=b.company.toLowerCase();
            if(x>y){return 1;}
            if(x<y){return -1;}
            return 0;});
        }
        if(index==2){
            detailscopy.sort((a,b)=>{
            x=a.model.toLowerCase();
            y=b.model.toLowerCase();
            if(x>y){return 1;}
            if(x<y){return -1;}
            return 0;});
        }
        if(index==3){
            detailscopy.sort((a,b)=>{return a.memory - b.memory});
        }
        if(index==4){
            detailscopy.sort((a,b)=>{return a.price - b.price});
    }
    }

    if(indexSort==2){
        if(index==1){
            detailscopy.sort((a,b)=>{
            x=a.company.toLowerCase();
            y=b.company.toLowerCase();
            if(x<y){return 1;}
            if(x>y){return -1;}
            return 0;});
        }
        if(index==2){
            detailscopy.slice(0,details.length);
            detailscopy.sort((a,b)=>{
            x=a.model.toLowerCase();
            y=b.model.toLowerCase();
            if(x<y){return 1;}
            if(x>y){return -1;}
            return 0;});
        }
        if(index==3){
            detailscopy.slice(0,details.length);
            detailscopy.sort((a,b)=>{return b.memory - a.memory});
        }
        if(index==4){
           detailscopy.slice(0,details.length);
            detailscopy.sort((a,b)=>{return b.price - a.price});
    }
}
list=document.getElementById("list");
list.innerHTML="";
list.innerHTML="<tr><th>Company</th><th>Model</th><th>Memory(GB)</th><th>Price(Rs)</th><th>Quantity</th><th>Rating</th><th>Action</th></tr>";
text=""
for(i=0;i<detailscopy.length;i++){
    
    text+="<tr><td>"+detailscopy[i].company+"</td><td>"+detailscopy[i].model+"</td><td>"+detailscopy[i].memory+"</td><td>"+detailscopy[i].price+"</td><td>"+detailscopy[i].quantity+"</td><td>"+detailscopy[i].rating+"</td><td><input type='checkbox' id='toBeDeleted' onclick='selected(this)'></td></tr>";
}
list.innerHTML+=text;
// populate();
}


function AddProduct(){
 add={company:document.getElementById("addCompany").value,model:document.getElementById("addModel").value,memory:document.getElementById("addMemory").value,price:document.getElementById("addPrice").value,quantity:0,rating:""};
 details.splice(2,0,add);
 document.getElementById("addCompany").value=document.getElementById("addModel").value=document.getElementById("addMemory").value=document.getElementById("addPrice").value=""
 populate();
 createSelect();
}


function selected(args){
    tr=args.parentNode.parentNode;
   let index=tr.rowIndex;
    arr.push(details[index-1].company);
}



function deletethis(){
for(i=0;i<arr.length;i++){
    for(j=0;j<details.length;j++){
      if(arr[i]==details[j].company){
        details.splice(j,1);
      }
    }
}
console.log(details)
populate();
createSelect();
arr.splice(0,arr.length)
}


function addToBill(){
    var flag=false;
    document.getElementById("message").innerHTML="";
    opt=document.getElementById("billSelect");
    let index=opt.selectedIndex;
    console.log("index=",index)
    let quantity=parseInt(document.getElementById("productQuantity").value);
    if(quantity<=details[index].quantity){
       for(i=0;i<arrBill.length;i++){
         if(details[index].company==arrBill[i].company)
        {
            flag=true;
          arrBill[i].quantity+=parseInt(quantity);
          arrBill[i].amount+= (details[index].price*quantity);
        }
    }
    addToarrBill();
    if(flag==true){
        total=total+(details[index].price*quantity);
        details[index].quantity-=quantity;
        populate();
    }
 if(flag==false){
    arrBillObj={company:details[index].company,model:details[index].model,quantity:quantity,amount:details[index].price*quantity}
    arrBill.push(arrBillObj);
    arrBillObj="";
    console.log(arrBill)
    addToarrBill();
     total=total+(details[index].price*quantity);
    details[index].quantity-=quantity;
    populate();
 }
}
    else{
        document.getElementById("message").innerHTML="Entered quantity is not available";
    }
    }

    function addToarrBill(){
        billtable.innerHTML="<tr><th>Description</th><th>Quantity</th><th>Amount</th></tr>"
    for(i=0;i<arrBill.length;i++){
        billtable.innerHTML+="<tr><td>"+arrBill[i].company+arrBill[i].model+"</td><td>"+arrBill[i].quantity+"</td><td>"+arrBill[i].amount+"</td></tr>"
         }}


function generateBill(){
     document.getElementById("billtable2").innerHTML="<tr><th>Total</th><td> </td><td>"+total+"</td></tr>";
    }


function updateInventory(){
invenorySelect=document.getElementById("inventorySelect");
invenoryQuantity=document.getElementById("inventoryQuantity");
inventoryIndex=inventorySelect.selectedIndex;
details[inventoryIndex].quantity=inventoryQuantity.value;
populate();
}


function rating(){
    ratingIndex1=document.getElementById("ratingProduct").selectedIndex;
    ratingIndex2=document.getElementById("ratingSelect").selectedIndex;
    details[ratingIndex1].rating=ratingIndex2;
    populate();
}

var ele2="";
function filterProduct(){
    document.getElementById("filteredTablePara").innerHTML="";
    min=document.getElementById("min").value;
    max=document.getElementById("max").value;
    document.getElementById("filteredTable").innerHTML="<tr><th>Company</th><th>Model</th><th>Memory(GB)</th><th>Price(Rs)</th></tr>"
    for(i=0;i<details.length;i++){
    if(details[i].price>=min && details[i].price<=max){
      
        ele2 +="<tr><td>"+details[i].company+"</td><td>"+details[i].model+"</td><td>"+details[i].memory+"</td><td>"+details[i].price+"</td></tr>";
        console.log(ele2)
    }
}
document.getElementById("filteredTable").innerHTML+=ele2;
}
// comment..