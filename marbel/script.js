var ind=0;
var images=document.getElementsByClassName("M");
var s;

function startMar(){
    var temp=images[ind].src;
    images[ind].src=images[(ind+1)%images.length].src;
    images[(ind+1)%images.length].src=temp;
    ind=(ind+1)%images.length;
}

function moveImg(){
   s=setInterval(startMar,1000);
}

function stop(){
    clearInterval(s);
}