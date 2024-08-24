function reverse()
{
    var str1 = document.getElementById("firstStr").value;
    var splitStr1 = str1.split("");
    var joinStr1 = reverse.join("");

    if(str1 == joinStr1)
        /*This means if the word inputted is equal the the word after its reversed, it's a palindrome.*/
    {
        document.getElementById("palin").innerHTML = "This is a palindrome";
    }
    else
    {
        document.getElementById("palin").innerHTML = "This is not a palindrome";
    }
    /*This shows the result of the test under the submit button.*/
}

function input()
{
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var zipCode = document.getElementById('zipCode').value;

    var fullName = firstName+ " " + lastName;

    if(fullName.length > 20 || fullName.length <= 3)
    {
        document.getElementById("loginStatus").innerHTML = "Name is invalid";
        var textColor = document.getElementById("loginStatus");
        textColor.style.color ='red';
        /* I want the warning text to be red to make it more obvious that something went wrong*/

    }
    else if(zipCode.length !== 5)
        /* With trial and error I realized I needed .length for it to know what 5 meant! */
    {
        document.getElementById("loginStatus").innerHTML = "Zip code is invalid";
        var textColor = document.getElementById("loginStatus");
        textColor.style.color ='red';
    }
    else
    {
        alert("Access Granted");
        location.replace("First HTML.html");
    }
} 
function pixel()
{
    mySound = new sound("pixel-fight.mp3");
    mySound.play();
}

//helper function
function sound(src)
{
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.play = function() {this.sound.play();}
}
function stopMusic()
{
    window.location.reload();
}