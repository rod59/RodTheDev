/*BARS SLIDING IN OUT FUNCTIONALITY*/
var bar = document.getElementsByClassName('proficiency-bar');
var changeFactor = 1000;

window.onload = function() {
  for (var i = 0; i < bar.length; i++) {
    bar[i].style.transitionDuration = '0s';
    var originalWidth = bar[i].style.width.slice(0, -1);
    bar[i].style.width = originalWidth / changeFactor + "%";
  }
}
window.onscroll = function(e) {
  var elemTop = document.getElementsByClassName('skills');
  if (window.scrollY > elemTop[0].offsetTop / 1.5) {
    if (bar[0].style.width.slice(0, -1) < 1) {
      for (var i = 0; i < bar.length; i++) {
        bar[i].style.transitionDuration = '1s';
        var originalWidth = bar[i].style.width.slice(0, -1) * changeFactor;
        bar[i].style.width = originalWidth + "%";
      }
    }
  } else {
    if (bar[0].style.width.slice(0, -1) > 1) {
      for (var i = 0; i < bar.length; i++) {
        bar[i].style.transitionDuration = '1s';
        var originalWidth = bar[i].style.width.slice(0, -1);
        bar[i].style.width = originalWidth / changeFactor + "%";
      }
    }
  }
}

/*CLOUDS MOVEMENT*/
//THE ORDER OF THESE ARRAYS MATTERS!!!
//EACH POSITION IS LINKED (ex: currentCloudMargin[0] associated with currentCloud[0])
//SPEED OF MOVEMENT IS LINKED TO POSITIONING IN ARRAY AS WELL
var currentCloudMargin = [400, 800, 100, 600, 200, 1000, 300, 1200];
var currentCloud = [document.getElementsByClassName('small-cloud')[0],
  document.getElementsByClassName('small-cloud')[1],
  document.getElementsByClassName('mid-cloud')[0],
  document.getElementsByClassName('mid-cloud')[1],
  document.getElementsByClassName('big-cloud')[0],
  document.getElementsByClassName('big-cloud')[1],
  document.getElementsByClassName('biggest-cloud')[0],
  document.getElementsByClassName('biggest-cloud')[1]
];

var biggestMoveLeft = (function() {
  for (var i = 0; i < currentCloud.length; i++) {
    continueCloud(i);
  }
});

function resetCloud(input) {
  currentCloudMargin[input] = -300;
  currentCloud[input].style.marginLeft = currentCloudMargin[input] + 'px';
  continueCloud(input);
}

function continueCloud(iValue) {
  var leftMovementInterval = setInterval(function() {
    var screenWidth = parseInt(window.innerWidth);
    currentCloudMargin[iValue] = currentCloudMargin[iValue] + (iValue + 1) / 10;

    if (currentCloud[iValue].style.marginLeft.slice(0, -2) > screenWidth) {
      resetCloud(iValue);
      clearInterval(leftMovementInterval);
    } else {
      currentCloud[iValue].style.marginLeft = currentCloudMargin[iValue] + 'px';
    }
  }, 25);
}
biggestMoveLeft();
//fish movement
var currentFishMargin = [400, 800, 100, 600, 200, 1000, 300, 1200];
var currentFish = [document.getElementsByClassName('small-fish')[0],
  document.getElementsByClassName('small-fish')[1],
  document.getElementsByClassName('mid-fish')[0],
  document.getElementsByClassName('mid-fish')[1],
  document.getElementsByClassName('big-fish')[0],
  document.getElementsByClassName('big-fish')[1]
];

var fishMovement = (function() {
  for (var i = 0; i < currentFish.length; i++) {
    if(i%2 === 0){
      continueFishRight(i);
    }
    else{
      continueFishLeft(i);
    }
  }
});

function continueFishLeft(i) {
  var leftMovementInterval = setInterval(function() {
    var screenWidth = parseInt(window.innerWidth);
    currentFishMargin[i] = currentFishMargin[i] - (i + 1)/4;

    if (currentFish[i].style.marginLeft.slice(0, -2) < -200) {
      currentFish[i].style.transform = 'scalex(1)';
      continueFishRight(i);
      clearInterval(leftMovementInterval);

    } else {
      currentFish[i].style.marginLeft = currentFishMargin[i] + 'px';
    }
  }, 20);
}

function continueFishRight(i) {
  var rightMovementInterval = setInterval(function() {
    var screenWidth = parseInt(window.innerWidth);
    currentFishMargin[i] = currentFishMargin[i] + (i + 1)/4;

    if (currentFish[i].style.marginLeft.slice(0, -2) > screenWidth+200) {
      //flip fish and continue left
      currentFish[i].style.transform = 'scalex(-1)';
      continueFishLeft(i);
      clearInterval(rightMovementInterval);
    } else {
      currentFish[i].style.marginLeft = currentFishMargin[i] + 'px';
    }
  }, 20);
}
fishMovement();
