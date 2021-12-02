song="";
leftWristX=0;
rightWristX=0;
leftWristy=0;
rightWristy=0;

function setup(){
 
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotposes);
}

function draw(){
    image(video,0,0,600,500);
}

function preload(){
    song = loadSound("music.mp3"); 
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function modelLoaded(){
    console.log("model is loaded");
}

function gotposes(results){

    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristy = results[0].pose.rightWrist.y;
        leftWristy = results[0].pose.leftWrist.y;
        console.log(leftWristX,rightWristX,leftWristy,rightWristy);
    }

}