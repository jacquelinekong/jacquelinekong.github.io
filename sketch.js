function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#93cff9");
}

const origin = 200;
const mouseXFromOrigin = () => {
  const distance = mouseX - origin;
  return distance <= 200 ? distance : 200;
};

const mouseYFromOrigin = () => {
  const distance = mouseY - origin;
  return distance <= 200 ? distance : 200;
};

const percentAway = (distance) => {
  return distance / 200;
};

function draw() {
  // Head
  fill("#f9d977");
  circle(200, 200, 200);

  if (mouseIsPressed) {
    // Eyeballs
    fill(255, 255, 255);
    circle(170, 170, 60);
    circle(235, 173, 60);
    fill("black");
    ellipse(200, 250, 70, 70);
  } else {
    // Eyeballs
    fill(255, 255, 255);
    circle(170, 170, 51);
    circle(235, 173, 40);
    fill("black");
    ellipse(202, 240, 60, 30);
  }

  // Pupils
  fill("black");
  circle(170 + mouseXFromOrigin() / 20, 170 + mouseYFromOrigin() / 20, 15);
  circle(235 + mouseXFromOrigin() / 25, 173 + mouseYFromOrigin() / 25, 15);
}
