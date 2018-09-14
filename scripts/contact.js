/**
 * Created by abhik.mitra on 24/08/14.
 */
(function(window){

    window.pageController = window.pageController || {};

    function Contact(){

        this.id = "#contact";
        this.nav = ".contact";
        this.$contactBg = $('#contact');
        this.$contactBg.parallax("50%", 0.099, false);
    }
    Contact.prototype = (function(){
        function scrolled(){
            $('.active').removeClass('active');
            $(this.nav).addClass('active');
        }
        var fn = {
            scrolled:scrolled
        };
        return _.extend(fn, window.pageController.utilities.commonModuleFn);
    })();
    window.pageController.contact = new Contact();

})(window);