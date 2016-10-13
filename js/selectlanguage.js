$(document).ready(function(){
	/*
    $( ".selected-language" ).click(function() {
      $( ".select-lang-menu" ).fadeToggle("fast");
        $(".select-lang-tick").toggleClass("select-lang-tick-reverse");
    });

    $( ".language-menu" ).click(function() {
      $( ".select-lang-menu" ).fadeOut("fast");
        $(".select-lang-tick").toggleClass("select-lang-tick-reverse");
    });
	*/
	
	$( ".selected-language" ).click(function() {
      $( ".select-lang-menu" ).fadeIn("fast");
        $(".select-lang-tick").addClass("select-lang-tick-reverse");
    });

    $(document).mouseup(function (e) {
    var container = $(".selected-language");
    if (container.has(e.target).length === 0){
        $( ".select-lang-menu" ).fadeOut("fast");
        $(".select-lang-tick").removeClass("select-lang-tick-reverse");
    }
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
        //document.title = docTitle + "Altyn Marka";
        $("title").html(docTitleEn + "Altyn Marka");
    }
    else{
        console.log("lang set russian");
        selectedLanguage = russianLanguage;
        $('.selected-language').empty();
        $('.selected-language').append(selectedLanguage);
        $('.js-en').css('display','none');
        $('.js-ru').css('display','block');
        $("title").html(docTitleRu + "Алтын Марка");
    }
    
});