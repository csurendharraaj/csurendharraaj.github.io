let canvas=document.getElementById('game');
let context=canvas.getContext('2d')

let speed=50;
let score=0;
let snakeLength=0;

let blockX=0;
let blockY=0;
let bxv=0;
let byv=0;
 
let bx1;
let by1;
let bxv1;
let byv1;

let bx2;
let by2;
let bxv2;
let byv2;

let sx=200;
let sy=275;
let sxv=0;
let syv=0;

let ax1=200;
let ay1=200;
let axv1=0;
let ayv1=0;

let ax2=100;
let ay2=150;
let axv2=0;
let ayv2=0;

let ax3=275;
let ay3=100;
let axv3=0;
let ayv3=0;

let a1=Math.floor(Math.random()*5+1);
let a2=Math.floor(Math.random()*5+1);
let a3=Math.floor(Math.random()*5+1);

let b1=Math.floor(Math.random()*10+1);
let b2=Math.floor(Math.random()*10+1);
let b3=Math.floor(Math.random()*10+1);
let b4=Math.floor(Math.random()*10+1);

let bd1=b1;
let bd2=b2;
let bd3=b3;
let bd4=b4;

let subb1=0;
let subb2=0;

let subbd1=subb1;
let subbd2=subb2;


let i=Math.floor(Math.random()*5);

let redCount;
if(i==0){
    redCount=4;
}
else{
    redCount=3;
}

let sound=new Audio('greensound.mp3');
let rsound=new Audio('redsound.mp3');

let tileCount=20;
let tileSize=canvas.width/tileCount;

function game(){
    
    clearScreen();
    if(gameOver()){
        
        context.fillStyle='white';
        context.font='50px verdana';
        context.fillText('GAME OVER',50,200);
        document.getElementById('playagain').style.display='block';
        
        return;
    }
    if(score>20){
        speed=100;
    }
    if(score>50){
        speed=150;
    }
    createBlocks();
    
    checkBlocks();

    createApple1();
    createApple2();
    createApple3();

    checkApple1();
    checkApple2();
    checkApple3();

    createSnake();

    checkCoincidence();
    
    displayScore();
    
    
    setTimeout(game,1000/speed)
}
function gameOver(){
    if(snakeLength<0){
        return true;

    }
}

function clearScreen(){
    context.fillStyle='black';
    context.fillRect(0,0,canvas.width,canvas.height);
}

function createBlocks(){
    context.fillStyle='red';
    context.fillRect(bx1,by1,tileSize*2,tileSize);
    context.fillStyle='white';
    context.font='15px verdana';
    context.fillText(subbd1,bx1+15,by1+15);
    
    

    context.fillStyle='red';
    context.fillRect(bx2,by2,tileSize*2,tileSize);
    context.fillStyle='white';
    context.font='15px verdana';
    context.fillText(subbd2,bx2+15,by2+15);
    
    
    if(i!=1){
        context.fillStyle='red';
        context.fillRect(blockX,blockY,tileSize*5,tileSize);
        context.fillStyle='white';
        context.font='15px verdana';
        context.fillText(bd1,blockX+50,blockY+15);
        
    }
    if(i!=2){
        context.fillStyle='red';
        context.fillRect(blockX+(5*tileCount)+5,blockY,tileSize*5,tileSize);
        context.fillStyle='white';
        context.font='15px verdana';
        context.fillText(bd2,blockX+(5*tileCount)+5+50,blockY+15); 
       
    
    }
    if(i!=3){  
        context.fillStyle='red';  
        context.fillRect(blockX+(10*tileCount)+10,blockY,tileSize*5,tileSize);
        context.fillStyle='white';
        context.font='15px verdana';
        context.fillText(bd3,blockX+(10*tileCount)+10+50,blockY+15);
       
    }
    if(i!=4){
        context.fillStyle='red';
        context.fillRect(blockX+(15*tileCount)+15,blockY,tileSize*5,tileSize);
        context.fillStyle='white';
        context.font='15px verdana';
        context.fillText(bd4,blockX+(15*tileCount)+15+50,blockY+15);
       
    }

    
}



function checkBlocks(){
    blockX=blockX+bxv;
    blockY=blockY+byv;
    bx1=bx1+bxv1;
    by1=by1+byv1;
    bx2=bx2+bxv2;
    by2=by2+byv2;
    if(blockY==canvas.width){
        blockX=0;
        blockY=0;
        
        if(redCount==8 && i!=1){
            bd1='***';
            b1=1000;
            redCount=1;
        }
        else if(i!=1){
            b1=Math.floor(Math.random()*10+1);
            bd1=b1;
            redCount++;
           
        }
        if(redCount==8 && i!=2){
            bd2='***';
            b2=1000;
            redCount=1;
        }
        else if(i!=2){
            b2=Math.floor(Math.random()*10+1);
            bd2=b2;
            redCount++;
        }
        if(redCount==8 && i!=3){
            bd3='***';
            b3=1000;
            redCount=1;
            
        }
        else if(i!=3){

            b3=Math.floor(Math.random()*10+1);
            bd3=b3;
            redCount++;
        }
        if(redCount==8 && i!=4){
            bd4='***';
            b4=1000;
            redCount=1;
        }
        else if(i!=4){
            b4=Math.floor(Math.random()*10+1);
            bd4=b4;
            redCount++;
        }

        i=Math.floor(Math.random()*5);
        
        
    }
    
    if(blockY==7*tileCount){
        bx1=Math.floor(Math.random()*300);
        by1=0;
        bxv1=0;
        byv1=1;
        if(redCount==8){
            subb1=1000;
            subbd1='**';
            redCount=1;
        }
        else{
            subb1=Math.floor(Math.random()*10+1);
            subbd1=subb1;
            redCount++;
        }
    }
    if(blockY==13*tileCount){
        bx2=Math.floor(Math.random()*300);
        by2=0;
        bxv2=0;
        byv2=1;
        if(redCount==8){
            subb2=1000;
            subbd2='**';
            redCount=1;
        }
        else{
            subb2=Math.floor(Math.random()*10+1);
            subbd2=subb2;
            redCount++;
        }    
    }
    if(blockY==5*tileCount){
        ax1=Math.floor(Math.random()*380);
        ay1=0;
        axv1=0;
        ayv1=1;
        a1=Math.floor(Math.random()*5+1);
    }
    if(blockY==10*tileCount){
        ax2=Math.floor(Math.random()*380);
        ay2=0;
        axv2=0;
        ayv2=1;
        a2=Math.floor(Math.random()*5+1);
    }
    if(blockY==15*tileCount){
        ax3=Math.floor(Math.random()*380);
        ay3=0;
        axv3=0;
        ayv3=1;
        a3=Math.floor(Math.random()*5+1);
    }
    
}



function createApple1(){
    
    context.fillStyle='green';
    context.fillRect(ax1,ay1,tileSize-2,tileSize-2);
    context.fillStyle='white';
    context.font='15px verdana';
    context.fillText(a1,ax1+5,ay1+15);
}
function createApple2(){
    context.fillStyle='green';
    context.fillRect(ax2,ay2,tileSize-2,tileSize-2);
    context.fillStyle='white';
    context.font='15px verdana';
    context.fillText(a2,ax2+5,ay2+15);
}
function createApple3(){
    context.fillStyle='green';
    context.fillRect(ax3,ay3,tileSize-2,tileSize-2);
    context.fillStyle='white';
    context.font='15px verdana';
    context.fillText(a3,ax3+5,ay3+15);
}



function checkApple1(){
    ax1=ax1+axv1;
    ay1=ay1+ayv1;
}
function checkApple2(){
    ax2=ax2+axv2;
    ay2=ay2+ayv2;
}
function checkApple3(){
    ax3=ax3+axv3;
    ay3=ay3+ayv3;
}


function createSnake(){
    context.fillStyle='yellow';
    context.fillRect(sx,sy,tileSize-2,tileSize+(5*snakeLength));
    context.fillStyle='red';
    context.font='12px verdana';
    context.justify='centre';
    context.fillText(snakeLength,sx+3,sy+15);
}




function checkCoincidence(){
    if(ax1-tileSize+4<=sx && ax1+tileSize-2>sx &&ay1==sy){
        score=score+a1;
        snakeLength=snakeLength+a1;
        sound.play();
    }
    if(ax2-tileSize+4<=sx && ax2+tileSize-2>sx &&ay2==sy){
        score=score+a2;
        snakeLength=snakeLength+a1;
        sound.play();
    }
    if(ax3-tileSize+4<=sx && ax3+tileSize-2>sx &&ay3==sy){
        score=score+a3;
        snakeLength=snakeLength+a1;
        sound.play();
    }
    if(blockX<=sx && blockX+(5*tileCount)>=sx && blockY==sy && i!=1){
        snakeLength=snakeLength-b1;
        rsound.play();
    }
    if(blockX+(5*tileCount)+5<=sx && blockX+(10*tileCount)+5>=sx && blockY==sy && i!=2){
        snakeLength=snakeLength-b2;
        rsound.play();
    }
    if(blockX+(10*tileCount)+10<=sx && blockX+(15*tileCount)+10>=sx && blockY==sy && i!=3){
        snakeLength=snakeLength-b3;
        rsound.play()
    }
    if(blockX+(15*tileCount)+15<=sx && canvas.width>=sx && blockY==sy && i!=4){
       snakeLength=snakeLength-b4;
        rsound.play();
    }
    if(bx1-tileSize+2<=sx && bx1+(2*tileCount)>=sx && by1==sy ){
        snakeLength=snakeLength-subb1;
        rsound.play();

    }
    if(bx2-tileSize+2<=sx && bx2+(2*tileCount)>sx && by2==sy){
        snakeLength=snakeLength-subb2;
        rsound.play();
    }
    
}

function displayScore(){
    document.getElementById('score').innerHTML='SCORE:'+score;
}


document.body.addEventListener('keydown',keys);
function keys(event){
    if(event.keyCode==13){
        bxv=0;
        byv=1;
        byv1=1;
        byv2=1;
        ayv1=1;
        ayv2=1;
        ayv3=1;
    }
    if(event.keyCode==37){
        sxv=-5;
        syv=0;
        sx=sx+sxv;
    }
    if(event.keyCode==39){
        sxv=5;
        syv=0;
        sx=sx+sxv;
    }
}


game()