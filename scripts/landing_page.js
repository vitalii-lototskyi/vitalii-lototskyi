/**
 * Created by abhik.mitra on 24/08/14.
 */
(function(window){

    window.pageController = window.pageController || {};

    function LandingPage(){

        this.id = "#landing_page";
        this.$intro =  $('#intro');

    }
    LandingPage.prototype = (function(){
        function scrolled(){
            this.$intro.parallax("49%", -1,false);
        }
        var fn = {
            scrolled:scrolled
        };

        return _.extend(fn, window.pageController.utilities.commonModuleFn);
    })();
    window.pageController.landingPage = new LandingPage();

})(window);