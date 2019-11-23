<<<<<<< HEAD
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
=======
window.onscroll = function (e) {
	var barLight = document.getElementsByClassName('proficiency-bar-navy');
	var barDark = document.getElementsByClassName('proficiency-bar-black');
	var elemTop = document.getElementsByClassName('skills');
	console.log(elemTop.offsetTop);
	if(window.scrollY > elemTop.offsetTop){
		for(var i = 0; i<barLight.length; i++){
			barLight[i].style.display = 'block';
		}
		for(var i = 0; i<barDark.length; i++){
			barDark[i].style.display = 'block';
		}
	}
	else{
		for(var i = 0; i<barLight.length; i++){
			barLight[i].style.display = 'none';
		}
		for(var i = 0; i<barDark.length; i++){
			barDark[i].style.display = 'none';
		}
	}
}


function ul(index) {
	console.log('click!' + index)

	var underlines = document.querySelectorAll(".underline");

	for (var i = 0; i < underlines.length; i++) {
		underlines[i].style.transform = 'translate3d(' + index * 100 + '%,0,0)';
	}
}
>>>>>>> 5e74707cdafb6fbddfb87c8ec8b531f1a81d432e
