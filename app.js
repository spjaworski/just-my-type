$(document).ready(function(){

    let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];

    $("#keyboard-upper-container").hide();

    $(document).on("keydown", upperShift);
    
    if (event.which = 16) {
    function upperShift () {
         
            $("#keyboard-upper-container").show();
            $("#keyboard-lower-container").hide();
            
        
    }}

    $(document).on("keyup", lowerShift);

    if(event.which = 16) {
    function lowerShift() {
            $("#keyboard-upper-container").hide();
            $("#keyboard-lower-container").show();
            
    }}
    

    $(document).keydown(function(){
        console.log(event.which);
        console.log(event.key);
        console.log(event.keyCode);
        if (event.keyCode == 65) {
            $('#97').css("background-color", "yellow")
        } else if (event.keyCode == 83) {
            $('#115').css("background-color", "yellow")
        } else if (event.keyCode == 68) {
            $('#100').css("background-color", "yellow")
        } else if (event.keyCode == 70) {
            $('#102').css("background-color", "yellow")
        } else if (event.keyCode == 71) {
            $('#103').css("background-color", "yellow")
        } else if (event.keyCode == 72) {
            $('#104').css("background-color", "yellow")
        } else if (event.keyCode == 74) {
            $('#106').css("background-color", "yellow")
        } else if (event.keyCode == 75) {
            $('#107').css("background-color", "yellow")
        } else if (event.keyCode == 76) {
            $('#108').css("background-color", "yellow")
        } else if (event.keyCode == 59) {
            $('#59').css("background-color", "yellow")
        } else if (event.keyCode == 222) {
            $('#39').css("background-color", "yellow")
        }
})

    $(document).keyup(function() {
        console.log("released");
        console.log(event.keyCode)
        if (event.keyCode == 65) {
            $('#97').css("background-color", "#f5f5f5")
        } else if (event.keyCode == 83) {
            $('#115').css("background-color", "#f5f5f5")
        } else if (event.keyCode == 68) {
            $('#100').css("background-color", "#f5f5f5")
        } else if (event.keyCode == 70) {
            $('#102').css("background-color", "#f5f5f5")
        } else if (event.keyCode == 71) {
            $('#103').css("background-color", "#f5f5f5")
        } else if (event.keyCode == 72) {
            $('#104').css("background-color", "#f5f5f5")
        } else if (event.keyCode == 74) {
            $('#106').css("background-color", "#f5f5f5")
        } else if (event.keyCode == 75) {
            $('#107').css("background-color", "#f5f5f5")
        } else if (event.keyCode == 76) {
            $('#108').css("background-color", "#f5f5f5")
        } else if (event.keyCode == 59) {
            $('#59').css("background-color", "#f5f5f5")
        } else if (event.keyCode == 222) {
            $('#39').css("background-color", "#f5f5f5")
        }
    })


}) 