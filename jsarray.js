details=[
    {company:"Samsung",model:"Galaxy",memory:64,price:15000},
    {company:"Nokia",model:"S730",memory:128,price:22000},
    {company:"Xiaomi",model:"Note",memory:32,price:12000},
    {company:"Motorola",model:"G10",memory:32,price:15000},
    {company:"Apple",model:"S12",memory:64,price:25000}
]
populate();

function populate(){
list=document.getElementById("list");
text=""
for(i=0;i<details.length;i++){
    
    text+="<tr><td>"+details[i].company+"</td><td>"+details[i].model+"</td><td>"+details[i].memory+"</td><td>"+details[i].price+"</td></tr>";
}
list.innerHTML+=text;
}