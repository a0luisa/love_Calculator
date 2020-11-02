


function calculate(){

  var match=Math.round(Math.random()*100+1);
  if (match>=80){
    var score="Your score is " +match+"%, you are perfect for each other";
  }
  else if (match<79 && match>50){
    var score="Your score is " +match+"%, you found your other half";
  }
  else{
    var score="Your score is " +match+"%";
  }
  prompt("What is your name?");
  prompt("What is your crush's name?");
  document.querySelector("h3").innerHTML=score;

}
