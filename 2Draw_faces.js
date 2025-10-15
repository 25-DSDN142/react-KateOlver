// ----=  Faces  =----
let starImage; 
let heartImage;
let cloudImage;
let flowerImage;

//backgrounds
let starbackground;
let heartbackground;
let cloudbackground;
let flowerbackground;

let currentImage;
let currentBackground;

function prepareInteraction() {
//background images
  starbackground = loadImage('/images/starbackground_.png');
  heartbackground = loadImage('/images/heartbackground.png');
  cloudbackground = loadImage('/images/cloudbackground.png');
  flowerbackground = loadImage('/images/flowerbackground.png');
//face images
  starImage = loadImage('/images/star.png');
  heartImage = loadImage('/images/heart.png');
  cloudImage = loadImage('/images/cloud.png');
  flowerImage = loadImage('/images/flower.png');
//keys
  currentBackground =starbackground;
  currentImage = starImage;
}

function drawInteraction(faces, hands) {
image(currentBackground, 0, 0, 1280, 720);

  for (let i = 0; i < faces.length; i++) {
    let face = faces[i]; 
    console.log(face);
    if (showKeypoints) {
      drawPoints(face)
    }
   
    // Left eye
    let leftEyeCenterX = face.leftEye.centerX;
    let leftEyeCenterY = face.leftEye.centerY;
    let leftEyeWidth = face.leftEye.width;
    let leftEyeHeight = face.leftEye.height;
   
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

    let noseTipX = face.keypoints[4].x;
    let noseTipY = face.keypoints[4].y;
   
  push()
  imageMode(CENTER);
  // console.log(currentImage);
  image(currentImage, noseTipX, noseTipY, 645, 645);
  pop()

    if(currentImage === starImage){
    noStroke();
    fill(142, 107, 17);
//star left eye outer
    ellipse(leftEyeCenterX, leftEyeCenterY, leftEyeWidth, leftEyeHeight*8);
//star right eye outer
    ellipse(rightEyeCenterX, rightEyeCenterY, rightEyeWidth, rightEyeHeight*8);

    noStroke();
    fill(255, 219, 128);
//star left eye inner
    ellipse(leftEyeCenterX, leftEyeCenterY, leftEyeWidth/2, leftEyeHeight*4);
//star right eye inner
    ellipse(rightEyeCenterX, rightEyeCenterY, rightEyeWidth/2, rightEyeHeight*4);
//starmouth
    noStroke();
    fill(142, 107, 17);
    ellipse(lipsCenterX, lipsCenterY, lipsWidth, lipsHeight);
 }

 if(currentImage === heartImage){
   noStroke();
    fill(169, 0, 21);
 //heart left eye outer
    ellipse(leftEyeCenterX, leftEyeCenterY, leftEyeWidth, leftEyeHeight*8);
//heart right eye outer
    ellipse(rightEyeCenterX, rightEyeCenterY, rightEyeWidth, rightEyeHeight*8);
     
    noStroke();
    fill(253, 130, 145);
//heart left eye inner
    ellipse(leftEyeCenterX, leftEyeCenterY, leftEyeWidth/2, leftEyeHeight*4);
//heart right eye inner
    ellipse(rightEyeCenterX, rightEyeCenterY, rightEyeWidth/2, rightEyeHeight*4);
//heart mouth 
    noStroke();
     fill(169, 0, 21);
    arc(lipsCenterX, lipsCenterY, lipsWidth, lipsHeight, 0, PI);
    }

if(currentImage === cloudImage){
 noStroke();
    fill(0, 19, 92);
 //Cloud left eye
    ellipse(leftEyeCenterX, leftEyeCenterY, leftEyeWidth, leftEyeHeight*8);
//Cloud right eye
    ellipse(rightEyeCenterX, rightEyeCenterY, rightEyeWidth, rightEyeHeight*8);

    noStroke();
    fill(148, 172, 255);
//Cloud left eye inner
    ellipse(leftEyeCenterX, leftEyeCenterY, leftEyeWidth/2, leftEyeHeight*4);
//Cloud right eye inner
    ellipse(rightEyeCenterX, rightEyeCenterY, rightEyeWidth/2, rightEyeHeight*4);
  //Cloud mouth
    noStroke();
    fill(0, 19, 92);
   ellipse(lipsCenterX, lipsCenterY, lipsWidth/2, lipsHeight*2);
}

if(currentImage === flowerImage){ 
 noStroke();
    fill(164, 73, 21);
 //flower left eye
    ellipse(leftEyeCenterX, leftEyeCenterY, leftEyeWidth, leftEyeHeight*8);
//flower right eye
    ellipse(rightEyeCenterX, rightEyeCenterY, rightEyeWidth, rightEyeHeight*8);
    
    noStroke();
    fill(255, 160, 107);
//flower left eye inner
    ellipse(leftEyeCenterX, leftEyeCenterY, leftEyeWidth/2, leftEyeHeight*4);
//flower right eye inner
    ellipse(rightEyeCenterX, rightEyeCenterY, rightEyeWidth/2, rightEyeHeight*4);
 //flower mouth
    noStroke();
    fill(164, 73, 21);
   arc(lipsCenterX, lipsCenterY, lipsWidth/2, lipsHeight*2, 0, PI);
  }

  }
  
}

function keyTyped(){
  if (key === 'z'){
    currentBackground = starbackground;
    currentImage = starImage;
  }
  else if (key === 'x'){
    currentBackground = heartbackground;
    currentImage = heartImage;
  }
  else if (key === 'c'){
    currentBackground = cloudbackground;
    currentImage = cloudImage;
  }
  else if (key === 'v'){
    currentBackground = flowerbackground;
    currentImage = flowerImage;
  }
}

function drawX(X, Y) {
  push()

  strokeWeight(15)
  line(X - 20, Y - 20, X + 20, Y + 20)
  line(X - 20, Y + 20, X + 20, Y - 20)

  pop()
}


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