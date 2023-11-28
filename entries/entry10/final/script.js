document.addEventListener('DOMContentLoaded', function () {
    var images = ['lightning.png', 'lightning1.png', 'lightning2.png', 'lightning3.png', 'lightning4.png', 'lightning5.png', 'lightning6.png']
    var currentIndex = 0;
    var buttonClicked = false;

    document.getElementById('triggerButton').addEventListener('click', function () {
        var lightningContainer = document.getElementById('lightning-container');
        
        if (!buttonClicked) {
            alert("You clicked the button for the first time! Beware of the thunder and lightning!");
            buttonClicked = true;
        }

        lightningContainer.style.display = 'block';

    
        showImagesInSequence(lightningContainer, images, 800); 
    });

    function showImagesInSequence(element, imageArray, duration) {
        var startTime = null;

        function animate(currentTime) {
            if (!startTime) startTime = currentTime;

            var progress = currentTime - startTime;
            var ratio = Math.min(progress / duration, 1);

            // Set the gradient opacity from left to right
            element.style.opacity = ratio;

            if (progress < duration) {
                requestAnimationFrame(animate);
            } else {
                // Display the next image in the array
                currentIndex = (currentIndex + 1) % imageArray.length;
                document.getElementById('lightning-img').src = imageArray[currentIndex];

                // Reset opacity and hide container
                fadeOut(element, 500); // 500 milliseconds = 0.5 seconds
            }
        }

        // Display the first image in the array
        document.getElementById('lightning-img').src = imageArray[currentIndex];

        requestAnimationFrame(animate);
    }

    function fadeOut(element, duration) {
        var startTime = null;

        function animate(currentTime) {
            if (!startTime) startTime = currentTime;

            var progress = currentTime - startTime;
            var ratio = 1 - Math.min(progress / duration, 1);

            // Set the gradient opacity from right to left for fade-out effect
            element.style.opacity = ratio;

            if (progress < duration) {
                requestAnimationFrame(animate);
            } else {
                element.style.opacity = 0; // Ensure the final opacity is set
                element.style.display = 'none';
            }
        }

        requestAnimationFrame(animate);
    }
});
