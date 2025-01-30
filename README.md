# workshop_4

Link to website: https://siennabienna.github.io/workshop_4/ 

# Things I looked at in this Workshop 
- creating a button
- creating a slider
- using `createSelect`
- using a span to create text rather than just using `text`
- figuring out how to make a drawing flip when it hits the side of the canvas

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

I coded 
