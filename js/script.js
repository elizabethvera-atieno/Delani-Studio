// business logic
$(document).ready(function(){
    $("#designIcon").click(function(){
        $("#designIcon").toggle();
        $(".design").slideToggle();
    });
    $(".design").click(function(){
        $("#designIcon").toggle();
        $(".design").slideToggle(); 
    });

    $("#devIcon").click(function(){
        $("#devIcon").toggle();
        $(".development").slideToggle();
    });
    $(".development").click(function(){
        $("#devIcon").toggle();
        $(".development").slideToggle(); 
    });

    $("#productIcon").click(function(){
        $("#productIcon").toggle();
        $(".product").slideToggle();
    });
    $(".product").click(function(){
        $("#productIcon").toggle();
        $(".product").slideToggle(); 
    });
});