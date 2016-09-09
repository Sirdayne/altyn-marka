$(document).ready(function(){
    $( ".selected-language" ).click(function() {
      $( ".select-lang-menu" ).fadeToggle("fast");
        $(".select-lang-tick").toggleClass("select-lang-tick-reverse");
    });

    $( ".language-menu" ).click(function() {
      $( ".select-lang-menu" ).fadeOut("fast");
        $(".select-lang-tick").toggleClass("select-lang-tick-reverse");
    });
});



/* Language Russian/English */
$(document).ready(function(){
    
    var selectedLanguage;
    var russianLanguage = 'Язык: русский';
    var englishLanguage = 'Lang: english';
    
    $('#js-eng').click(function() {
        localStorage.setItem("language", "english");
        selectedLanguage = englishLanguage;
        console.log(localStorage.language);
        $('.selected-language').empty();
        $('.selected-language').append(selectedLanguage);
        $('.js-en').css('display','block');
        $('.js-ru').css('display','none');
    });
    $('#js-ru').click(function() {
        localStorage.setItem("language", "русский");
        selectedLanguage = russianLanguage;
        console.log(localStorage.language);
        $('.selected-language').empty();
        $('.selected-language').append(selectedLanguage);
        $('.js-en').css('display','none');
        $('.js-ru').css('display','block');
    });

    if (localStorage.language == "english"){
        console.log("lang set english");
        selectedLanguage = englishLanguage;
        $('.selected-language').empty();
        $('.selected-language').append(selectedLanguage);
        $('.js-en').css('display','block');
        $('.js-ru').css('display','none');
    }
    else{
        console.log("lang set russian");
        selectedLanguage = russianLanguage;
        $('.selected-language').empty();
        $('.selected-language').append(selectedLanguage);
        $('.js-en').css('display','none');
        $('.js-ru').css('display','block');
    }
    
});