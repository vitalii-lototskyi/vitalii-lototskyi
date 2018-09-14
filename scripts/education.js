/**
 * Created by abhik.mitra on 24/08/14.
 */
(function(window){

    window.pageController = window.pageController || {};

    function Education(){

        this.id = "#education";
        this.nav = ".education";

    }
    Education.prototype = (function(){
        function scrolled(){
            $('.active').removeClass('active');
            $(this.nav).addClass('active');
        }
        var fn = {
            scrolled:scrolled
        };
        return _.extend(fn, window.pageController.utilities.commonModuleFn);
    })();;
    window.pageController.education = new Education();
})(window);