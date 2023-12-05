 function toggleVisibility(containerId) {
      var container = document.getElementById(containerId);

      // Toggle opacity to create a flash effect
      container.style.opacity = (container.style.opacity === '0' || container.style.opacity === '') ? '1' : '0';

      // Toggle visibility after a short delay
      setTimeout(function() {
        container.style.display = (container.style.display === 'none' || container.style.display === '') ? 'block' : 'none';
      }, 10); // 500 milliseconds = 0.5 seconds (adjust as needed)
    }

