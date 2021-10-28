$(document).ready(function(){

    let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];

    $("#keyboard-upper-container").hide();

    $("#keyboard-upper-container").keydown(function(e){
        if(e.which == 17) {
            console.log(shift);
            $("#keyboard-upper-container").show();
        }
})
})