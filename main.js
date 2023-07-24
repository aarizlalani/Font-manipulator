nosex = 0;
nosey = 0;
difference=0;
leftwristx=0;
rightwristx=0;


function setup() {
video = createCapture(VIDEO);
video.size(500,500);
video.hide();
canvas = createCanvas(500, 500);
canvas.position(600,150);

poseNet = ml5.poseNet(video, modelloaded);
poseNet.on('pose', gotPoses);




}

function modelloaded() {

    console.log('posenet model is loaded');
    
    }
    
    function draw(){
    
    background("cyan");
   text('Aariz', 50 , 400 );
   textSize(difference);
   document.getElementById("font_size").innerHTML = "the width and the height of the fontsize will be = " + difference + "px";

    
    
    }
    
    function gotPoses(results) {
    
    
    if(results.length > 0){
    
        console.log(results);
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;

        leftwristx = results[0].pose.leftWrist.x;
        rightwristx = results[0].pose.rightWrist.x;
         difference = floor(leftwristx - rightwristx);
        console.log("leftwristx = " + leftwristx + "rightwristx = " + rightwristx + "difference = " + difference);


    }
    
    }















































