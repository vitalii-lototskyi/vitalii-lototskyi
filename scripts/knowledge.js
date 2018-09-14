/**
 * Created by abhik.mitra on 24/08/14.
 */
(function(window){

    window.pageController = window.pageController || {};

    function Knowledge(){

        this.id = "#knowledge";
        this.$statEls = [
            $('#jsStat'),
            $('#jsStat1'),
            $('#jsStat2')
        ];
        this.$circles = $("#skills-donut");
        this.nav = ".skills";
        var self = this;
        this.$circles.waypoint(
            {
                offset: 500,
                handler: renderCircles
            }
        );
        var circleRendered = false;
        function renderCircles(direction){
            if(circleRendered == undefined){
                return;
            }
            if(direction === "down" && !circleRendered){

                self.$statEls.forEach(function (element, index) {
                    element.circliful();

                });

                circleRendered = true;
            }

        }


    }
    Knowledge.prototype = (function(){
        function scrolled(){
            $('.active').removeClass('active');
            $(this.nav).addClass('active');


        }
        var fn = {
            scrolled:scrolled
        };
        return _.extend(fn, window.pageController.utilities.commonModuleFn);
    })();
    window.pageController.knowledge = new Knowledge();
})(window);