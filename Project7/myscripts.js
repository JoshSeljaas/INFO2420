function preloadImages() {
    if (document.images) {
      print1 = new Image();
      print2 = new Image();
      logo1 = new Image();
      logo2 = new Image();
  
      print1.src = "Images/print1.jpg";
      print2.src = "Images/print2.jpg";
      logo1.src = "Images/logo.png";
      logo2.src = "Images/logo2.jpg";
    }
  }
  
  function swapMe(thisImage, newImage) {
    document.getElementById(thisImage).src = eval(newImage + ".src");
  }
  
  let imgPath = "Images/Fullsize/";
  let imgArray = [
    "CoupleCamping.jpg",
    "CoupleEveningLg.jpg",
    "CoupleHikingLg.jpg",
    "CoupleSnowBoardLg.jpg"
  ];
  
  let titleArray = [
    "Couple Camping",
    "Evening Walk",
    "Mountain Hike",
    "Snowboarding Adventure"
  ];
  
  function swapImage(imgID) {
    document.getElementById("fullimage").src = imgPath + imgArray[imgID];
    document.getElementById("imagetitle").innerHTML = titleArray[imgID];
  }
  