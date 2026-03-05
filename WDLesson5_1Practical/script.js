/* Challenge 2: Create the function that will calculate the balance in an account using compound 
interest after t number of years.

Notes:
1) Don't let the formula scare you.  Simply translate it into JS
2) Create a for loop where the loop variable is t and the condition ends at the number of years 
the user specifies in the text input.
3) Use a build variable to create an output that looks like this
Year 1: $xxxxxx
Year 2: $xxxxxx
Year 3: $xxxxxx
Year 4: $xxxxxx
Year 5: $xxxxxx
*/
function calculateCompoundInterest() {

    const initialBalance = parseFloat(document.getElementById('initialBalance').value);
    const annualRate = parseFloat(document.getElementById('annualRate').value) / 100;
    const compoundingFrequency = parseInt(document.getElementById('compoundingFrequency').value);
    const years = parseInt(document.getElementById('years').value);

    let output = '';
    let balance = initialBalance;

    for (let t = 0; t <= years; t+=1) {
        balance = initialBalance * Math.pow((1 + annualRate / compoundingFrequency), compoundingFrequency * t);
        output += `Year ${t}: $${balance.toFixed(2)}<br>`;
    }

    document.getElementById('output').innerHTML = output;
}
