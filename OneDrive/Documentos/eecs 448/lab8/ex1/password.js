function checkPassword()
{
    console.log("called the function");
    var password = document.getElementById('pass').value;
    var verification = document.getElementById('verify').value;
    if(password.length <8)
    {
        alert("Password is less than 8 characters");
    }
    else{
        if(password != verification)
        {
            alert("Password does not match");
        }
    }
}