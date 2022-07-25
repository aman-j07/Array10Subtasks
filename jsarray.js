details=[
    {company:"Samsung",model:"Galaxy",memory:64,price:15000},
    {company:"Nokia",model:"S730",memory:128,price:22000},
    {company:"Xiaomi",model:"Note",memory:32,price:12000},
    {company:"Motorola",model:"G10",memory:32,price:15000},
    {company:"Apple",model:"S12",memory:64,price:25000}
]
populate();
optionsel=document.getElementById("heads");
searched=document.getElementById("search");
tablesearch=document.getElementById("tablesearch");
function populate(){
list=document.getElementById("list");
text=""
for(i=0;i<details.length;i++){
    
    text+="<tr><td>"+details[i].company+"</td><td>"+details[i].model+"</td><td>"+details[i].memory+"</td><td>"+details[i].price+"</td></tr>";
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