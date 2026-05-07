function init(){
  //For all challenges use the function display( ) in order to output the results to the console and the webpage. 
  // The example below calls the function randint() and displays the value returned by it in the console and page.
  let secret = randint(1,10);
  display(secret);
  
  //Challenge 1: Use the function area( ) created in helper.js to display the area of any rectangle of your choice of dimensions.
function area( length, width){
  return length * width;
}
display(`Area: ${area(5, 3)}`);


  //Challenge 2: Use the function celsius( ) created in helper.js to show the Celsius equivalent of any Fahrenheit temperature. 
function celsius( temp ){
  return (temp - 32) * 5 / 9;
}
display(`Celsius: ${celsius(68)}`);

  //Challenge 4: Set height and weight to appropriate numbers. Pass the variables as arguments to the bmi() function defined in Challenge 3.
  // Store the result in a variable called b. Display the value of b.
  let height;
  let weight;
  let b;
  height = 1.75;
  weight = 70;
function bmi( height, weight){
  return weight / (height * height);
}
b = bmi(height, weight);
display(`BMI: ${b}`);


  //Challenge 6:  Pass the value b from challenge 4 to the bmiCategory() function and store in a variable bc.  Display the BMI category returned by bmiCategory().
function bmiCategory( bmi ){
  if (bmi < 18.5){
    return "underweight";
  } else if (bmi >= 18.5 && bmi < 25){
    return "normal weight";
  } else if (bmi >= 25 && bmi < 30){
    return "overweight";
  } else {
    return "obese";
  }
}
let bc = bmiCategory(b);
display(bc);


  
  //Challenge 8: Call lottery() with some number and display the results.
display(`Lottery numbers: ${lottery(5)}`);



  //Challengen 10: Create an array survey which contains several "Y" and "N" items. Pass this survey array to the function results( ) and display the value returned.
let survey = ["Y", "N", "Y", "Y", "N"];
display(`Survey results: ${results(survey)}`);

  
}

