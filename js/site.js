

//display a message to the user

function displayMessage(){
    //declare variable
    let msg = "";
    //pull the value from the input box
    msg = document.getElementById("message").value;
    
    alert(msg);
   
}

function displayMessage2(){
    let msg = "";
    msg = document.getElementById("message").value;
    Swal.fire(msg);

}
