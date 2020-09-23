
// Footer menu animation on Hover --
var footerMenu = document.querySelectorAll(".footer-menu li");

for(var i = 0; i< footerMenu.length;i++){
    footerMenu[i].addEventListener("mouseover", function(){
       this.style.color = "red";
       this.style.transition = "ease-in-out";
       this.lastChild.style.color = "red";
       this.lastChild.style.transition = "ease-in-out";
    })

    footerMenu[i].addEventListener("mouseout", function(){
        this.style.color = "white";
        this.lastChild.style.color = "white";
     })
}
// footer menu animation -- end

// slider function
var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  // Line bellow fix the warning on browser --undefined--
  if ( x[slideIndex-1] !== undefined) {
   x[slideIndex-1].style.display = "block";
   setTimeout(carousel, 4000);
 }
 
}
// slider function -- end

var menu = document.getElementById("main-menu-mobile");
var menuBtn = document.getElementById("#mobile-menu");   

   menu.style.display = "none";
function toggleDisplay() {

   console.log(menuBtn);

   if(menu.style.display ==="flex"){
      menu.style.display = "none";
   }else{
      menu.style.display = "flex";
   }
}

function checkBooking(){
   event.preventDefault();
   alert("Sorry but all rooms are booked on the specified days.")
}

function customersupportFunction() {
   alert("Thanks for your queries..");
}

function sharefeedbackFunction() {
   alert("Feedback form submitted sucessfully..");
}

function bookingFunction() {
   alert("Booking details submiited sucessfully..");
}

function contactFunction() {
   alert("Contact details submitted sucessfully..");
}