//var for the cookie tab
var cookie = document.querySelector("#cookie-bar");

//shows the cookie tab
function cookieShow(){
    cookie.style.display = "flex";
}

//delays the cookie tab form showing
setTimeout(cookieShow, 2000);

//shows an alert based on what city is selected
function showAlert(element){
    var cityName = element.innerText;
    alert(`You selected ${cityName}`);
}

//removes the cookie tab after pressing accept
function accept(){
    cookie.remove();
}

// Converts tempertatures between celsius and farienheit
function convert(element){
    var selectedTemp = element.value;
    console.log(selectedTemp);
    if (selectedTemp == "fahr")
    {
        var tempElement = document.querySelectorAll(".temp p span");
        for(var i = 0; i < tempElement.length; i++)
        {
            var tempNumber = parseInt(tempElement[i].innerText);
            tempNumber = Math.floor((tempNumber * 1.8) + 32); 
            tempElement[i].innerText = tempNumber;
        }
    }
    else 
    {
        var tempElement = document.querySelectorAll(".temp p span");
        for(var i = 0; i < tempElement.length; i++)
        {
            var tempNumber = parseInt(tempElement[i].innerText);
            tempNumber = Math.ceil((tempNumber - 32) * .5556);
            tempElement[i].innerText = tempNumber;
        }
    }
    
}
