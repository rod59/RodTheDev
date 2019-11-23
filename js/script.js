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
