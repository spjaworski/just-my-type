$(document).ready(function () {

    let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];

    var positionNum = 0;

    $("#keyboard-upper-container").hide();

    $(document).keydown(function (e) {

        if (e.keyCode == 16) {
            $("#keyboard-upper-container").show();
            $("#keyboard-lower-container").hide();
        }
    })

    $(document).keyup(function (e) {

        if (e.keyCode == 16) {
            $("#keyboard-upper-container").hide();
            $("#keyboard-lower-container").show();
        }
    })


    var sentNum = 0;


    var sentenceText = sentences[sentNum]


    sentenceText.split("").forEach(char => {
        const charSpan = document.createElement('span')
        charSpan.innerText = char;
        charSpan.className = 'requestedText';
        $('#sentence').append(charSpan)
    })

    inputArray = sentenceText.split("");

    var errorCount = 0;

    let neededLet = inputArray[positionNum]


    $('#target-letter').text(inputArray[positionNum]);

    var move = 12;
    var wordCount = 0;
    var minutes = 0;
    $(document).on('keypress', function (e) {

        setInterval(startTimer, 60000);
        function startTimer(){
            minutes += 1;
        }

        move += 17
        $('#yellow-block').css({
            left: move
        })
        var pressedKey = event.keyCode;
        var convertedKey = String.fromCharCode(pressedKey)
        $('#' + pressedKey).css("background-color", "yellow")
        setTimeout(function () {
            $('#' + pressedKey).css("background-color", "#f5f5f5")
        }, 200);
        console.log(convertedKey);
        let neededLet = inputArray[positionNum]


        $('#target-letter').text(inputArray[positionNum + 1]);

        if (neededLet == convertedKey) {
            console.log("ok");
            $('#feedback').append('<span class="glyphicon-ok"></span>')
            positionNum += 1;

        } else if (neededLet == convertedKey && pressedKey == 32) {
            console.log("ok");
            $('#feedback').append('<span class="glyphicon-ok"></span>')
            positionNum += 1;
            wordCount += 1;
        } else {
            console.log("nope");
            $('#feedback').append('<span class="glyphicon-remove"></span>')
            positionNum += 1;
            errorCount++;
        }
        console.log(positionNum);

        console.log(inputArray);
        if (positionNum == inputArray.length - 1) {
            move = 12;
        }
        if (positionNum == inputArray.length) {
            positionNum = 0;
            if (sentNum < sentences.length - 1) {
                $('#sentence').empty();
                $('#feedback').empty();
                sentNum++;
                var sentenceText = sentences[sentNum]
                sentenceText.split("").forEach(char => {
                    const charSpan = document.createElement('span')
                    charSpan.innerText = char;
                    charSpan.className = 'requestedText';
                    $('#sentence').append(charSpan)
                })

                inputArray = sentenceText.split("");


            } else if (sentNum >= sentences.length - 1) {
                $('#sentence').empty();
                $('#feedback').empty();
                var wpm = wordCount/minutes - 2 * errorCount
                $('#sentence').text("Game over! Your words per minute: " + wpm)
                playBtn = document.createElement('button')
                $('button').text("Play again?");
                $('button').onclick(resetGame);
                $('feedback').append(playBtn);
                function resetGame() {
                      sentNum = 0;
                      $('#sentence').empty();
                      sentenceText.split("").forEach(char => {
                        const charSpan = document.createElement('span')
                        charSpan.innerText = char;
                        charSpan.className = 'requestedText';
                        $('#sentence').append(charSpan)
                    })
                      $('#feedback').empty();
                      move = 12;
                      positionNum = 0;
                      errorCount = 0;
                      wordCount = 0;
                      minutes = 0;
                }


                




            }
        }

    })


})