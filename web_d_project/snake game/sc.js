var box=20;
var canv=document.getElementById("canvas");
var ctx=canv.getContext("2d");
var dir="down";
var l=document.getElementById("image");
var score=0;
var t=setInterval(draw,150);
var pause=0;
function drawsnake(x,y,color)
{
	


	{ctx.fillStyle=color;
		ctx.fillRect(x*box,y*box,box,box);
		ctx.fillStyle="black";
		ctx.strokeRect(x*box,y*box,box,box);}

}
var snake=[];
var len=10;
for(var i=len-1;i>=0;i--)
{
	snake.push({x:i,y:0});
}

//food create

	food={
		x:Math.round(Math.random()*19),
		y:Math.round(Math.random()*19)
	};
// var t=setInterval(draw,150);
function drawfood(a,b)
{
	// ctx.fillStyle="yellow";
	ctx.drawImage(l,a*20,b*20,box,box);
	// ctx.fillStyle="black";
	// ctx.strokeRect(a*box,b*box,box,box);

}
drawfood(food.x,food.y);
//collision chances

function draw()
{
	var pause=0;

ctx.clearRect(0,0,400,400);

for(var j=0;j<snake.length;j++)
{
	if(j!=0)
	drawsnake(snake[j].x,snake[j].y,"white");
if(j==0)
{
    drawsnake(snake[j].x,snake[j].y,"green");
}
}
var hx=snake[0].x;
var hy=snake[0].y;
document.addEventListener("keydown",control);

//controlling
function control(event)
{
    if(event.keyCode==37)
    {
    	if(dir!="right")
    	dir="left";
    	// alert("left");
    }
     if(event.keyCode==38)
    {
    	if(dir!="down")
    	dir="up";
    	// alert("up");
    }
     if(event.keyCode==39)
    {
    	if(dir!="left")
    	dir="right";
    	// alert("right");
    }
     if(event.keyCode==40)
    {
    	if(dir!="up")
    	dir="down";
    	// alert("down");
    }
}
if((dir=="left"))
{
	hx--;
}
else if((dir=="right"))
{
	hx++;
}
else if((dir=="up"))
{
	hy--;
}
 else if((dir=="down"))
{
	hy++;
}

head={ x:hx,
       y:hy};

drawfood(food.x,food.y);
if(food.x==hx&&food.y==hy)
{
	food={
		x:Math.round(Math.random()*19),
		y:Math.round(Math.random()*19)
	};
   drawfood(food.x,food.y);
   score++;

}
else
{
	snake.pop();
}
snake.unshift({x:hx,y:hy});
if(hx<0||hy<0||hx>19||hy>19||collision(snake))
	{
		// snake=[];
		var c=document.getElementById("canvas");
		c.style.opacity="0.3";
		 clearInterval(t);
        var b=document.getElementById("btn");
		b.style.display="block";
		var p=document.getElementById("popup");
		p.style.display="block";
		var r=document.getElementById("res");
		if(score==0)
		{
			r.innerHTML="Better Luck Next Time";
		}
		else if(score==1)
		{
			r.innerHTML="You have scored "+score+" point";
		}
		else
		{
			r.innerHTML="You have scored "+score+" points";
		}
		
	}
function collision(array)
{
	for(var k=1;k<array.length;k++)
	{
		if(array[0].x==array[k].x&&array[0].y==array[k].y)
		{

			return true;
		}
	}
	return false;
}
var sc=document.getElementById("score");
sc.innerHTML=score;
function click()
{
	if(pause==0)
	{
	 // var t=setInterval(draw,150);
		clearInterval(t);
      pause=1;alert("pressed");
	}
	else if(pause==1)
	{
		// setInterval(draw,150);
		var t=setInterval(draw,150);

		pause=0;
	}
}
}



	




// ctx.drawImage(snake1,0,0,400,400);
