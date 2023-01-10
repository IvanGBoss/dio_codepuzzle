var guessCount = 0;
let guessesAllowed = 5;
let guessLen = 4; 
let code = generateCode(guessLen);

$(document).ready(function(){
     $("#game").hide()
})

function submitGuess() {
    var guess = document.getElementById("input").value;
    if (guess.length == guessLen) {
        guessCount += 1;
        let div = document.createElement('div');
        document.getElementById('game').insertBefore(div, document.getElementById("input"))
        for (let i = 0; i < guess.length; i++) {
            let char = guess[i];
            let span = document.createElement('span');
            span.textContent = char;
            span.className = "col"
            span.id = "col" + i
            if (char == code[i]) {
                span.style.backgroundColor = "#008000";
            } else if (code.includes(char)) {
                span.style.backgroundColor = "#998000";
            } else {
                span.style.backgroundColor = "#660000";
            }
            div.append(span)
        }

        div.id = "guess" + guessCount;
        div.className = "grid"
        div.style.gridTemplateColumns = "repeat(" + guessLen + ", 1fr)";
        document.getElementById('game').insertBefore(div, document.getElementById("input"))
        document.getElementById("input").value = "";
        if (guess == code) {
            document.getElementById("guessButton").value = "Accepted";
            document.getElementById("guessButton").disabled = true;
            endGame(true)
        } else if (guessCount == guessesAllowed) {
            document.getElementById("guessButton").value = "Failed";
            document.getElementById("guessButton").style.backgroundColor = "red";
            document.getElementById("guessButton").disabled = true;
            endGame(false)
        }
    } else {
        showError()
    }
}

function generateCode(length) {
    let number = '';
    while (number.length < length) {
      number += Math.floor(Math.random() * 10);
    }
    if (number[0] === '0') {
      return generateCode(length);
    }
    return number;
}

function showError() {
    document.getElementById("guessButton").style.backgroundColor = "red";
    document.getElementById("input").value = "";
    setTimeout(function() {
        document.getElementById("guessButton").style.backgroundColor = '#4CAF50';
    }, 1000);
}

function startGame() {
    document.getElementById("input").placeholder = "Enter a " + guessLen + " digit number";
    $("#game").show()
}

function endGame(result) {
    $.post('https://dio_codepuzzle/dioResult', JSON.stringify({
        success: result
    }))
    setTimeout(function() {
        window.location.reload();
    }, 2000);
    
}

window.addEventListener('message', (event) => {
    const data = event.data
    if (data.type === 'Start') {
        guessesAllowed = data.guesses
        guessLen = data.codeLen
        startGame()
    }

    if (data.type === 'End') {
        endGame()
    }
});