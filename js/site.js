
//display a message to the user

function getValues(){
    let startValue = 1;
    let endValue = 100;
    //get values from user
    startValue = document.getElementById("startValue").value;
    endValue = document.getElementById("endValue").value;
    //Convert string inputs to integers if able
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);
    checkInputs(startValue, endValue);
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
    for (let index = 1; index <= 100; index++) {
        //Add numbers to array
        if(index % sValue == 0 && index % eValue ==0){
            numbers.push("FizzBuzz");
        } else if(index % sValue == 0){
            numbers.push("Fizz");
        } else if(index % eValue == 0){
            numbers.push("Buzz");
        } else {
            numbers.push(index);
        }
        
    }
    return numbers;
}

function displayTable(numArr){
    //Generate table of values
    
    let tableBody = document.getElementById("results");
    //clear tablebody results

    tableBody.innerHTML = "";

    //loop through each number in array
    for (let index = 0; index < numArr.length; index++) {
        let tableRow = "";
        let number = numArr[index];
        if(number == "FizzBuzz"){
            //the number is FIZZBUZZ
            tableRow = `<tr><td class="fizzBuzz">${number}</td></tr>`
        } else if (number == "Fizz"){
            //the number is Fizz
            tableRow = `<tr><td class="fizz">${number}</td></tr>`
        } else if (number == "Buzz"){
            tableRow = `<tr><td class="buzz">${number}</td></tr>`
        } else{
            tableRow = `<tr><td>${number}</td></tr>`
        }

        
        tableBody.innerHTML += tableRow;
       
        
    }
    
}

function checkInputs(fizzValue, buzzValue){
    let errorMessage = "";

    if(fizzValue < 1 || buzzValue < 1){
        errorMessage += "One of your values is less than 1.";
    }
    if(fizzValue > 100 || buzzValue > 100){
        errorMessage += "One of your values is greather than 100.";
    }
    if(errorMessage.length > 0){
        Swal.fire(errorMessage);
        break;
    }
}


