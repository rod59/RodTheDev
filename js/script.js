/*BARS SLIDING IN OUT FUNCTIONALITY*/
let bar = document.getElementsByClassName('proficiency-bar');
let changeFactor = 1000;

window.onload = function() {
  for (let i = 0; i < bar.length; i++) {
    bar[i].style.transitionDuration = '0s';
    let originalWidth = bar[i].style.width.slice(0, -1);
    bar[i].style.width = originalWidth / changeFactor + "%";
  }
}
window.onscroll = function(e) {
  let elemTop = document.getElementsByClassName('skills');
  if (window.scrollY > elemTop[0].offsetTop / 1.5) {
    if (bar[0].style.width.slice(0, -1) < 1) {
      for (let i = 0; i < bar.length; i++) {
        bar[i].style.transitionDuration = '1s';
        let originalWidth = bar[i].style.width.slice(0, -1) * changeFactor;
        bar[i].style.width = originalWidth + "%";
      }
    }
  } else {
    if (bar[0].style.width.slice(0, -1) > 1) {
      for (let i = 0; i < bar.length; i++) {
        bar[i].style.transitionDuration = '1s';
        let originalWidth = bar[i].style.width.slice(0, -1);
        bar[i].style.width = originalWidth / changeFactor + "%";
      }
    }
  }
}

/*CLOUDS MOVEMENT*/
//THE ORDER OF THESE ARRAYS MATTERS!!!
//EACH POSITION IS LINKED (ex: currentCloudMargin[0] associated with currentCloud[0])
//SPEED OF MOVEMENT IS LINKED TO POSITIONING IN ARRAY AS WELL
let currentCloudMargin = [400, 800, 100, 600, 200, 1000, 300, 1200];
let currentCloud = [document.getElementsByClassName('small-cloud')[0],
  document.getElementsByClassName('small-cloud')[1],
  document.getElementsByClassName('mid-cloud')[0],
  document.getElementsByClassName('mid-cloud')[1],
  document.getElementsByClassName('big-cloud')[0],
  document.getElementsByClassName('big-cloud')[1],
  document.getElementsByClassName('biggest-cloud')[0],
  document.getElementsByClassName('biggest-cloud')[1]
];

let biggestMoveLeft = (function() {
  for (let i = 0; i < currentCloud.length; i++) {
    continueCloud(i);
  }
});

function resetCloud(input) {
  currentCloudMargin[input] = -300;
  currentCloud[input].style.marginLeft = currentCloudMargin[input] + 'px';
  continueCloud(input);
}

function continueCloud(iValue) {
  let leftMovementInterval = setInterval(function() {
    let screenWidth = parseInt(window.innerWidth);
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
let currentFishMargin = [400, 800, 100, 600, 200, 1000, 300, 1200];
let currentFish = [document.getElementsByClassName('small-fish')[0],
  document.getElementsByClassName('small-fish')[1],
  document.getElementsByClassName('mid-fish')[0],
  document.getElementsByClassName('mid-fish')[1],
  document.getElementsByClassName('big-fish')[0],
  document.getElementsByClassName('big-fish')[1]
];

let fishMovement = (function() {
  for (let i = 0; i < currentFish.length; i++) {
    if(i%2 === 0){
      continueFishRight(i);
    }
    else{
      continueFishLeft(i);
    }
  }
});

function continueFishLeft(i) {
  let leftMovementInterval = setInterval(function() {
    let screenWidth = parseInt(window.innerWidth);
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
  let rightMovementInterval = setInterval(function() {
    let screenWidth = parseInt(window.innerWidth);
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
