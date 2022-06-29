window.onload = () => {
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];


    const wordList = ["testing", "potato"];
    const answerArray = document.querySelector('#answer');
    var word = []; 
    function createWord(){
        const listItems = document.querySelectorAll('#answer li');
        if (answerArray.children.length) {
            for (let i = 0; i < listItems.length; i++) {
               answerArray.removeChild(listItems[i]);
            }
        }
        
        const buttons = document.querySelectorAll('#letters button');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].disabled = false;
        }


        if (Math.random() * 10 <= 5){
            word = Array.from(wordList[0])
        }else{
            word = Array.from(wordList[1])
            }
            
        for (let i = 0; i < word.length; i++){
            let letter = document.createElement('li')
            answerArray.appendChild(letter)
        }
    }


    for (let i = 0; i < alphabet.length; i++){
        let button = document.createElement('button')
        button.innerText = alphabet[i]
        button.id = [alphabet[i]]
        button.addEventListener('click', (event) => {
            checkLetter(event.target)
            button.disabled = true
        })    
        document.getElementById("letters").appendChild(button)
    }

    function checkLetter(guess) {
        for (let i = 0; i < word.length; i++) {
            // console.log(i);
            if ( word[i] === guess.innerText) {
                console.log(word[i]);
                answerArray.children[i].textContent = guess.innerText;
            }
        }
    }

    var newGame = document.createElement('button')
    newGame.innerText = "New Game"
    newGame.id = "newGame"
    newGame.addEventListener('click', (event) => {
        createWord();
    })
    document.getElementById("newGame").appendChild(newGame);
    console.log(answerArray.children);
    createWord();
}