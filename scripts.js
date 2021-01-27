var imgBox = document.getElementById("imagebox");
var overlayImg = document.getElementById("overlay_img");


imgBox.onclick = function (e) {
  imgBox.style.display = "none";
};

function showImg(t) {
  imgBox.style.display = "block";
  overlayImg.src = t.src;
}

var videoBox = document.getElementById("videobox");
var overlayVideo = document.getElementById("overlay_video");

videoBox.onclick = function (e) {
  // if the clicked element has the class of overlay
  if (e.target.classList.contains("overlay")) {
    // hide the overlay by clearing the display property
    videoBox.style.display = "";
  }
};

function showVideo(t) {
  videoBox.style.display = "block";
  overlayVideo.src = t.src;
}

// When the user scrolls down 20px from the top of the document, show the button
function scrollCheck() {
  var topButton = document.getElementById("topButton")
  //  Find a quarter of the height of the page
  var body = document.body
  var html = document.documentElement;
  var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
  var quarterHeight = height * 0.25;
  if (document.body.scrollTop > quarterHeight || document.documentElement.scrollTop > quarterHeight) {
      topButton.style.display = "block";
  } else {
      topButton.style.display = "none";
  }
}

function gotoTopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


