//wk1-2 countdown timer should run from 10....1 then Blastoff!!!
function startCountdown() {
    var count = 10;
    //the count down timer should display 10
    document.getElementById("countdownTimer").innerHTML = count;
    count = count - 1;

    setTimeout(function () {
        //after 1 sec. will run code in here
        //the count down timer should display 9
        document.getElementById("countdownTimer").innerHTML = count;
        //decrease the count by 1
        count = count - 1;
    }, 1000); //set the wait time as 1 sec

    setTimeout(function () {
        //the count down timer should display 8
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 2000); //set the wait time as 2 sec

    setTimeout(function () {
        //the count down timer should display 7
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 3000); //set the wait time as 3 sec

    setTimeout(function () {
        //the count down timer should display 6
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 4000); //set the wait time as 4 sec

    setTimeout(function () {
        //the count down timer should display 5
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 5000); //set the wait time as 5 sec

    setTimeout(function () {
        //the count down timer should display 4
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 6000); //set the wait time as 6 sec

    setTimeout(function () {
        //the count down timer should display 3
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 7000); //set the wait time as 7 sec

    setTimeout(function () {
        //the count down timer should display 2
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 8000); //set the wait time as 8 sec

    setTimeout(function () {
        //the count down timer should display 1
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 9000); //set the wait time as 9 sec

    setTimeout(function () {
        //the count down timer should display Blastoff!!!
        document.getElementById("countdownTimer").innerHTML = "Blastoff!!!";
    }, 10000);
}

//function to play craps
function playCraps() {
    //displaying on the console log that the Craps game has started
    console.log("playCraps has stated");
    //when die1 is roll will only get a whole number between 1 and 6 and then display it
    var die1;
    die1 = Math.ceil(Math.random() * 6);
    document.getElementById("die1Results").innerHTML = "The value of die1 is: " + die1;
    //when die1 is roll will only get a whole number between 1 and 6 and then display it
    var die2;
    die2 = Math.ceil(Math.random() * 6);
    document.getElementById("die2Results").innerHTML = "The value of die2 is: " + die2;
    //show the dieSum of die1 and die2
    var dieSum = die1 + die2;
    document.getElementById("sumResults").innerHTML = "The sum of die1 plus die2 is: " + dieSum;
    //dieSum == 7 or dieSum == 11 is a test for when you lose 
    if (dieSum == 7 || dieSum == 11) {
        document.getElementById("crapsResults").innerHTML = "Craps! You lose!!!";
        //die1 == die2 is a test for doubles, die1 % 2 == 0 is a test for evens
    } else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("crapsResults").innerHTML = "Hurray!! Doubles! You win!!";
        //if you do not get doubles or a 7 or 11 then you will try again
    } else {
        document.getElementById("crapsResults").innerHTML = "Please try again.";
    }

}