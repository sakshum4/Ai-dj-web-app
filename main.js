




song = "";
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
        leftWristX = results[0].pose.leftWrist.X;
        leftWristY = results[0].pose.leftWrist.Y;
        console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);
        rightWristX = result[0].pose.rightWrist.x;
        rightWristY = result[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);
    }
}