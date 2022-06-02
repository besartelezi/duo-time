 const textAnimal = document.getElementById("Animal");
 const textBodacious = document.getElementById("bodacious");
 const textCelebrity = document.getElementById("celebrity");
 const clickButton = document.querySelector(".ClickButton");
 const display = document.getElementById("SlapCounter");
 // console.log(clickButton);


 let click = 0;
 clickButton.addEventListener("click", function () {
     clickerHolder ();
     onClick();
 });















// Get Random Image
let imageArray = [("https://images.unsplash.com/photo-1637323988659-8e5cc44d41b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1860&q=80"),
    ("https://images.unsplash.com/photo-1653866576648-a8ca4c79a35c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1296&q=80"),
    ("https://images.unsplash.com/photo-1653576281207-e87164566281?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"),
    ("https://images.unsplash.com/photo-1653660511035-d8525eac7ff7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"),
    ("https://images.unsplash.com/photo-1653383726851-46c29be94b3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80")

];

 function onClick()
 {
     const randomIndex = Math.floor(Math.random() * imageArray.length);
     document.querySelector(".ClickButton").src = imageArray[randomIndex];
     clickButton.style.borderRadius = "50%";
     clickButton.style.width = "237px";
     clickButton.style.width = "237px";
     // console.log(randomIndex);
 }


 //Click Holder
 function clickerHolder () {
     click += 1;
     display.innerHTML = click ;
 }



textCelebrity.addEventListener("mouseover", function () {
    console.log(onmouseover);
    textCelebrity.innerHTML = "Cameron Diaz"
    textCelebrity.style.border = "3px solid red";
})



 textBodacious.addEventListener("mouseover", function (){
    textBodacious.innerHTML = "Loyal";
    textBodacious.style.backgroundColor = "red";
})


textAnimal.addEventListener("mouseover", function (e) {
   textAnimal.innerHTML = "King penguin";
   textAnimal.style.color = "red";
})

