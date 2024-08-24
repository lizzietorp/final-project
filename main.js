function start()
{
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
    //disabled false just means enabled
    intervalStart();
}

function stop()
{
    document.getElementById("stop").disabled = true;
    document.getElementById("start").disabled = false;
    //these functions make it so the button is disabled when you click on it and the other button becomes enabled
}

//function to start interval
function intervalStart()
{
    var image = document.getElementById("memeImage");
    var change = 0; //starting position

    intervalID = setInterval(function() 
    {
       image.style.left = change+"px";
       //plus means to add to get the img to move
        change+=2;
 
    },500); //means .5 seconds interval

}
//function to stop interval
function intervalStop()
{
    clearInterval(intervalID); // Clear the interval
}