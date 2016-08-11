$(document).ready(function(){
    $( ".selected-language" ).click(function() {
      $( ".select-lang-menu" ).fadeIn("fast");
        $(".select-lang-tick").addClass("select-lang-tick-reverse");
    });

    $( ".language-menu" ).click(function() {
      $( ".select-lang-menu" ).fadeOut("fast");
        $(".select-lang-tick").removeClass("select-lang-tick-reverse");
    });
});
