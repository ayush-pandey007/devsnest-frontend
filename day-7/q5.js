// Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes. Volume of a cylinder : V = πr2h where r is the radius and h is the height of the cylinder. Try To Attempt : Difficult Level Increased 
let cylinder={
    radius: 0,
    height: 0
  
   
}
function ans(){
    let q=Math.PI*cylinder.radius*cylinder.radius*cylinder.height;
    q=q.toFixed(4);
    console.log(q);
}
cylinder.radius=2;
cylinder.height=5;
ans();