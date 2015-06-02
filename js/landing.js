/*-----This is our scroll function-----
elementSelector: indicates the element to scroll to (use .class or #id)
offset: simply an offset in px to scroll to in relation to the element
time:  how long the scroll should take
*/
function scrollWin(elementSelector, offset, time){
	if(typeof(offset)=="undefined")
		offset = 0;
	if(typeof(time)=="undefined")
		time = 1000;
	$('body,html').stop().animate({scrollTop: $(elementSelector).offset().top+offset}, time);
}//end of scrollWin() function


/*-----This is where the magic happens-----
We detect the user's attempt to scroll or interact with the page and then cancel any scroll animation that might be going on
*/
$viewport = $('body,html');	//use both body and html as firefox places overflow at the html level, and hence scrolls here
$viewport.bind("scroll mousedown DOMMouseScroll mousewheel keyup", function(e){
	if ( e.which > 0 || e.type === "mousedown" || e.type === "mousewheel"){
		 $viewport.stop();
	}
});



/*Some stuff for the demo*/
//bind the scroll to some buttons
$(document).on("click", ".scroll-down", function(e){
  scrollWin(".tutorial", 0, 4000);
});

$(document).on("click", ".scroll-up", function(e){
  scrollWin("#page-content", 0, 2000);
});

$(document).on("click", ".row-fluid2", function(e){
  scrollWin("row-fluid", 0, 2000);
});

