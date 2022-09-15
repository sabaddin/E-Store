

let categories = document.querySelector(".categories");

AOS.init();


// ---------------All Catogory --------------------
categories.addEventListener("click", myFun);
    
  function myFun() {
    var x = document.querySelector("#myDrpdown");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  let chatbtn = document.querySelector(".chat_btn")

  function btnFunc() {
    var x = document.querySelector(".message");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }




// ---------------Pass Right --------------------
  let pass_right_text = document.querySelector(".pass_right_text");
  let passright = document.querySelector(".passright").addEventListener("click", myFunctio);



  function myFunctio() {
    var x = document.querySelector(".pass_right_text");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }


// passright.addEventListener("mouseover", mouseOver);

// function mouseOver(){
//     document.querySelector(".pass_right_text").style.display = "block"
   
// }
// passright.addEventListener("mouseout", mouseOut);
// function mouseOut(){
//     document.querySelector(".pass_right_text").style.display = "none"
// }




