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
list.innerHTML="";
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