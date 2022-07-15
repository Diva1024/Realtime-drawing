var noseX=0;
var noseY=0;
var leftwx=0;
var rightwx=0;
var dif=0;

function preload(){

}



function setup(){
canvas= createCanvas(600,480);
canvas.position(800,100);
video=createCapture(VIDEO);
video.size(600,500);
poseNet=ml5.poseNet(video,modelloaded());
poseNet.on("pose",gotPoses);

}




function draw(){
background("#8073c9");
fill("#32acd1");
stroke("#183a45");
square(noseX,noseY,dif);

}
function modelloaded(){
    console.log("PoseNet is loaded");

}
function gotPoses(results){
if(results.length>0){
console.log(results);
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
console.log("noseX= "+noseX+"noseY= " +noseY);
leftwx=results[0].pose.leftWrist.x;
rightwx=results[0].pose.rightWrist.x;
dif=floor(leftwx-rightwx);
console.log("left wrist= "+leftwx, "right wrist= "+rightwx, "difference= "+dif);
}

}