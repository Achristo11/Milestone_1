window.onload = function () {

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
          'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
          't', 'u', 'v', 'w', 'x', 'y', 'z'];

    const wordList = "testing";
    const word = Array.from(wordList)
    
    const answerArray = document.querySelector('#answer');

    for (let i = 0; i < word.length; i++){
        let letter = document.createElement('li')
        answerArray.appendChild(letter)
    }
   
    for (let i = 0; i < alphabet.length; i++){
        let button = document.createElement('button')
        button.innerText = alphabet[i]
        button.id = [alphabet[i]]
        button.addEventListener('click', (event) => {
            // console.log(event.target)
            checkLetter(event.target)
            button.disabled = true
            
        })    
        document.getElementById("letters").appendChild(button)
        
    }


    function checkLetter(guess) {
        for (let i = 0; i < word.length; i++) {
            // console.log(answerArray.children, answerArray.children[i])
            if ( word[i] === guess.innerText) {
                answerArray.children[i].textContent = guess.innerText;
            }
        }
    }

}