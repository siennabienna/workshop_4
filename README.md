# workshop_4

Link to website: https://siennabienna.github.io/workshop_4/ 

# Things I looked at in this Workshop 
- creating a button
- figuring out how to make a drawing flip when it hits the side of the canvas
- creating a slider
- using `createSelect`
- using a span to create text rather than just using `text`


# Learning to make User Input Events

I started by following the workshop video, and created my own button code by following along. 

```js

let button = createButton(‘click here’);
button.position(width/2, height/2);
button.mousePressed(() =>{
	Let r = random(emojis);
	image(r, random(width), random(hight));
}
```

# Making my own Code using User Input Events

I wanted to bring back my fish code in a new way for this workshop. I had the idea that the fish's speed could be manipulated by a slider, and an aspect of the fish's appearance could be dictated by the user as well.

I decided that I wanted there to be a screen that asked the user if they wanted to see the fish, using buttons. I then wanted it to open up on the fish screen which would have the slider for fish speed, but would also have a dropdown menu that would allow the user to put the face of a Beatle over the fishes.

I started off by coding buttons for the mainscreen menu. I made a 'yes' button that would lead to the fish screen, and a 'no' button that would trigger a `setTimeout` screen that would tell the user to pick again.

```js
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
```
The setup for the buttons. I wrote "Would you like to be under the sea?" on the mainscreen menu as a reference to the Beatles' 'Octopuses Garden' song that I felt was quite relevant.

```js
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
```
The functions of the buttons.

# Making the Fish Flip when they Hit the Side of the Canvas

To do this, I grabbed the `drawFish` function from my other code, and I made two versions of this. One would be the same as the original, and the other would have reversed x-axis coordiantes. I made the mistake of also flipping the y-axis coordinates when I first did this, but I realised quickly. The second version of the fish would replace the first if the fish hit the right side of the screen, and the first version would replace the second if it hit the left side. 

```js
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
```
The drawings of the two fish.

```js
if (fishDirections[i] == 1)
        drawFlippedFish(fishesX[i], fishesY[i], fishesColours[i]);
      else
        drawFish(fishesX[i], fishesY[i], fishesColours[i]);
```
Assigning each of the fish to an `if` conditinal statement.

# Creating a Slider

Next, I got to work on the slider. To do this, I added the slider and then assigned it a position on the screen and a spectrum of speeds for the fish to go.

```js
fishSpeedSlider = createSlider(1, 6, 3.25);
    fishSpeedSlider.position(100, 380);
    fishSpeedSlider.size(200);
```
# Using `createSelect`

I wanted to make a dropdown menu that would allow the user to select which Beatle they liked the most for thier face to be put on the fish. I tied this into the fish code I had so far.

The images I had selected:

![ringo cutout](https://github.com/user-attachments/assets/276e1d62-d657-4036-8dd9-d3f958978b1c)
![george cutout](https://github.com/user-attachments/assets/1ef6aad3-4701-47ad-8030-95ededec1343)
![john cutout](https://github.com/user-attachments/assets/45f7aeb2-856c-49b1-8d4d-68c0ff281e54)
![paul cutout](https://github.com/user-attachments/assets/a1cd4a34-2813-4609-937d-2c6db4ba0048)

```js
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
```
```js
if (selectedBeatle != "none") {
        if(fishDirections[i] < 0)
          image(currentImg, fishesX[i] - 35, fishesY[i] - 20, 40, 40);
        else
          image(currentImg, fishesX[i] - 13, fishesY[i] - 20, 40, 40);
```

This would allow the face of each Beatle to appear. 

# Using Spans for Text

One issue I had whilst making this was trying to get text to appear on the fish screen. It didn't to work in any part of the code, so I decided to try writing it using a span instead of a text. This worked very well, and made it pretty easy to align with the dropdown menu.

```js
beatlesFaveSpan = createSpan("Select your Favourite Beatle");
    beatlesFaveSpan.position(200 - beatlesFaveSpan.width / 2, 10);
```

# Ideas for Further Development
- Make it so that the Beatles' heads turn with the fish when they flip
- Add more user input events, such as maybe a text box that would allow the user to name the school of fish something, and then have this text appear on the screen
- Try coding some type of octopus with moving tentiacles that the user could interact with in some way, eg. changing the colour of the octopus using a slider or buttons
- Make it so that the fish start facing different directions and therefore would look more random with the swimming pattern
