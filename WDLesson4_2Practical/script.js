// General Guideline
/*
function name(){
  // Step 1: Create variables for the information from the text inputs and the output element

  // Step 2: Complete the process
  //    a) Perform any calculations necessary
  //    b) Perform necessary decisions

  // Step 3: Display the output

}
*/

/* Challenge 2:  Create the function for Challenge 1 scenario */
function Area(){
  let length = parseFloat(document.getElementById("length").value);
  let width = parseFloat(document.getElementById("width").value);
  let output = document.getElementById("output");
  let area = length * width;

  if(length || width <= 0){
    output.innerHTML = "Inappropriate measurement";
  }else{
    output.innerHTML = `The area of the rectangle is ${area} square units.`;
  }
}



/* Challenge 3:  Complete the function for Pets Challenge on pets.html.  
1) Review the HTML for the UI.  Remember dropdown boxes are just input.
2) You will need to write HTML as part of the output.  
   For example, output.innerHTML = `<input src="pic.png">` would place the image in the <div>*/
function pet(){
  let animal = document.getElementById("animal").value;
  let emotion = document.getElementById("emotion").value;
  let output = document.getElementById("output");

  if(animal === "Cat" && emotion === "Funny"){
    output.innerHTML = `<img src="funnyCat.jpg">`;
  }else if(animal === "Cat" && emotion === "Sad"){
    output.innerHTML = `<img src="sadCat.jpg">`;
  }else if(animal === "Dog" && emotion === "Funny"){
    output.innerHTML = `<img src="funnyDog.jpg">`;
  }else if(animal === "Dog" && emotion === "Sad"){
    output.innerHTML = `<img src="sadDog.jpg">`;
  }else if(animal === "Bear" && emotion === "Funny"){
    output.innerHTML = `<img src="funnyBear.jpg">`;
  }else if(animal === "Bear" && emotion === "Sad"){
    output.innerHTML = `<img src="sadBear.jpg">`;
  }
}