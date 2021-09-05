var lastX, lastY, currentX, currentY;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var color="black";
width=1;
var wid=screen.width;
var new_width=screen.width-70;
var new_height=screen.height-300;
if(wid<992){
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart",mytouchstart);
function mytouchstart(e){
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
    lastX=e.touches[0].clientX-canvas.offsetLeft;
    lastY=e.touches[0].clientY-canvas.offsetTop; 
}



canvas.addEventListener("touchmove",mytouchmove);
function mytouchmove(e){
    currentX=e.touches[0].clientX-canvas.offsetLeft;
    currentY=e.touches[0].clientY-canvas.offsetTop;
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        console.log("Last position of x and y are: ");
        console.log("x = "+ lastX + " y = "+ lastY);
        ctx.moveTo(lastX, lastY);

        console.log("Current position of x and y are: ");
        console.log("x = "+ currentX + " y = "+ currentY);
        ctx.lineTo(currentX, currentY);
        ctx.stroke();
    lastX=currentX;
    lastY=currentY;
}
function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);

}