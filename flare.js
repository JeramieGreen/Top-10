"use strict"

function pageRating(){
  let number = prompt("What do you rate your day from 1-5 star?");
  for(let star = 1; star <= number; star++ ){
    document.write("<img src='images/star.png'/>");
}}

function startUp(){
  
  let userName = prompt("Hi! What do you call yourself?");
  
  
  alert("Click through to see who got the top spot!");
  
  console.log(userName);
  let greeting = "Hey ";
  document.write(greeting +userName+ "Ready for This List, " + userName.toUpperCase() + "?!");
  pageRating();
}



  function whatever(){
    let currentHour = prompt("Who had the number one spot 'Locked-Down' on your playlist in 2020?");
return currentHour;
  }

/*  function displayStars(){
    let number = prompt("how many stars do you give this website?");
    for(let star = 1; star <= number; star++ ){
        document.write('<img src="images/star.png"/>');
    }*/


