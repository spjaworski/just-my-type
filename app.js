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


    $(document).on('keypress', function (e) {
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
        } else {
            console.log("nope");
            $('#feedback').append('<span class="glyphicon-remove"></span>')
            positionNum += 1;
            errorCount++;
        }
        console.log(positionNum);

        console.log(inputArray);
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
                sentNum = 0;
            }
        }

    })


})