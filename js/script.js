/*BARS SLIDING IN OUT FUNCTIONALITY*/
window.onscroll = function (e) {
	var bar = document.getElementsByClassName('proficiency-bar');
	var elemTop = document.getElementsByClassName('skills');
	var changeFactor = 1000;
	if(window.scrollY > elemTop[0].offsetTop/1.5){
		if(bar[0].style.width.slice(0, -1)<1){
				for(var i = 0; i<bar.length; i++){
					var originalWidth = bar[i].style.width.slice(0, -1) * changeFactor;
					for(var j = 0; j < originalWidth; j++ ){
						bar[i].style.width = j + "%";
				}
				bar[i].style.width = originalWidth + "%";
			}
		}
	}
	else{
		if(bar[0].style.width.slice(0, -1)>1){
			for(var i = 0; i<bar.length; i++){
				var originalWidth	= bar[i].style.width.slice(0, -1);
				for(var j = originalWidth; j > 0; j-- ){
					bar[i].style.width = j + "%";
				}
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
