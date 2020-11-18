(function() {

    document.getElementById("button").addEventListener("click", function() { // Id from the button 
        
        
        const guessedNum = document.getElementById("guess").value;
        const secretNum = randomNum(1, 22);
        

        function randomNum(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        console.log(secretNum);
        console.log(guessedNum);

        if (secretNum == guessedNum) {
            alert("Awesome! Your number " + guessedNum + " was correct! You can be named many things, but hungry not beeing one")

        } else {
                alert("Bummer... You guessed " + guessedNum + " and the secret number was " + secretNum + ".");
        }
    }
    
)}());