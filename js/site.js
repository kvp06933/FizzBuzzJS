
//display a message to the user

function getValues(){
    let startValue = 3;
    let endValue = 5;
    //get values from user
    startValue = document.getElementById("startValue").value;
    endValue = document.getElementById("endValue").value;
    //Convert string inputs to integers if able
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);
    // checkInputs(startValue, endValue); ************ This is an error
    if(Number.isInteger(startValue) && Number.isInteger(endValue)){
        //generate Numbers Array
        let numbers = generateNumbers(startValue, endValue);
        //generate Table
        displayTable(numbers);
    } else{
        Swal.fire("Please enter only integers between 1 and 100 (1 , 2, 3 ...)");
    }
   
}

//generate numbers from startValue to endValue
function generateNumbers(sValue, eValue){
    //0,1,2,3, etc
    let numbers = [];
    //Loop over the numbers until we hit the end value
    for (let step = 1; step <= 100; step++) {
        //Add numbers to array
        if(step % sValue == 0 && step % eValue ==0){
            numbers.push("FizzBuzz");
        } else if(step % sValue == 0){
            numbers.push("Fizz");
        } else if(step % eValue == 0){
            numbers.push("Buzz");
        } else {
            numbers.push(step);
        }
        
    }
    return numbers;
}

function displayTable(numArr){
    //Generate table of values
    
    let tableBody = document.getElementById("results");

    //get the template to make the table
    let rowTemplate = document.getElementById("fbTemplate");

    //clear tablebody results

    tableBody.innerHTML = "";

    for(let i = 0; i <numArr.length; i+=5){
        const tableRow = document.importNode(rowTemplate.content, true);

        let rowCols = tableRow.querySelectorAll("td");
        //This is one table cd <td> the first line adds a class for CSS, the second line adds the text
        rowCols[0].classList.add(numArr[i]);
        rowCols[0].textContent = numArr[i];
        
        rowCols[1].classList.add(numArr[i+1]);
        rowCols[1].textContent = numArr[i+1];

        rowCols[2].classList.add(numArr[i+2]);
        rowCols[2].textContent = numArr[i+2];

        rowCols[3].classList.add(numArr[i+3]);
        rowCols[3].textContent = numArr[i+3];

        rowCols[4].classList.add(numArr[i+4]);
        rowCols[4].textContent = numArr[i+4];

        tableBody.appendChild(tableRow);

    }

















    // //loop through each number in array
    // for (let index = 0; index < numArr.length; index++) {
    //     let tableRow = "";
    //     let number = numArr[index];
    //     if(number == "FizzBuzz"){
    //         //the number is FIZZBUZZ
    //         tableRow = `<tr><td class="fizzBuzz">${number}</td></tr>`
    //     } else if (number == "Fizz"){
    //         //the number is Fizz
    //         tableRow = `<tr><td class="fizz">${number}</td></tr>`
    //     } else if (number == "Buzz"){
    //         tableRow = `<tr><td class="buzz">${number}</td></tr>`
    //     } else{
    //         tableRow = `<tr><td>${number}</td></tr>`
    //     }

        
    //     tableBody.innerHTML += tableRow;
       
        
    // }
    
}

//This function will check the inputs are within the range and will show an error if they are not.

// function checkInputs(fizzValue, buzzValue){
//     let errorMessage = "";

//     if(fizzValue < 1 || buzzValue < 1){
//         errorMessage += "One of your values is less than 1.";
//     }
//     if(fizzValue > 100 || buzzValue > 100){
//         errorMessage += "One of your values is greather than 100.";
//     }
//     if(errorMessage.length > 0){
//         Swal.fire(errorMessage);
//         break;
//     }
// }


