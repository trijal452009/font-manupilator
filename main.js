function setup(){
    video =  createCapture(VIDEO);
    video.size(500, 480);
    video.position(80, 150);

    canvas = createCanvas(500, 480);
    canvas.position(900, 150);

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized!!');
}

function draw(){
    background('#d1c0eb');
}


function gotPoses(results){
if(results.length > 0){
    console.log(results);
}
} 
function gotPoses(results)
{

    if(results.length > 0){

    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = "+ noseX +" noseY + " + noseY);

leftWristX= results[0].pose.leftWrist.x;
rightWristX= results[0].pose.rightWrist.x;
difference= floor(leftWristX-rightWristX);

console.log("leftWristX = " + leftWristX + "rightWristX = "+ rightWristX + "difference = " + difference);
} 
}

function draw(){
    background("#d1c0eb");
    document.getElementById('font_size').innerHTML = difference+"px";
    textSize(difference);
    fill('#76aff5');
    text("Trijal",50,400);


    

}



