/* Elizabeth Webb */
function attack()
{
    var round1Pl = 100- Math.ceil(Math.random() * 50);
    var round2Pl = round1Pl- Math.ceil(Math.random() * 50);
    var round3Pl = round2Pl- Math.ceil(Math.random() * 50);
/* I used the random math equation but I started round 1 as 100-random, then the results of each round- the new number
and changed the multiplier to 50 so that the final round number could be lower. */

    document.getElementById("round1Pl").innerHTML = "Round 1 = " + round1Pl;
    document.getElementById("round2Pl").innerHTML = "Round 2 = " + round2Pl;
    document.getElementById("round3Pl").innerHTML = "Round 3 = " + round3Pl;
    var finalRes = 100 - (round1Pl+round2Pl+round3Pl);
/* Here I linked the JavaScript code to the HTML with getElementById and 
added a variable to substract the rounds from 100 as an indicator of health. */

    var round1En = 100- Math.ceil(Math.random() * 50);
    var round2En = round1En- Math.ceil(Math.random() * 50);
    var round3En = round2En- Math.ceil(Math.random() * 50);

    document.getElementById("round1En").innerHTML = "Round 1 = " + round1En;
    document.getElementById("round2En").innerHTML = "Round 2 = " + round2En;
    document.getElementById("round3En").innerHTML = "Round 3 = " + round3En;
    var finalRes = 100 - (round1En+round2En+round3En);
/* Here I added the same thing but changed the information to be for the enemy stats. */

    if (round3Pl >= round3En) 
/* This means if the player has a higher score for round 3, the player wins. */
    {
        document.getElementById("finalRes").innerHTML = "Enemy has been Defeated in battle!";
/* This part updates the text in the final result category. */
    }
    else if (round3En >= round3Pl)
    {
        document.getElementById("finalRes").innerHTML = "You have been slain in Battle!";
    }
    else if (round3Pl == round3En)
    {
        document.getElementById("finalRes").innerHTML = "Your opponent has matched your strength and you have both surrendered.";

    }
    else
    {
        document.getElementById("finalRes").innerHTML = "Your opponent has matched your strength and you have both surrendered.";
    }
}