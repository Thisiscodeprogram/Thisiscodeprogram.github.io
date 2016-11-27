var begingame = function() {
    var wins = 0;
    var losses = 0;
    var userChoice = prompt("Do you choose rock, paper or scissors?");
    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if (computerChoice <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    console.log("Computer: " + computerChoice);
};
var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
        return "The result is a tie!"
        begingame
        compare(userChoice, computerChoice)
    } else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "rock wins!";
            console.log("You win!");
            wins = wins + 1;
            console.log("You have won " + wins + " times in a row.");
            if (wins >= 10) {
                var playagain = prompt("Begin the Game again? Y for yes, and N for no.")
                if (playagain === "Y") {
                    begingame;
                    compare(userChoice, computerChoice);
                } else {
                    return "Play again sometime."
                };
            };
        };
        begingame
        compare(userChoice, computerChoice)
    } else {
        return "paper wins!";
        console.log("Sorry. You chose" + " " + choice1 + ".")
        losses = losses + 1;
        console.log("You lost " + losses + " times in a row.")
        if (losses >= 10) {
            playagain = prompt("You lost. Play again? Y to play, N to not.");
            if (playagain === "Y") {
                begingame;
                compare(userChoice, computerChoice);
            }
        } else {
            return "Play again sometime to Win! To get revenge!";
        };
        begingame;
        compare(userChoice, computerChoice);
    }
}
else if (choice1 === "paper") {
    if (choice2 === "rock") {
        return "paper wins!";
        console.log("You win!")
        wins = wins + 1;
        console.log("You have won " + wins + " times in a row.");
        if (wins >= 10) {
            var playagain = prompt("Begin the Game again? Y for yes, and N for no.")
            if (playagain === "Y") {
                begingame;
                compare(userChoice, computerChoice);
            } else {
                return "Play again sometime."
            };
        }
    } else {
        return "scissors win!";
        console.log("Sorry. You chose" + " " + choice1 + ".")
        losses = losses + 1;
        console.log("You lost " + losses + " times in a row.")
        if (losses >= 10) {
            playagain = prompt("You lost. Play again? Y to play, N to not.");
            if (playagain === "Y") {
                begingame;
                compare(userChoice, computerChoice);
            }
        } else {
            return "Play again sometime to Win! To get revenge!";
        };
        begingame;
        compare(userChoice, computerChoice);
    }
} else {
    if (choice2 === "paper") {
        return "scissors win!"
        console.log("You win!")
        wins = wins + 1;
        console.log("You have won " + wins + " times in a row.");
        if (wins >= 10) {
            var playagain = prompt("Begin the Game again? Y for yes, and N for no.")
            if (playagain === "Y") {
                begingame;
                compare(userChoice, computerChoice);
            } else {
                return "Play again sometime."
            };
        }
    } else {
        return "paper wins!"
        console.log("Sorry. You chose" + " " + choice1 + ".")
        losses = losses + 1;
        console.log("You lost " + losses + " times in a row.")
        if (losses >= 10) {
            playagain = prompt("You lost. Play again? Y to play, N to not.");
            if (playagain === "Y") {
                begingame;
                compare(userChoice, computerChoice);
            }
        } else {
            return "Play again sometime to Win! To get revenge!";
        };
        begingame;
        compare(userChoice, computerChoice);
    };
};
};
