// ----=  Faces  =----
/* load images here */

let starImage; 
let heartImage;
let cloudImage;
let circleImage;
//backgrounds
let Starbackground;
let Heartbackground;
let Cloudbackground;
let Circlebackground;

let currentImage;
let currentBackground;

function prepareInteraction() {

  Starbackground = loadImage('/images/starbackground_.png');
  Heartbackground = loadImage('/images/heartbackground.png');
  Cloudbackground = loadImage('/images/cloudbackground.png');
  Circlebackground = loadImage('/images/circlebackground_.png');

  starImage = loadImage('/images/star.png');
  heartImage = loadImage('/images/Heart.png');
  cloudImage = loadImage('/images/cloud.png');
  circleImage = loadImage('/images/circle.png');

 
  currentBackground =Starbackground;
  currentImage = starImage;
}

function drawInteraction(faces, hands) {
image(currentBackground, 0, 0, 1280, 720);


  // for loop to capture if there is more than one face on the screen. This applies the same process to all faces. 
  for (let i = 0; i < faces.length; i++) {
    let face = faces[i]; // face holds all the keypoints of the face\
    console.log(face);
    if (showKeypoints) {
      drawPoints(face)
    }
   
    // Face basics
    let faceCenterX = face.faceOval.centerX;
    let faceCenterY = face.faceOval.centerY;
    let faceWidth = face.faceOval.width;
    let faceheight = face.faceOval.height;
    // Left eye
    let leftEyeCenterX = face.leftEye.centerX;
    let leftEyeCenterY = face.leftEye.centerY;
    let leftEyeWidth = face.leftEye.width;
    let leftEyeHeight = face.leftEye.height;
    // Left eyebrow
    let leftEyebrowCenterX = face.leftEyebrow.centerX;
    let leftEyebrowCenterY = face.leftEyebrow.centerY;
    let leftEyebrowWidth = face.leftEyebrow.width;
    let leftEyebrowHeight = face.leftEyebrow.height;

    // Lips
    let lipsCenterX = face.lips.centerX;
    let lipsCenterY = face.lips.centerY;
    let lipsWidth = face.lips.width;
    let lipsHeight = face.lips.height;

    // Right eye
    let rightEyeCenterX = face.rightEye.centerX;
    let rightEyeCenterY = face.rightEye.centerY;
    let rightEyeWidth = face.rightEye.width;
    let rightEyeHeight = face.rightEye.height;

    // Right eyebrow
    let rightEyebrowCenterX = face.rightEyebrow.centerX;
    let rightEyebrowCenterY = face.rightEyebrow.centerY;
    let rightEyebrowWidth = face.rightEyebrow.width;
    let rightEyebrowHeight = face.rightEyebrow.height;

    let noseTipX = face.keypoints[4].x;
    let noseTipY = face.keypoints[4].y;
    /*  
    Start drawing on the face here
    */

  push()
  imageMode(CENTER);
  // console.log(currentImage);
  image(currentImage, noseTipX, noseTipY, 700, 700);
 pop()

    if(currentImage === starImage){
//star left eye
    noStroke();
    fill(142, 107, 17);
    ellipse(leftEyeCenterX, leftEyeCenterY, leftEyeWidth, leftEyeHeight*10);
//star right eye
    ellipse(rightEyeCenterX, rightEyeCenterY, rightEyeWidth, rightEyeHeight*10);
    }
 if(currentImage === heartImage){

 }
if(currentImage === cloudImage){


}
  if(currentImage === circleImage){ 


  }





    // drawPoints(face.leftEye);
    // drawPoints(face.leftEyebrow);
    // drawPoints(face.lips);
    // drawPoints(face.rightEye);
    // drawPoints(face.rightEyebrow);

    // drawX(rightEyeCenterX,rightEyeCenterY);
    // drawX(leftEyeCenterX,leftEyeCenterY);


    // drawX(noseTipX,noseTipY); 

    // drawX(face.keypoints[332].x,face.keypoints[332].y);
    // drawX(face.keypoints[103].x,face.keypoints[103].y);


    /*
    Stop drawing on the face here
    */

  }
  //------------------------------------------------------
  // You can make addtional elements here, but keep the face drawing inside the for loop. 
}

function keyTyped(){
  if (key === 'z'){
    currentBackground = Starbackground;
    currentImage = starImage;


  }

  else if (key === 'x'){
    currentBackground = Heartbackground;
    currentImage = heartImage;
  }
  else if (key === 'c'){
    currentBackground = Cloudbackground;
    currentImage = cloudImage;
  }
  else if (key === 'v'){
    currentBackground = Circlebackground;
    currentImage = circleImage;
  }
}



function drawX(X, Y) {
  push()

  strokeWeight(15)
  line(X - 20, Y - 20, X + 20, Y + 20)
  line(X - 20, Y + 20, X + 20, Y - 20)

  pop()
}


// This function draw's a dot on all the keypoints. It can be passed a whole face, or part of one. 
function drawPoints(feature) {

  push()
  for (let i = 0; i < feature.keypoints.length; i++) {
    let element = feature.keypoints[i];
    noStroke();
    fill(0, 255, 0);
    circle(element.x, element.y, 5);
  }
  pop()

}