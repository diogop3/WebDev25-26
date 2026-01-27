/* Challenge 2: Create a function to serve as the event handler for the distance UI. Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 1.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
function distance(){
      let x2 = parseFloat(document.getElementById("X2").value);
      let x1 = parseFloat(document.getElementById("X1").value);
      let y2 = parseFloat(document.getElementById("Y2").value);
      let y1 = parseFloat(document.getElementById("Y1").value);
      let d = Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,2));
      let op = document.getElementById("output");
      op.innerHTML=`The distance between points (${x1}, ${y1}) and (${x2}, ${y2}) is ${d}`;
}
/* Challenge 4: Create a function to serve as the event handler for the compound interest UI. Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 1.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
function compoundInterest(){
      let p = parseFloat(document.getElementById("P").value);
      let r = parseFloat(document.getElementById("R").value);
      let n = parseFloat(document.getElementById("N").value);
      let t = parseFloat(document.getElementById("T").value);
      let A = p (1 + (r/n))**(n*t);
      let op = document.getElementById("output");
      op.innerHTML=`The Compound Interest final amount is ${A}`;
}



