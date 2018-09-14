/**
 * Created by abhik.mitra on 24/08/14.
 */
(function(window){

    window.pageController = window.pageController || {};

    function ScrollManager(pages){
        this.pages = pages ;

    }
    ScrollManager.prototype = (function(){
        function setUpWaypoints(onScrollFn){
            var self = this;
            this.pages.forEach(function(element, index, array){
                $(element.id).waypoint(function(direction){
                   
                    onScrollFn(element.id,element.page,direction);
                });
            });
        }
        return {
            setUpWaypoints:setUpWaypoints
        }
    })();
    window.pageController.ScrollManager = ScrollManager;

})(window);