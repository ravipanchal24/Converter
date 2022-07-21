function getDateTime()
{
    const date = new Date();
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    document.getElementById("currentDateSpan").innerHTML = month[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
    

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if(hours <= 12)
        document.getElementById("timePeriod").innerHTML = "&nbspAM";
    else
    document.getElementById("timePeriod").innerHTML = "&nbspPM";

    if(hours < 10 )
        hours = "0"+hours;
    if(minutes < 10 )
        minutes = "0"+minutes;
    if(seconds < 10 )
        seconds = "0"+seconds;

    document.getElementById("currentTimeSpan").innerHTML = hours + ":" + minutes + ":" + seconds;    
}

setInterval(getDateTime, 10);
function unitChange()
{
 
    document.getElementById("inputValue").focus();
    let userInput = document.getElementById("inputValue").value;

    let currentSelectedUnit = document.getElementById("unitTypeDropdown").value;
    if(currentSelectedUnit == "currency")
    {
        document.getElementById("currencyOptions").style.display = "block";
        document.getElementById("massOptions").style.display = "none";
        document.getElementById("lengthOptions").style.display = "none";
        document.getElementById("tempOptions").style.display = "none";  

        document.getElementById("currencyOptionsLower").style.display = "block";
        document.getElementById("massOptionsLower").style.display = "none";
        document.getElementById("lengthOptionsLower").style.display = "none";
        document.getElementById("tempOptionsLower").style.display = "none";  

        upperUnit = document.getElementById("currencyOptions").value;
        lowerUnit = document.getElementById("currencyOptionsLower").value;

       if(upperUnit == "U.S. Dollar")
       {
           if(lowerUnit == "Indian Rupee")
           {
               document.getElementById("outputValue").innerText = (userInput * 79.88);
           }
           else if(lowerUnit == "U.S. Dollar")
           {
               document.getElementById("outputValue").innerText = (userInput * 1);
           }
           if(lowerUnit == "Euro")
           {
               document.getElementById("outputValue").innerText = (userInput * 0.98);
           }
           if(lowerUnit == "Pound")
           {
               document.getElementById("outputValue").innerText = (userInput * 0.84);
           }
       }

       else if(upperUnit == "Indian Rupee")
       {
           if(lowerUnit == "Indian Rupee")
           {
               document.getElementById("outputValue").innerText = (userInput * 1);
           }
           else if(lowerUnit == "U.S. Dollar")
           {
               document.getElementById("outputValue").innerText = (userInput * 0.013);
           }
           if(lowerUnit == "Euro")
           {
               document.getElementById("outputValue").innerText = (userInput * 0.012);
           }
           if(lowerUnit == "Pound")
           {
               document.getElementById("outputValue").innerText = (userInput * 0.010);
           }
       }


    }
    else if(currentSelectedUnit == "mass")
    {
        document.getElementById("currencyOptions").style.display = "none";
        document.getElementById("massOptions").style.display = "block";
        document.getElementById("lengthOptions").style.display = "none";
        document.getElementById("tempOptions").style.display = "none";  

        document.getElementById("currencyOptionsLower").style.display = "none";
        document.getElementById("massOptionsLower").style.display = "block";
        document.getElementById("lengthOptionsLower").style.display = "none";
        document.getElementById("tempOptionsLower").style.display = "none";    
    }
    if(currentSelectedUnit == "length")
    {
        document.getElementById("currencyOptions").style.display = "none";
        document.getElementById("massOptions").style.display = "none";
        document.getElementById("lengthOptions").style.display = "block";
        document.getElementById("tempOptions").style.display = "none";  

        document.getElementById("currencyOptionsLower").style.display = "none";
        document.getElementById("massOptionsLower").style.display = "none";
        document.getElementById("lengthOptionsLower").style.display = "block";
        document.getElementById("tempOptionsLower").style.display = "none";  
    }
    if(currentSelectedUnit == "temperature")
    {
        document.getElementById("currencyOptions").style.display = "none";
        document.getElementById("massOptions").style.display = "none";
        document.getElementById("lengthOptions").style.display = "none";
        document.getElementById("tempOptions").style.display = "block";  

        document.getElementById("currencyOptionsLower").style.display = "none";
        document.getElementById("massOptionsLower").style.display = "none";
        document.getElementById("lengthOptionsLower").style.display = "none";
        document.getElementById("tempOptionsLower").style.display = "block";  
    }
}