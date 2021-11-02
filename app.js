$(document).ready(function () {

    let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];

    $("#keyboard-upper-container").hide();

    $(document).on("keydown", upperShift);

    if (event.which = 16) {
        function upperShift() {

            $("#keyboard-upper-container").show();
            $("#keyboard-lower-container").hide();
        }
    }

    $(document).on("keyup", lowerShift);

    if (event.which = 16) {
        function lowerShift() {
            $("#keyboard-upper-container").hide();
            $("#keyboard-lower-container").show();
        }
    }

    $(document).keypress(function(){
        console.log(event.keyCode);
        var pressedKey = event.keyCode;
        $('#' + pressedKey).css("background-color", "yellow")
        setTimeout(function(){
            $('#' + pressedKey).css("background-color", "#f5f5f5")
        }, 200);
    })

})

