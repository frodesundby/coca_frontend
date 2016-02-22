function randomQuote() {
    var firstWords = ['green', 'randy', 'daring', 'burning', 'wild', 'sleazy', 'fit', 'lazy', 'bloated', 'caring', 'big', 'small', 'cheezy'];
    var secondWords = ['block', 'book', 'tv', 'boat', 'wood', 'fish', 'pig', 'child', 'soap', 'coat', 'dingo', 'dog', 'bear', 'hangar', 'telly', 'bottle'];
    var randomWord = function(words){
        return words[Math.floor(Math.random() * words.length)]
    };
    var firstWord = randomWord(firstWords);
    var secondWord = randomWord(secondWords)
    document.getElementById("firstword").innerHTML = firstWord;
    document.getElementById("secondword").innerHTML = secondWord;

}