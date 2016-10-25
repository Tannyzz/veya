$( document ).ready(function(){
	 $(".button-collapse").sideNav();
	 $('.parallax').parallax();
	 $('.modal-trigger').leanModal();
	 $('.scrollspy').scrollSpy();
	 $(".dropdown-button").dropdown();
	 $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
});