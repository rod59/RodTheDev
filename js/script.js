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

/*CLOUDS MOVEMENT*/
	var currentCloudMargin = 0;
	var currentCloud = document.getElementsByClassName('biggest-cloud')[0];


	var biggestMoveLeft = (function(){
		var leftMovementInterval = setInterval(function(){
		var screenWidth = parseInt(window.innerWidth);
		currentCloudMargin = currentCloudMargin + .2;
		if(currentCloud.style.marginLeft.slice(0,-2) > parseInt(currentCloud.style.width.slice(0, -2)) + screenWidth){
			resetCloud();
			clearInterval(leftMovementInterval);
		}
		else{
		currentCloud.style.marginLeft = currentCloudMargin + 'px';
		}
		}, 1);
	});

	var resetCloud = (function(){
		currentCloudMargin = -10;
		currentCloud.style.marginLeft = currentCloudMargin + 'px';
		biggestMoveLeft();
	});
biggestMoveLeft();
/*NAV FUNCTIONALITY*/
function ul(index) {
	console.log('click!' + index)

	var underlines = document.querySelectorAll(".underline");

	for (var i = 0; i < underlines.length; i++) {
		underlines[i].style.transform = 'translate3d(' + index * 100 + '%,0,0)';
	}
}
