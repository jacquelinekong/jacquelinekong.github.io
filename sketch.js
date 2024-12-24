let middleX;
let middleY;
const mouseXFromMiddle = () => {
  const distance = mouseX - middleX;
  return distance <= middleY ? distance : middleY;
};

const mouseYFromMiddle = () => {
  const distance = mouseY - middleY;
  return distance <= middleY ? distance : middleY;
};

function setup() {
  middleX = windowWidth / 2;
  middleY = windowHeight / 2;
  createCanvas(windowWidth, windowHeight);
  background("#93cff9");
}

function draw() {
  // Head
  fill("#f9d977");
  circle(middleX, middleY, 200);

  const leftEyeX = middleX - 30;
  const leftEyeY = middleY - 30;
  const rightEyeX = middleX + 35;
  const rightEyeY = middleY - 27;

  if (mouseIsPressed) {
    // Eyeballs
    fill(255, 255, 255);
    circle(leftEyeX, leftEyeY, 60);
    circle(rightEyeX, rightEyeY, 60);
    fill("black");
    ellipse(middleX, middleY + 50, 70, 70);
  } else {
    // Eyeballs
    fill(255, 255, 255);
    circle(leftEyeX, leftEyeY, 51);
    circle(rightEyeX, rightEyeY, 40);
    // Mouth
    fill("black");
    ellipse(middleX + 2, middleY + 40, 60, 30);
  }

  // Pupils
  fill("black");
  circle(
    leftEyeX + mouseXFromMiddle() / 20,
    leftEyeY + mouseYFromMiddle() / 20,
    15
  );
  circle(
    rightEyeX + mouseXFromMiddle() / 25,
    rightEyeY + mouseYFromMiddle() / 25,
    15
  );
}

function windowResized() {
  middleX = windowWidth / 2;
  middleY = windowHeight / 2;
  resizeCanvas(windowWidth, windowHeight);
}
