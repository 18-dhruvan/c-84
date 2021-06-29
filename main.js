canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_x=18;
rover_y=18;
rover_width=300;
rover_height=300;
rover_image="rover.png"
background_image="mars.jpg";
function add(){
    backgrond_imgAdd=new Image();
    backgrond_imgAdd.onload=uploadBackground;
    backgrond_imgAdd.src=background_image;
    rover_imgAdd=new Image();
    rover_imgAdd.onload=uploadrover;
    rover_imgAdd.src=rover_image;
}
function uploadBackground(){
    ctx.drawImage(backgrond_imgAdd,0,0,900,600)
    
}
function uploadrover(){
    ctx.drawImage(rover_imgAdd,rover_x,rover_y,90,60)
}
window.addEventListener("keydown",mykeydown)
function mykeydown(e){
    keypressed=e.keyCode
 console.log (keypressed);
}