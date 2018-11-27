var myImages =["https://addapinch.com/wp-content/uploads/2013/01/chocolate-cake-DSC_1788.jpg", "https://www.thelittleepicurean.com/wp-content/uploads/2017/08/espresso-chocolate-cake-3.jpg","https://www.twopeasandtheirpod.com/wp-content/uploads/2018/05/Easy-Chocolate-Cake-8.jpg","http://www.delscookingtwist.com/wp-content/uploads/2016/03/Healthy-Extra-Moist-Chocolate-Cake_0488-715x1024.jpg","https://www.lifeloveandsugar.com/wp-content/uploads/2017/10/Chocolate-Mousse-Cake4.jpg"];


var captionImages =["Yum","Yum","Yum","Yum","Yum"];

 var index=0; 

 function updateImage(){
 document.getElementById("slideshow").src = myImages[index];
 document.getElementById("slideshow").alt= captionImages[index];
 document.getElementById("caption").textContent = captionImages[index]; 
} 

function next(){
 if (myImages.length == index+1)
 index=0;
 else
 index++;
 updateImage();
} 
 

function back(){
 if (index===0)
 index=myImages.length-1;
 else
 index--;
 
 updateImage();
} 

var nextButton = document.getElementById("next"); 
var previousButton = document.getElementById("previous"); 

previousButton.addEventListener("click",back,false);
nextButton.addEventListener("click",next,false); 
function autoSlide(){
if (document.getElementById("auto").checked)
 next(); 
}


setInterval(autoSlide,2000); // Next
