var bowlingBall, bowlingBallImg;
var bowlingPin, bowlingPinImg;
var bowlingPin1, bowlingPin2, bowlingPin3, bowlingPin4, bowlingPin5, bowlingPin6, bowlingPin7, bowlingPin8, bowlingPin9;
var bowlingAlleyLaneImg;
var gameState = "play";
var score = 0;

function preload(){
    bowlingBallImg = loadImage("sprites/bowling_ball.png");

    bowlingPinImg = loadImage("sprites/bowling_pin.png");

    bowlingAlleyLaneImg = loadImage("sprites/bowling_alley_lane.jpg");

    pinDown = loadAnimation("sprites/fallen_down_pin.png");
}

function setup(){
    var canvas = createCanvas(displayWidth,969);
    
    bowlingBall = createSprite(200,200,20,20);
    bowlingBall.addImage(bowlingBallImg);
    bowlingBall.scale = 0.5;

    bowlingPinGroup = new Group();

    if(gameState === "play"){
        bowling_pin();
    }
}

function draw(){
    background("white");
    image(bowlingAlleyLaneImg,-200,0,displayWidth*2,969);
    text("Score: " + score,bowlingBall.position.x-50,20);

    if(gameState === "play"){
        if(keyIsDown(RIGHT_ARROW)){
            bowlingBall.x +=20;
            camera.position.x = bowlingBall.position.x;
        }
        
        if(bowlingPinGroup.isTouching(bowlingBall)){
            score += 1;
        }

        if(bowlingBall.isTouching(bowlingPin)){
            bowlingPin.changeAnimation("fall", pinDown);
        }

        if(bowlingBall.isTouching(bowlingPin1)){
            bowlingPin1.changeAnimation("fall", pinDown);
        }

        if(bowlingBall.isTouching(bowlingPin2)){
            bowlingPin2.changeAnimation("fall", pinDown);
        }

        if(bowlingBall.isTouching(bowlingPin3)){
            bowlingPin3.changeAnimation("fall", pinDown);
        }

        if(bowlingBall.isTouching(bowlingPin4)){
            bowlingPin4.changeAnimation("fall", pinDown);
        }

        if(bowlingBall.isTouching(bowlingPin5)){
            bowlingPin5.changeAnimation("fall", pinDown);
        }

        if(bowlingBall.isTouching(bowlingPin6)){
            bowlingPin6.changeAnimation("fall", pinDown);
        }

        if(bowlingBall.isTouching(bowlingPin7)){
            bowlingPin7.changeAnimation("fall", pinDown);
        }

        if(bowlingBall.isTouching(bowlingPin8)){
            bowlingPin8.changeAnimation("fall", pinDown);
        }

        if(bowlingBall.isTouching(bowlingPin9)){
            bowlingPin9.changeAnimation("fall", pinDown);
        }
    }
    else if(gameState === "end"){

    }

    drawSprites();
}

function bowling_pin(){
    randomX = Math.round(random(100,displayWidth*1.85));
    randomY = Math.round(random(10,950));
    bowlingPin = createSprite(randomX,randomY,20,20);
    bowlingPin.addImage(bowlingPinImg);
    bowlingPin.addAnimation("fall", pinDown);
    bowlingPin.scale = 0.5;
    bowlingPinGroup.add(bowlingPin);

    bowlingPin1 = createSprite(randomX,randomY,20,20);
    bowlingPin1.addImage(bowlingPinImg);
    bowlingPin1.addAnimation("fall", pinDown);
    bowlingPin1.scale = 0.5;
    bowlingPinGroup.add(bowlingPin1);

    bowlingPin2 = createSprite(randomX,randomY,20,20);
    bowlingPin2.addImage(bowlingPinImg);
    bowlingPin2.addAnimation("fall", pinDown);
    bowlingPin2.scale = 0.5;
    bowlingPinGroup.add(bowlingPin2);

    bowlingPin3 = createSprite(randomX,randomY,20,20);
    bowlingPin3.addImage(bowlingPinImg);
    bowlingPin3.addAnimation("fall", pinDown);
    bowlingPin3.scale = 0.5;
    bowlingPinGroup.add(bowlingPin3);

    bowlingPin4 = createSprite(randomX,randomY,20,20);
    bowlingPin4.addImage(bowlingPinImg);
    bowlingPin4.addAnimation("fall", pinDown);
    bowlingPin4.scale = 0.5;
    bowlingPinGroup.add(bowlingPin4);

    bowlingPin5 = createSprite(randomX,randomY,20,20);
    bowlingPin5.addImage(bowlingPinImg);
    bowlingPin5.addAnimation("fall", pinDown);
    bowlingPin5.scale = 0.5;
    bowlingPinGroup.add(bowlingPin5);

    bowlingPin6 = createSprite(randomX,randomY,20,20);
    bowlingPin6.addImage(bowlingPinImg);
    bowlingPin6.addAnimation("fall", pinDown);
    bowlingPin6.scale = 0.5;
    bowlingPinGroup.add(bowlingPin6);

    bowlingPin7 = createSprite(randomX,randomY,20,20);
    bowlingPin7.addImage(bowlingPinImg);
    bowlingPin7.addAnimation("fall", pinDown);
    bowlingPin7.scale = 0.5;
    bowlingPinGroup.add(bowlingPin7);

    bowlingPin8 = createSprite(randomX,randomY,20,20);
    bowlingPin8.addImage(bowlingPinImg);
    bowlingPin8.addAnimation("fall", pinDown);
    bowlingPin8.scale = 0.5;
    bowlingPinGroup.add(bowlingPin8);

    bowlingPin9 = createSprite(randomX,randomY,20,20);
    bowlingPin9.addImage(bowlingPinImg);
    bowlingPin9.addAnimation("fall", pinDown);
    bowlingPin9.scale = 0.5;
    bowlingPinGroup.add(bowlingPin9);
}