window.onload = () => {
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

    console.log("reintialized");
    const wordList = ["testing", "potato"];
    const answerArray = document.querySelector('#answer');

    function createWord(){
        var word = []; 
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
        console.log(word);
        for (let i = 0; i < word.length; i++){
            let letter = document.createElement('li')
            answerArray.appendChild(letter)
            console.log(answerArray);
        }
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
            if ( word[i] === guess.innerText) {
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
    createWord();
}