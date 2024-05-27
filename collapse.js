document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById('toggleSidebarCustom');
    const sidebar = document.getElementById('sidebarCustom');
    const mainContent = document.getElementById('mainContent');

    toggleButton.addEventListener('click', function() {
        sidebar.classList.toggle('collapsed');
        toggleButton.classList.toggle('collapsed');
        adjustMainContentWidth();
    });

    // Adjust width when the window is resized
    window.addEventListener('resize', function() {
        adjustMainContentWidth();
    });
    
    // Additional adjustment for specific screen size range
    function adjustForSpecificScreenSize() {
        const screenWidth = window.innerWidth;
        if (screenWidth >= 964 && screenWidth <= 1110) {
            mainContent.style.marginLeft = '0'; // Adjust as needed
            mainContent.style.width = '92%'; // Adjust as needed
        } 
    }
    
    // Adjust for specific screen size on initial load
    adjustForSpecificScreenSize();

    // Listen for resize events to adjust for specific screen size
    window.addEventListener('resize', adjustForSpecificScreenSize);    
    
});


