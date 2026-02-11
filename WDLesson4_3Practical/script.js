/* Challenge 2: Create a function to ,
       1) Calculate and display the BMI.  Look up the formula which you should have done in Challenge 1
       2) Display BMI status as per the chart in index.html
       3) Display the corresponding image based on the BMI status.
*/
/* 
Guideline:
1) Create the function
2) Get the information from the UI
3) Perform the necessary calculation.
4) Make the appropriate decisions.  Store the appropriate BMI status.  Store the appropriate filename for the image.
5) Display the output

Use past examples, classwork and practicals to assist you in completing this practical.
*/
function calculateBMI() {
    let weight = parseFloat(document.getElementById("weightInput").value);
    let height = parseFloat(document.getElementById("heightInput").value);
    let bmi = weight / (height) ** 2 * 10000;
    let imageFile = 'bmi.jpg';
    let op = document.getElementById("output");

    if (bmi < 18.5) {
        status = 'Underweight';
        imageFile = 'underweight.png';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        status = 'Healthy Weight';
        imageFile = 'healthyweight.png';  
    } else if (bmi >= 25 && bmi < 29.9) {
        status = 'Overweight';
        imageFile = 'overweight.png'; 
    } else {
        status = 'Obese';
        imageFile = 'obeseweight.png';
    }

    op.innerHTML = `Your BMI is ${bmi.toFixed(2)} (${status}) <br><img src="${imageFile}" alt="${status}">`;
}      

