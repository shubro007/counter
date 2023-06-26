const counter=document.getElementById("counter");
const dec=document.getElementById("dec");
const res=document.getElementById("res");
const inc=document.getElementById("inc");



inc.addEventListener('click', function(){
    num=parseInt(counter.textContent);

    counter.textContent=num+1;
    checkcolor();
})

dec.addEventListener('click', function(){
    num=parseInt(counter.textContent);

    counter.textContent=num-1;
    checkcolor();

})

res.addEventListener('click',function(){
    counter.textContent=0;
    checkcolor();
})

function checkcolor(){
    num=parseInt(counter.textContent);
    if (num<0){
        counter.style.color="red";
    }
    else if(num==0){
        counter.style.color="black";
    }
    else{
        counter.style.color="green";
    }
}
