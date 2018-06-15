(function(){
    $(document).on("click", '.s-tools-btn', function(){
        if($('.radio-section').hasClass("show")){
            $('.radio-section').slideUp();
            $('.radio-section').removeClass("show");
        }
        else{
            $('.radio-section').slideDown();
            $('.radio-section').addClass("show");
        }
    });
})();