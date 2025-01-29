let buttonYes, buttonNo;
let fishSpeedSlider;
let beatlesSelector;
let beatlesFaveSpan;

let paulImg, johnImg, ringoImg, georgeImg;
let currentImg;

let fishNumber = 50;

function preload() {
  paulImg = loadImage('cutouts/paul.cutout.PNG');
  johnImg = loadImage('cutouts/john.cutout.PNG');
  ringoImg = loadImage('cutouts/ringo.cutout.PNG');
  georgeImg = loadImage('cutouts/george.cutout.PNG');
}

function setup() {
  createCanvas(400, 400);

  buttonNo = createButton("no");
  buttonNo.position(100, height / 2);
  buttonNo.mousePressed(tryAgainScreen);



  buttonYes = createButton("yes");
  buttonYes.position(250, height / 2);
  buttonYes.mousePressed(() => {
    buttonYes.hide()
    buttonNo.hide()

    for (let i = 0; i < fishNumber; i++) {
      fishesX.push(random(0, 400));
      fishesY.push(random(75, 350));
      fishDirections.push(1);
      fishesColours.push(color(random(255), random(255), random(255)));
    }
    fishSpeedSlider = createSlider(1, 6, 3.25);
    fishSpeedSlider.position(100, 380);
    fishSpeedSlider.size(200);

    beatlesSelector = createSelect();
    beatlesSelector.position(170, 40);
    beatlesSelector.option("none");
    beatlesSelector.option("john");
    beatlesSelector.option("paul");
    beatlesSelector.option("george");
    beatlesSelector.option("ringo");

    beatlesFaveSpan = createSpan("Select your Favourite Beatle");
    beatlesFaveSpan.position(200 - beatlesFaveSpan.width / 2, 10);


  }
  )
  homeScreen();
}
let fishesX = [];
let fishesY = [];
let fishesColours = [];
let fishDirections = [];
let selectedBeatle = "none";

function draw() {
  if (fishesX.length > 0) {
    background(0, 128, 120);

    if (selectedBeatle != beatlesSelector.selected()) {
      selectedBeatle = beatlesSelector.selected();
      if (selectedBeatle == "john")
        currentImg = johnImg;
      else if (selectedBeatle == "paul")
        currentImg = paulImg;
      else if (selectedBeatle == "george")
        currentImg = georgeImg;
      else if (selectedBeatle == "ringo")
        currentImg = ringoImg;
    }

    for (let i = 0; i < fishesX.length; i++) {
      fishesX[i] += fishSpeedSlider.value() * fishDirections[i];
      if (fishDirections[i] == 1)
        drawFlippedFish(fishesX[i], fishesY[i], fishesColours[i]);
      else
        drawFish(fishesX[i], fishesY[i], fishesColours[i]);

      if (selectedBeatle != "none") {
        if(fishDirections[i] < 0)
          image(currentImg, fishesX[i] - 35, fishesY[i] - 20, 40, 40);
        else
          image(currentImg, fishesX[i] - 13, fishesY[i] - 20, 40, 40);
      }

      if (fishesX[i] < 0 || fishesX[i] > 400)
        fishDirections[i] *= -1
    }
  }
}

function drawFish(fishX, fishY, colour) {
  fill(colour);
  noStroke()
  ellipse(fishX, fishY, 80, 40);
  triangle(fishX + 25, fishY, fishX + 75, fishY - 20, fishX + 75, fishY +
    20);
  fill(0)
  circle(fishX - 20, fishY - 10, 5)
  // fill (0, 128, 120);
  // triangle(fishX -40, fishY + 5, fishX - 40, fishY -5, fishX - 25, fishY);
  // triangle(fishX + 60, fishY, fishX + 75, fishY -20, fishX + 75, fishY + 20);
}

function drawFlippedFish(fishX, fishY, colour) {
  fill(colour);
  noStroke()
  ellipse(fishX, fishY, 80, 40);
  triangle(fishX - 25, fishY, fishX - 75, fishY + 20, fishX - 75, fishY - 20);
  fill(0)
  circle(fishX + 20, fishY - 10, 5)
  // fill (0, 128, 120);
  // triangle(fishX +40, fishY - 5, fishX + 40, fishY +5, fishX + 25, fishY);
  // triangle(fishX - 60, fishY, fishX - 75, fishY +20, fishX - 75, fishY - 20);
}



function homeScreen() {
  background(163, 232, 255);
  fill(0);
  textAlign(CENTER, CENTER);
  text("would you like to be under the sea?", 200, 100);
  buttonYes.show();
  buttonNo.show();

}

function tryAgainScreen() {
  background(0);
  fill(255, 255, 255);
  textAlign(CENTER, CENTER);
  text("wrong", 200, 200);
  setTimeout(homeScreen, 2000)
  buttonNo.hide();
  buttonYes.hide();
}

