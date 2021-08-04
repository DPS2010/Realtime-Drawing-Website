
noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
function setup () {
    canvas = createCanvas(550, 550)
    canvas.position(750, 150)
    video = createCapture(VIDEO)
    video.size(550, 550)

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose' ,gotPoses) 
    
}
function modelLoaded () {
    console.log("Model Loaded")
}
function gotPoses(result) {
    if (result.length > 0) {
        console.log(result)
        noseX = result[0].pose.nose.x
        nosey = result[0].pose.nose.y 
        console.log("NoseX = " + noseX + " NoseY = " + noseY)
        leftWristX = result[0].pose.leftWrist.x
        rightWristX = result[0].pose.rightWrist.x
        difference = floor(leftWristX - rightWristX)
        console.log("Left Wrist = " + leftWristX + " Right Wrist = " + rightWristX + " Difference = " + difference)

    }
}
function draw() {
   background("#858483") 
   document.getElementById("square_side").innerHTML = "Width And Height Of Square Will Be  = " + difference + "px"

       fill(255, 0, 0)
       stroke(255, 0, 0)
       square(noseX, noseY, difference)
}