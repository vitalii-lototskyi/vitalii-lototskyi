/**
 * Created by abhik.mitra on 24/08/14.
 */
(function(window, _){

    window.pageController = window.pageController || {};

    function Controller(dependencies){
        this.page = {};
        this.page.landingPage = dependencies.landingPage;
        this.page.personalDetails = dependencies.personalDetails;
        this.page.workEx = dependencies.workEx;
        this.page.education = dependencies.education;
        this.page.knowledge = dependencies.knowledge;
        this.page.portfolio = dependencies.portfolio;
        this.page.contact = dependencies.contact;
        var ScrollManagerClass = dependencies.ScrollManagerClass;

        var pageIds = _.map(this.page, function (pageInstance, pageKey) {

            return {
                page:pageKey,
                id:pageInstance.getId()
            }
        });
        this.scrollManager = new ScrollManagerClass(pageIds);
        this.$nav = $('ul.sf-menu');
        this.$navBar = $('#nav-bar');
    }
    Controller.prototype = (function(){
        function intitialize(){
            this.scrollManager.setUpWaypoints(onScroll.bind(this));
            setUpNavigation.call(this);

        }
        function setUpNavigation(){
            this.$nav.superfish();
            this.$navBar.waypoint('sticky', {
                wrapper: '<div class="sticky-wrapper" />',
                stuckClass: 'l-sticky-header'
            });

        }
        function onScroll(id,page,direction){
            this.page[page].scrolled(direction);
        }
        return {
            intitialize:intitialize
        }
    })();
    window.pageController.manager = new Controller(
        {
            contact:window.pageController.contact,
            education:window.pageController.education,
            knowledge:window.pageController.knowledge,
            landingPage:window.pageController.landingPage,
            personalDetails:window.pageController.personalDetails,
            portfolio:window.pageController.portfolio,
            ScrollManagerClass:window.pageController.ScrollManager,
            workEx:window.pageController.workEx
        }
    );


})(window, _);