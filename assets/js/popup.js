/* Functions for popup  */

(function(){

    /* create popup */
    $(document).on("click", '.popup-trigger', function(){
        $('#popup-overlay').addClass('overlay');
        $('.popup').show();
    });

    /* Remove overlay on click of overlay */
    $(document).on("click", '.overlay', function(){
        $('#popup-overlay').removeClass('overlay');
        $('.popup').hide();
    });
})();