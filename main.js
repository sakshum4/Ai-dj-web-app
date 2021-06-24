




song = "";
scoreleftWrist = 0;
scorerightWrist = 0;
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;





function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
}





function modelLoaded()
{
    console.log('PoseNet Is Initialized');
    poseNet.on('pose', gotPoses);
}





function draw()
{
image(video, 0, 0, 600, 500);
fill("#FF0000");
stroke("#FF0000");
if(scorerightWrist > 0.2)
{
circle(rightWristX,rightWristY,20);
if(scoreleftWrist > 0.2)
{
circle(leftWristX,leftWristY,20);
if(rightWristY >0 && rightWristY <= 100)
{
    document.getElementById("speed").innerhtml = "speed = 0.5x";
    song.rate(0.5);
}
else if(rightWristY >100 && rightWristY <= 200)
{
    document.getElementById("speed").innerhtml = "speed = 1x";
    song.rate(1);
}
else if(rightWristY >200 && rightWristY <= 300)
{
    document.getElementById("speed").innerhtml = "speed = 1.5x";
    song.rate(1.5);
}
else if(rightWristY >300 && rightWristY <= 400)
{
    document.getElementById("speed").innerhtml = "speed = 2x";
    song.rate(2);
}
else if(rightWristY >400 && rightWristY <= 500)
{
    document.getElementById("speed").innerhtml = "speed = 2.5x";
    song.rate(2.5);
}
}
InNumberleftWristY = Number(leftWristY);
remove_decimals = floor(InNumberleftWristY);
volume = remove_decimals/500;
document.getElementById("volume").innerHTML = "volume = " + volume;
song.setVolume(volume);
}
}





function preload()
{
    song = loadSound("music.mp3");
}





function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}





function gotPoses(results)
{
    if(results.lenght > 0)
    {
        console.log(results);
        scorerightWrist = results[0].pose.keypoints[10].score;
        scoreleftWrist =  results[0].pose.keypoints[9].score;
        console.log("scorerightWrist = " + scorerightWrist + "scoreleftWrist = " + scoreleftWrist); 
        console.log("scoreleftWrist = " + scoreleftWrist);
        leftWristX = results[0].pose.leftWrist.X;
        leftWristY = results[0].pose.leftWrist.Y;
        console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);
        rightWristX = result[0].pose.rightWrist.x;
        rightWristY = result[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);
    }
}