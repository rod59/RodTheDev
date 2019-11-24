/*BARS SLIDING IN OUT FUNCTIONALITY*/
var bar = document.getElementsByClassName('proficiency-bar');
var changeFactor = 1000;

window.onload = function () {
	for(var i = 0; i<bar.length; i++){
		bar[i].style.transitionDuration = '0s';
		var originalWidth	= bar[i].style.width.slice(0, -1);
		bar[i].style.width	= originalWidth/changeFactor + "%";
	}
}
window.onscroll = function (e) {
	var elemTop = document.getElementsByClassName('skills');
	if(window.scrollY > elemTop[0].offsetTop/1.5){
		if(bar[0].style.width.slice(0, -1)<1){
				for(var i = 0; i<bar.length; i++){
					bar[i].style.transitionDuration = '1s';
					var originalWidth = bar[i].style.width.slice(0, -1) * changeFactor;
				bar[i].style.width = originalWidth + "%";
			}
		}
	}
	else{
		if(bar[0].style.width.slice(0, -1)>1){
			for(var i = 0; i<bar.length; i++){
				bar[i].style.transitionDuration = '1s';
				var originalWidth	= bar[i].style.width.slice(0, -1);
				bar[i].style.width	= originalWidth/changeFactor + "%";
			}
		}
	}
}

/*NAV FUNCTIONALITY*/
function ul(index) {
	console.log('click!' + index)

	var underlines = document.querySelectorAll(".underline");

	for (var i = 0; i < underlines.length; i++) {
		underlines[i].style.transform = 'translate3d(' + index * 100 + '%,0,0)';
	}
}
