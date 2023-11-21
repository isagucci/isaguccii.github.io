  var currentImageIndex = 0;
  var imageUrls = ['desk1.jpg', 'desk2.jpg', 'desk3.jpg','desk4.jpg','desk5.jpg','desk6.jpg']; 

  function changeBackgroundImage() {
    var body = document.body;

    // Check if there are more images to display
    if (currentImageIndex < imageUrls.length) {
      // Set the next background image
      body.style.backgroundImage = 'url(' + imageUrls[currentImageIndex] + ')';
      currentImageIndex++;
    } else {
      // If all images have been displayed, reset to the first image
      currentImageIndex = 0;
      body.style.backgroundImage = 'url(' + imageUrls[currentImageIndex] + ')';
      currentImageIndex++;
    }
  }