var prev='O';
function disp(baseval)
{var x=document.getElementsByClassName("box");
	var x=document.getElementsByClassName("box");
	
	var y=baseval;
	if(x[y].innerHTML=="")
{
	x[y].innerHTML=prev;
	
	if(prev=="O")
	{
		prev="X";
	}
	else
	{
		prev="O";
	}
 }
    else
    {
    	alert("can't possible");
    }
   
   if(prev=="X")
	{
		var a=document.getElementById("o");
		var b=document.getElementById("x");
		a.style.backgroundColor="#AEA5A5";
		b.style.backgroundColor="#01E2FD";
		b.style.boxShadow=" 0px 0px 2px 2px red";
		a.style.boxShadow="none";
		
	}
	if(prev=="O")
	{
		var a=document.getElementById("o");
		var b=document.getElementById("x");
		b.style.backgroundColor="#AEA5A5";
		a.style.backgroundColor="#01E2FD";
		a.style.boxShadow=" 0px 0px 2px 2px red";
		b.style.boxShadow="none";
	}
	check();
	matchdraw();
	
}
function change()
{
	if(prev=='X')
	{
		var a=document.getElementById("o");
		var b=document.getElementById("x");
		a.style.backgroundColor="#AEA5A5";
		b.style.backgroundColor="#01E2FD";
	}
	if(prev=='O')
	{
		var a=document.getElementById("o");
		var b=document.getElementById("x");
		b.style.backgroundColor="#AEA5A5";
		a.style.backgroundColor="#01E2FD";
	}
}
function playagain()
{
	 prev='O';
	var x=document.getElementsByClassName("box");
for(var i=0;i<9;i++)
	{x[i].innerHTML="";
x[i].style.backgroundColor="#F8FB0C";
var a=document.getElementById("o");
		var b=document.getElementById("x");
		b.style.backgroundColor="#AEA5A5";
		a.style.backgroundColor="#01E2FD";
	var d=document.getElementById("result");
	d.style.display="none";
    var tbl=document.getElementsByTagName("table");
	
	tbl[0].style.opacity="1";
	b.style.boxShadow="none";a.style.boxShadow=" 0px 0px 2px 2px red";
    }
}

function check()
{
	var comb=[
[0,1,2],[3,4,5],[6,7,8],[0,3,6],[2,5,8],[1,4,7],[1,4,9],[0,4,8],[2,4,6]
];
     var cnt=0;
     for(var j=0;j<9;j++)
    {
     	var x=document.getElementsByClassName("box");
     if(x[comb[j][0]].innerHTML!=""||x[comb[j][1]].innerHTML!=""||x[comb[j][2]].innerHTML!="")
     {
     	if((x[comb[j][0]].innerHTML===x[comb[j][1]].innerHTML)&&(x[comb[j][1]].innerHTML===x[comb[j][2]].innerHTML))
     	{
     		x[comb[j][0]].style.backgroundColor="#F67F0B";
     		x[comb[j][1]].style.backgroundColor="#F67F0B";
     		x[comb[j][2]].style.backgroundColor="#F67F0B";
             display();
             reduce();
     	}
     }
   }
}

function display()
{
	var k;
	var d=document.getElementById("result");
	d.style.display="block";
	var tbl=document.getElementsByTagName("table");
	
	var n1=document.getElementById("new1");
	if(prev=="X")
		k="O";
	else
		k="X";
	n1.innerHTML="Player "+k +" Has Won";

}
function matchdraw()
{
	var tbl=document.getElementsByTagName("table");
	tbl[0].style.opacity="0.3";
	tbl[0].style.pointer="disable";
}
function reduce()
{
	var x=document.getElementsByClassName("box");
	var cnt=0;
	for(var i=0;i<9;i++)
	{
		if(x[i].innerHTML=='X'||x[i].innerHTML=='O')
		{
			cnt++;
		}
	}
	if(cnt==9)
	{
		var n1=document.getElementById("new1");
		var d=document.getElementById("result");
	d.style.display="block";
	   n1.innerHTML="Match Draw";
	   var tbl=document.getElementsByTagName("table");
	tbl[0].style.opacity="0.3";
	}
}
