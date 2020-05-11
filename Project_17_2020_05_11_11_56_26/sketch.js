var ball, paddle, ball_image, paddle_image;

function preload() {
  /* preload your images here of the ball and the       paddle */
  ball_image = loadImage("ball.png");
  paddle_image = loadImage("paddle.png");
}

function setup() {
  
  createCanvas(400, 400);
  
  /* create the Ball Sprite and the Paddle Sprite     */
  ball = createSprite(200, 200, 10, 10);
  paddle = createSprite(350, 200, 10, 60);
  
  /* assign the images to the sprites */
  ball.addImage("ball", ball_image);
  paddle.addImage("paddle", paddle_image);
  
  /* give the ball an initial velocity of 9 in the   X direction */
  ball.velocityX = 9;
  
}

function draw() {
  
  background(180, 255, 240);
  
  /* create Edge Sprites here */
  edges = createEdgeSprites();
  
  /* Allow the ball sprite to bounceOff the left,     top and bottom edges only, leaving the right       edge of the canvas to be open. */
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  
  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so   that the ball can have a random y velocity,         making the game interesting */
  ball.bounceOff(paddle, randomVelocity);
 
  /* Prevent the paddle from going out of the edges   */ 
  paddle.collide(edges[2]);
  paddle.collide(edges[3]);
  
  if(keyDown(UP_ARROW)) {
    /* what should happen when you press the UP         Arrow Key */
    paddle.y = paddle.y - 20;
  }
  
  if(keyDown(DOWN_ARROW)) {
    /* what should happen when you press the UP         Arrow Key */
    paddle.y = paddle.y + 20;
  }
  
  drawSprites();
  
}

function randomVelocity() {
  /* this function gets called when the ball bounces   off the paddle */
  /* assign the ball a random vertical velocity, so     it bounces off in random direction */
  ball.velocityY = random(-5, 6);
}

