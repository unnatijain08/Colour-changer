const boxes= document.querySelectorAll(".box")
const body=document.querySelector("body")
boxes.forEach(function(box){
    console.log(box);
    box.addEventListener('click',function(e){
        console.log(e)
        console.log(e.target)
        if(e.target.id==="grey"){
            body.style.backgroundColor=e.target.id;
        }  
        else if(e.target.id==="white"){
            body.style.backgroundColor=e.target.id;
        }
        else if(e.target.id==="blue"){
            body.style.backgroundColor=e.target.id;
        }
        else if(e.target.id==="yellow"){
            body.style.backgroundColor=e.target.id;
        }  
    })
});