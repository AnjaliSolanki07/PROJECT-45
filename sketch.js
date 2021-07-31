let BACKGROUND, BASE, BOTTOM_PIPE, TOP_PIPE, BIRD;
let pipe = [500, 100];
let pipe_gap = 100;
let pipe_speed = 10;
let bird = [50, 250];
let jump = 0;



function preload() { // Load all the media files
    BACKGROUND = loadImage('media/background.png');
    BASE = loadImage('media/base.png');
    BIRD = loadImage("media/flappybird-animation.gif");
  
      }

function setup() {
    game_size = [windowWidth, windowHeight];
    createCanvas(game_size[0], game_size[1]);
    BACKGROUND.resize(game_size[0], game_size[1]);
    BASE.resize(game_size[0], BASE.height);
    frameRate(25);
}
    image(BIRD, bird[0], bird[1]);


function draw() {
    image(BACKGROUND, 0,0);
    image(BIRD, bird[0], bird[1]);
    image(BASE, 0, game_size[1]-BASE.height);
   }
