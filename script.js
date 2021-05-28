
 var start=1;
 function toggle()
      {
        var blur=document.getElementById('products');
        var blur1=document.getElementById('no');
        var blur2=document.getElementById('bitt');
        blur.classList.toggle('active');
        blur1.classList.toggle('active');
        blur2.classList.toggle('active');
          var x=document.getElementsByClassName('contents');
           
           x[0].style.display="block";
            x[0].style.opacity="1";
           


          
      }
      function closepurchase1()
      {
       
        var x=document.getElementsByClassName('contents');
           x[0].style.display="none";
           var blur=document.getElementById('products');
        var blur1=document.getElementById('no');
        var blur2=document.getElementById('bitt');
        blur.classList.toggle('active');
        blur1.classList.toggle('active');
        blur2.classList.toggle('active');

      }
       function closepurchase()
      {
       var blur=document.getElementById('products');
        var blur1=document.getElementById('no');
        var blur2=document.getElementById('bitt');
        blur.classList.toggle('active');
        blur1.classList.toggle('active');
        blur2.classList.toggle('active');
        var x=document.getElementsByClassName('contents');
           x[0].style.display="none";

      }
function change()
{
	var img=document.getElementById("image");
	if(start==1)
	{
		img.src="theme8.png";
		start++;
	}
	else if(start==2)
	{

		img.src="theme7.jpg";
		start++;
	}
	else if(start==3)
	{
		img.src="theme10.jpg";
		start++;
	}
	else if(start==4)
	{
		img.src="theme12.jpg";
		start++;
	}
	else if(start==5)
	{
		img.src="theme6.jpg";
		start=1;
	}
 
}
document.getElementById("bdy").addEventListener("load",hello);

function hello()
{
    debugger
    var cart_val = parseInt(sessionStorage.getItem('CartCount'));
    document.getElementById("number").innerHTML = (cart_val > 0) ? cart_val : 0;
}
function setcartvalue()
{
    if( localStorage.getItem("loadew")=='1')
    {
        document.getElementById("number").innerHTML=localStorage.getItem("textvalues");
        document.getElementById("no").innerHTML=localStorage.getItem("cartvalues");
        
        localStorage.removeItem("loadew");
        localStorage.removeItem("cartvalue");
        localStorage.removeItem("textvalue");
        
    }
}
setInterval(setcartvalue,100);

var m=document.getElementsByClassName('shop-item-image');
for(var i=0;i<m.length;i++)
{
    m[i].addEventListener("onclick",hello());
}
function setitems()
{
   localStorage.setItem("textvalues",document.getElementById("number").innerHTML);
   localStorage.setItem("cartvalues",document.getElementById("no").innerHTML);
}


var yourcart=0;

function showcart()
{
	var k=document.getElementsByClassName("content-section");
  var m=document.getElementById("bitt");
    if(yourcart==0)
    {
       k[0].style.display="block";
       yourcart=1;
       
    }
    else
    {
    	 k[0].style.display="none";
       yourcart=0;
    }
    
}
function removecart()
{
var k=document.getElementsByClassName("content-section");
var m=document.getElementById("bitt");
    {
    	 k[0].style.display="none";
       yourcart=0;
       m.style.marginTop="0px";
    }
}
function load()
{setInterval(change,2000);
   
     
}

function display(j)
{
	var y=document.getElementsByClassName("cart");
	y[j].style.display="block";
}
function overdisplay(j)
{
	var y=document.getElementsByClassName("cart");
	y[j].style.display="none";
}

var tracerm=1;
		var one=document.getElementById("first");
		var two=document.getElementById("second");
		var three=document.getElementById("third");
		function slidemobile(j)
		{
            if(j==1)
            {
            	if(tracerm==3)
            	{
            		tracerm=1;
            	}
            	else
            	tracerm++;
            	if(tracerm==1)
            	{
            		one.style.display="block";
            		two.style.display="none";
            		three.style.display="none";
            		// alert("hello");
            	}
            	else if(tracerm==2)
            	{
            		one.style.display="none";
            		two.style.display="block";
            		three.style.display="none";
            		// alert("hello");
            	}
            	else if(tracerm==3)
            	{
            		one.style.display="none";
            		two.style.display="none";
            		three.style.display="block";
            		// alert("hello");
            	}
            }
            if(j==2)
            {
            	if(tracerm==1)
            	{
            		tracerm=3;
            	}
            	else
            	tracerm--;
            	if(tracerm==1)
            	{
            		one.style.display="block";
            		two.style.display="none";
            		three.style.display="none";
            		// alert("hello");
            	}
            	else if(tracerm==2)
            	{
            		one.style.display="none";
            		two.style.display="block";
            		three.style.display="none";
            		// alert("hello");
            	}
            	else if(tracerm==3)
            	{
            		one.style.display="none";
            		two.style.display="none";
            		three.style.display="block";
            		// alert("hello");
            	}
            }
		}
		var tracers=1;
		var seven=document.getElementById("seventh");
		var eight=document.getElementById("eigth");
		var nine=document.getElementById("ninth");
		function slidesofa(j)
		{
            if(j==1)
            {
            	if(tracers==3)
            	{
            		tracers=1;
            	}
            	else
            	tracers++;
            	if(tracers==1)
            	{
            		seven.style.display="block";
            		eight.style.display="none";
            		nine.style.display="none";
            		// alert("hello");
            	}
            	else if(tracers==2)
            	{
            		seven.style.display="none";
            		eight.style.display="block";
            		nine.style.display="none";
            		// alert("hello");
            	}
            	else if(tracers==3)
            	{
            		seven.style.display="none";
            		eight.style.display="none";
            		nine.style.display="block";
            		// alert("hello");
            	}
            }
            if(j==2)
            {
            	if(tracers==1)
            	{
            		tracers=3;
            	}
            	else
            	tracers--;
            	if(tracers==1)
            	{
            		seven.style.display="block";
            		eight.style.display="none";
            		nine.style.display="none";
            		// alert("hello");
            	}
            	else if(tracers==2)
            	{
            		seven.style.display="none";
            		eight.style.display="block";
            		nine.style.display="none";
            		// alert("hello");
            	}
            	else if(tracers==3)
            	{
            		seven.style.display="none";
            		eight.style.display="none";
            		nine.style.display="block";
            		// alert("hello");
            	}
            }
		}
		var tracertv=1;
		var four=document.getElementById("fourth");
		var five=document.getElementById("fifth");
		var six=document.getElementById("sixth");
		function slidetv(j)
		{
            if(j==1)
            {
            	if(tracertv==3)
            	{
            		tracertv=1;
            	}
            	else
            	tracertv++;
            	if(tracertv==1)
            	{
            		four.style.display="block";
            		five.style.display="none";
            		six.style.display="none";
            		// alert("hello");
            	}
            	else if(tracertv==2)
            	{
            		four.style.display="none";
            		five.style.display="block";
            		six.style.display="none";
            		// alert("hello");
            	}
            	else if(tracertv==3)
            	{
            		four.style.display="none";
            		five.style.display="none";
            		six.style.display="block";
            		// alert("hello");
            	}
            }
            if(j==2)
            {
            	if(tracertv==1)
            	{
            		tracertv=3;
            	}
            	else
            	tracertv--;
            	if(tracertv==1)
            	{
            		four.style.display="block";
            		five.style.display="none";
            		six.style.display="none";
            		// alert("hello");
            	}
            	else if(tracertv==2)
            	{
            		four.style.display="none";
            		five.style.display="block";
            		six.style.display="none";
            		// alert("hello");
            	}
            	else if(tracertv==3)
            	{
            		four.style.display="none";
            		five.style.display="none";
            		six.style.display="block";
            		// alert("hello");
            	}
            }
		}
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger');
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i];
        button.addEventListener('click', removeCartItem);
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input');
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }

    var addToCartButtons = document.getElementsByClassName('shop purchaseClicked-item-button');
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i];
        button.addEventListener('click', addToCartClicked);
    }

    // document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked);

}
function addToCartClicked(x) {
    // var button = event.target
    // var shopItem = button.parentElement.parentElement
    var title = document.getElementsByClassName('shop-item-title')[x].innerText;
    var price = document.getElementsByClassName('shop-item-price')[x].innerText;
    var imageSrc = document.getElementsByClassName('shop-item-image')[x].src;
    addItemToCart(title, price, imageSrc,x);
    updateCartTotal();
    changecarts(1);
}

function addItemToCart(title, price, imageSrc,x) {
    debugger
    var cartRow = document.createElement('div');
    cartRow.classList.add('cart-row');
    var cartItems = document.getElementsByClassName('cart-items')[0];
    var cartItemNames = document.getElementsByClassName('cart-item-title');
    // for (var i = 0; i < cartItemNames.length; i++) {
    //     if (cartItemNames[i].innerText == title) {
    //         alert('This item is already added to the cart');
    //         return
    //     }
    // }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1" disabled >
            <button class="btn btn-danger" type="button" onclick="removeCartItem(this)">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
    // cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem);
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged);
}
function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0];
    var cartRows = cartItemContainer.getElementsByClassName('cart-row');
    var total = 0;
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName('cart-price')[0];
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
        var price = parseFloat(priceElement.innerText.replace(',', ''));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
    }
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName('cart-total-price')[0].innerText =  "₹"+" "+ total;

    hello();
}
function purchaseClicked() {
    
    
    var cartItems = document.getElementsByClassName('cart-items')[0];
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild);
    }
         var n=document.getElementById("number");
     n.innerHTML='0';
      sessionStorage.setItem('CartCount', 0);
       updateCartTotal();
        var asdf=document.getElementsByClassName("btn-purchase");
      toggle();
}

function removeCartItem(event) {
    var buttonClicked = event;
    alert("remove clicked");
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
    changecarts(-1);
}

function quantityChanged(event) {
    debugger

    var input = event.target.value;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateCartTotal();
}
function changecarts(x)
{
     var n=document.getElementById("number");
     sessionStorage.setItem('CartCount', parseInt(n.innerHTML)+x);
     n.innerHTML=parseInt(n.innerHTML)+x;
}
$('.shop-item-button').on('click', function () {
        var cart = $('.shopping-cart');
        var imgtodrag = $(this).parent('.inline').find(".shop-item-image").eq(0);
        if (imgtodrag) {
            var imgclone = imgtodrag.clone()
                .offset({
                top: imgtodrag.offset().top,
                left: imgtodrag.offset().left
            })
                .css({
                'opacity': '0.8',
                    'position': 'absolute',
                    'height': '150px',
                    'width': '80px',
                    'z-index': '100'
            })
                .appendTo($('body'))
                .animate({
                'top': cart.offset().top + 10,
                    'left': cart.offset().left + 10,
                    'width': 70,
                    'height': 100
            }, 1000, 'easeInOutExpo');
            
            setTimeout(function () {
                cart.effect("shake", {
                    times: 2
                }, 200);
            }, 1500);

            imgclone.animate({
                'width': 0,
                    'height': 0
            }, function () {
                $(this).detach()
            });
        }
    });   

     