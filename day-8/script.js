const container=document.querySelector(".container");

function pixelMaker(){
    const div = document.createElement('div');
   
    div.style.height='20px';
    div.style.width='20px';
    div.style.border='1px solid white';
    div.zIndex='1';
    div.style.backgroundColor = 'red';
    return div;

}
for(let i=0;i<400;i++){
    container.appendChild(pixelMaker());
}


container.addEventListener('click', e=>{
    let color=e.target.style.backgroundColor;

    if(color==='black'){
        color='white';
    }
    else{
        color='red';
    }
    e.target.style.backgroundColor=color;

});
container.onmouseover = function(e) {

    if(e.target.style.backgroundColor!=='white')
    e.target.style.backgroundColor='black';
    
};
container.onmouseout = function(e) {
    
    if(e.target.style.backgroundColor!=='white')
    e.target.style.backgroundColor='red';
    
};