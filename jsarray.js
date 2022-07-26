details=[
    {company:"Samsung",model:"Galaxy",memory:64,price:15000,quantity:20},
    {company:"Nokia",model:"S730",memory:128,price:22000,quantity:15},
    {company:"Xiaomi",model:"Note",memory:32,price:12000,quantity:21},
    {company:"Motorola",model:"G10",memory:32,price:15000,quantity:13},
    {company:"Apple",model:"S12",memory:64,price:25000,quantity:18}
]
const arr=[];
var total=0;
populate();
optionsel=document.getElementById("heads");
searched=document.getElementById("search");
tablesearch=document.getElementById("tablesearch");


function populate(){
list=document.getElementById("list");
list.innerHTML="";
list.innerHTML="<tr><th>Company</th><th>Model</th><th>Memory(GB)</th><th>Price(Rs)</th><th>Quantity</th><th>Action</th></tr>";
text=""
for(i=0;i<details.length;i++){
    
    text+="<tr><td>"+details[i].company+"</td><td>"+details[i].model+"</td><td>"+details[i].memory+"</td><td>"+details[i].price+"</td><td>"+details[i].quantity+"</td><td><input type='checkbox' id='toBeDeleted' onclick='selected(this)'></td></tr>";
}
list.innerHTML+=text;
}


function search(){
index=optionsel.selectedIndex;
alert(index)
for(i=0;i<details.length;i++){
if(index==0 && searched.value==details[i].company){
    tablesearch.innerHTML="<table id='table2'><tr><td>"+details[i].company+"</td><td>"+details[i].model+"</td><td>"+details[i].memory+"</td><td>"+details[i].price+"</td></tr></table>";
}
else if(index==1 && searched.value==details[i].model){
    tablesearch.innerHTML="<table id='table2'><tr><td>"+details[i].company+"</td><td>"+details[i].model+"</td><td>"+details[i].memory+"</td><td>"+details[i].price+"</td></tr></table>";
}
else if(index==2 && searched.value==details[i].memory){
    tablesearch.innerHTML="<table id='table2'><tr><td>"+details[i].company+"</td><td>"+details[i].model+"</td><td>"+details[i].memory+"</td><td>"+details[i].price+"</td></tr></table>";
}
else if(index==3 && searched.value==details[i].price){
    tablesearch.innerHTML="<table id='table2'><tr><td>"+details[i].company+"</td><td>"+details[i].model+"</td><td>"+details[i].memory+"</td><td>"+details[i].price+"</td></tr></table>";
}
}
}


function sorting(){
    alert();
    sort=document.getElementById("sort");
    indexSort=sort.selectedIndex;
    console.log(indexSort)
    optionsel2=document.getElementById("heads2");
    index=optionsel2.selectedIndex;
    console.log(index)
    if(indexSort==1){
        if(index==1){
            console.log(details)
            details.sort((a,b)=>{
            x=a.company.toLowerCase();
            y=b.company.toLowerCase();
            if(x>y){return 1;}
            if(x<y){return -1;}
            return 0;});
        }
        if(index==2){
            console.log(details)
            details.sort((a,b)=>{
            x=a.model.toLowerCase();
            y=b.model.toLowerCase();
            if(x>y){return 1;}
            if(x<y){return -1;}
            return 0;});
        }
        if(index==3){
            details.sort((a,b)=>{return a.memory - b.memory});
            console.log(details)
        }
        if(index==4){
            details.sort((a,b)=>{return a.price - b.price});
            console.log(details)
    }
    }

    if(indexSort==2){
        if(index==1){
            console.log(details)
            details.sort((a,b)=>{
            x=a.company.toLowerCase();
            y=b.company.toLowerCase();
            if(x<y){return 1;}
            if(x>y){return -1;}
            return 0;});
        }
        if(index==2){
            details.slice(0,details.length);
            console.log(details)
            detailscopy.sort((a,b)=>{
            x=a.model.toLowerCase();
            y=b.model.toLowerCase();
            if(x<y){return 1;}
            if(x>y){return -1;}
            return 0;});
        }
        if(index==3){
            details.slice(0,details.length);
            details.sort((a,b)=>{return b.memory - a.memory});
            console.log(details)
        }
        if(index==4){
           details.slice(0,details.length);
            details.sort((a,b)=>{return b.price - a.price});
            console.log(details)
    }
}
populate();
}


function AddProduct(){
    add={company:document.getElementById("addCompany").value,model:document.getElementById("addModel").value,memory:document.getElementById("addMemory").value,price:document.getElementById("addPrice").value};
 details.splice(2,0,add);
 console.log(details)
 populate();
}


function selected(args){
    tr=args.parentNode.parentNode;
   let index=tr.rowIndex;
  
    arr.push(details[index-1].company);
    console.log(arr)
    console.log(details)
}



function deletethis(){
for(i=0;i<arr.length;i++){
    for(j=0;j<details.length;j++){
      if(arr[i]==details[j].company){
        details.splice(j,1);
      }
    }
    
    console.log(details)
}
populate();
arr.splice(0,arr.length)
}


function addToBill(){
    opt=document.getElementById("billSelect");
    let index=opt.selectedIndex;
    let quantity=document.getElementById("productQuantity").value;
    billtable.innerHTML+="<tr><td>"+details[index-1].company+details[index-1].model+"</td><td>"+quantity+"</td><td>"+details[index-1].price*quantity+"</td></tr>"
    total=total+(details[index-1].price*quantity);
    details[index-1].quantity-=quantity;
    populate();
    }



function generateBill(){
     billtable.innerHTML+="<tr><th>Total</th><td> </td><td>"+total+"</td></tr>";
    }


function updateInventory(){
invenorySelect=document.getElementById("inventorySelect");
console.log(invenorySelect)
invenoryQuantity=document.getElementById("inventoryQuantity");
console.log(invenoryQuantity)
inventoryIndex=inventorySelect.selectedIndex;
console.log(inventoryIndex)
if(inventoryIndex==1){
    details[inventoryIndex-1].quantity=inventoryQuantity.value;
}
populate();
}