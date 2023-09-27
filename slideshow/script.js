var currentIndex = 0;
var images = document.getElementsByTagName("img");
var count = images.length;
var inter;

function showNextImage() {
    images[currentIndex].style.display = "none";
    currentIndex = (currentIndex + 1) % count;
    images[currentIndex].style.display = "block";
}

function show(){
   inter= setInterval(showNextImage, 1000); 

}

function stop(){
    clearInterval(inter); 
}

function next(){
images[currentIndex].style.display="none";
currentIndex = currentIndex + 1;
if(currentIndex>=count)
currentIndex=0;
images[currentIndex].style.display="block";

}

function back(){
images[currentIndex].style.display="none";
currentIndex = currentIndex - 1;
if(currentIndex<0)
currentIndex=count-1;
//    currentIndex=Math.abs(currentIndex)
images[currentIndex].style.display="block";

}