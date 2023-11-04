function reveal1() {
    var revealss = document.querySelectorAll(".cs");
  
    for (var i = 0; i < revealss.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = revealss[i].getBoundingClientRect().top;
      var elementVisible = 250;
  
      if (elementTop < windowHeight - elementVisible) {
        revealss[i].classList.add("active");
      } else {
        revealss[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal1);




// ***************************************
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  

// box1

function box1(){
    var boxone = document.querySelectorAll(".revealbox1");
    for(var i = 0; i<boxone.length; i++){
        var windowHeight = window.innerHeight;
        var elementTop = boxone[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if(elementTop < windowHeight - elementVisible){
            boxone[i].classList.add("active");
        }
        else
        {
            boxone[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", box1());

// box2
function box2(){
    var boxtwo = document.querySelectorAll(".revealbox2");
    for(var i = 0; i<boxtwo.length; i++){
        var windowHeight = window.innerHeight;
        var elementTop = boxtwo[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if(elementTop < windowHeight - elementVisible){
            boxtwo[i].classList.add("active");
        }
        else
        {
            boxtwo[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", box2());

// box3
function box3(){
    var boxthree = document.querySelectorAll(".revealbox3");
    for(var i = 0; i<boxthree.length; i++){
        var windowHeight = window.innerHeight;
        var elementTop = boxthree[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if(elementTop < windowHeight - elementVisible){
            boxthree[i].classList.add("active");
        }
        else
        {
            boxthree[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", box3());

// box4
function box4(){
    var boxfour = document.querySelectorAll(".revealbox4");
    for(var i = 0; i<boxfour.length; i++){
        var windowHeight = window.innerHeight;
        var elementTop = boxfour[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if(elementTop < windowHeight - elementVisible){
            boxfour[i].classList.add("active");
        }
        else
        {
            boxfour[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", box4());

//for section 3 image1
//
function image1(){
    var imagis = document.querySelectorAll(".imagi");
    for(var i = 0; i<imagis.length; i++){
        var windowHeight = window.innerHeight;
        var elementTop = imagis[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if(elementTop < windowHeight - elementVisible){
            imagis[i].classList.add("active");
        }
        else
        {
            imagis[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", image1());


// // imagi1
function imagi11(){
    var imagis11 = document.querySelectorAll(".imagi1");
    for(var i = 0; i<imagis11.length; i++){
        var windowHeight = window.innerHeight;
        var elementTop = imagis11[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if(elementTop < windowHeight - elementVisible){
            imagis11[i].classList.add("active");
        }
        else
        {
            imagis11[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", imagi11());


// // imagi2
// function imagi22(){
//     var imagis22 = document.querySelectorAll(".imagi2");
//     for(var i = 0; i<imagis22.length; i++){
//         var windowHeight = window.innerHeight;
//         var elementTop = imagis22[i].getBoundingClientRect().top;
//         var elementVisible = 150;
//         if(elementTop < windowHeight - elementVisible){
//             imagis22[i].classList.add("active");
//         }
//         else
//         {
//             imagis22[i].classList.remove("active");
//         }
//     }
// }
// window.addEventListener("scroll", imagi22());

