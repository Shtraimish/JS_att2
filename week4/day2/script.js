var button=document.getElementById("enter");
var input=document.getElementById("userInput");
var ul=document.querySelector("ul");

function creaateLi(){
    var li=document.createElement("li");
    li.appendChild(document.createTextNode(input.value))
    ul.appendChild(li)
    input.value="";
}
    

button.addEventListener("click", function(){
    if(input.value.length> 0){
        creaateLi();
       
    } 
})

input.addEventListener("keypress", function(event){
    if(input.value.length> 0&&event.keyCode===13){
       creaateLi(); 
        
    } 
})