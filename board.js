window.onload = function () {

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
          'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
          't', 'u', 'v', 'w', 'x', 'y', 'z'];

    const wordList = "testing";
    const word = Array.from(wordList)
    var catagory;
    
    var board = document.getElementById('word');
    var answer = document.createElement('ul');
    
    for (let i = 0; i < word.length; i++){
        answer.setAttribute("id", "word");
        


    }



    for (let i = 0; i < alphabet.length; i++){
        let button = document.createElement('button')
        button.innerText = alphabet[i]
        button.id = [alphabet[i]]
        button.addEventListener('click', () => {
            button.disabled = true
        })    
        document.getElementById("letters").appendChild(button)
        
    }




}