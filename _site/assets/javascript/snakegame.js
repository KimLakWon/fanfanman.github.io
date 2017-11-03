$(document).ready(function() {    
 
  // set the canvas properties
  var canvas = document.getElementById("snakecanvas");
  var canvasw = 300; // canvas width
  var cw = 10; // cell width, so 50 cells
  canvas.width = canvasw;
  canvas.height = canvasw;
  
  var ctx = canvas.getContext("2d");
  ctx.strokeStyle = "black";
  ctx.strokeRect(0, 0, canvasw, canvasw);
  
  // set global variables
  // where food is an array [fx, fy]
  // snake is an array of arrays [[s1x, s1y], [s2x, s2y], ...]
  var food;
  var snake = [];
  var dir = "right";
  var score = 0;

  function init() {
    snake = []; food = []; dir = "right"; score = 0;
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,canvasw, canvasw);
    ctx.strokeStyle = "black";
    ctx.strokeRect(0, 0, canvasw, canvasw);
    
    create_snake();
    create_food();
    
    if (typeof gameloop != "undefined") clearInterval(gameloop); // or it would be a freaky loop
    gameloop = setInterval(snake_move, 60); // 1000 miliseconds = 1 second
  };
  init();
  
  function create_snake() { // create initial snake, length 5
    snake = [];
    for (var i = 4; i >= 0; i--) {
      initsnake = {x:i, y:0};
      snake.push(initsnake);
      draw(initsnake);
    }
  };
 
  function create_food() { // create food
    food = {x:Math.floor(Math.random()*(canvasw/cw)), y:Math.floor(Math.random()*(canvasw/cw))};
    draw(food);
  };
 
  function snake_move() { // snake moves and creates animation
    // firstly, we need to clear the canvas, and draw the food again
    // otherwise, the shade of snake will be covered with each other.
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,canvasw, canvasw);
    ctx.strokeStyle = "black";
    ctx.strokeRect(0, 0, canvasw, canvasw);
    draw(food);

    // principle: pop out the head of the array (tail of snake)
    // and get the direction of the tail of the array (head of snake)
    // add up correct direction increment and push it to the array
    // to be the new tail of array and head of snake
    var snake_tail = snake.pop();
    var snake_head = snake[0];
    var oldx = snake_head.x; var oldy = snake_head.y;
    var newx = oldx; var newy = oldy;
    
    // create snake new direction
    if (dir == "right") newx++;
    else if (dir == "left") newx--; 
    else if (dir == "up") newy--;
    else if (dir == "down") newy++;

    // judge whether have crashed into the wall
    if (newx == canvasw/cw || newy == canvasw/cw || newx == -1 || newy == -1) {
      init();
      return false;
    }
    // for (var i = 0; i < snake.length; i ++) {
    //   if (newx == snake[i].x && newy == snake[i].y) {init(); return false;}
    // }
    snake_tail = {x:newx, y:newy};
    snake.unshift(snake_tail);
    
    // check whether has reached the food
    if (newx == food.x && newy == food.y) {
      snake.push({x:oldx, y:oldy});
      create_food();
      draw(food);
      score ++;
    }
 
    for (var i = 0; i < snake.length; i++) {draw(snake[i]);}
    var printscore = "Score: " + score;
    ctx.fillText(printscore, 5, canvasw-5);
  };

  function draw(pos) { // function to draw any array [pos_x, pos_y]
    ctx.fillStyle = "black";
    ctx.fillRect(pos.x*cw, pos.y*cw, cw, cw);
    ctx.strokeStyle = "white";
    ctx.strokeRect(pos.x*cw, pos.y*cw, cw, cw);
  };

  $(document).keydown(function(e){
    var keynum = 0;
    if (window.event) { keynum = e.keyCode; }  // IE
    else if (e.which) { keynum =  e.which; }    // Netscape/Firefox/Opera
    
    // alert(keynum);
    // check from javascript keyboard codes
    if (keynum == 37 && dir != "right") {dir="left";} // left arrow
    else if (keynum == 38 && dir != "down") {dir="up";} // up arrow
    else if (keynum == 39 && dir != "left") {dir="right";} // right arrow
    else if (keynum == 40 && dir != "up") {dir="down";} // down arrow
  
  });

});
