$(document).ready(function(){
    $( ".select-lang" ).click(function() {
      $( ".select-lang-menu" ).fadeToggle("fast");
        $(".select-lang-tick").toggleClass("select-lang-tick-reverse");
    });

    $( ".language-menu" ).click(function() {
      $( ".select-lang-menu" ).fadeToggle("fast");
        $(".select-lang-tick").toggleClass("select-lang-tick-reverse");
    });
});
