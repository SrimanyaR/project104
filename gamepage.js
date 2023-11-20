// generation of random value

var y = Math.floor(Math.random() * 10 + 1);

// count of attempts
if(x == y)
{
    alert("CONGRATULATIONS!!! "+playername+" YOU GUESSED IT RIGHT IN " + guess + " GUESS  ");

    guess = 1;
}

// until hit

else if(x>y) 

{
    guess++;
    alert("opps sorry!!  Try a smaller number");
}
else 
{
    guess++;
    alert("oops sorry!! Try a greater number")    
}

function playAgain(){
    y = Math.floor(Math.random() * 10 + 1);
}



// function for the number sent by the user

var x = document.getElementById("guessField").value;