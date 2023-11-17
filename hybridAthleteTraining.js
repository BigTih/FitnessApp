document.addEventListener("DOMContentLoaded", function() {
    // Select navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    // Add click event listeners to each link
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Prevent default link behavior
            event.preventDefault();

            // Get the href attribute of the clicked link
            const page = event.target.getAttribute('href');

            // Redirect to the clicked link's href
            window.location.href = page;
        });
    });

    // Add event listener for the Get Started button
    const getStartedButton = document.querySelector('.btn-start');
    if (getStartedButton) {
        getStartedButton.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = getStartedButton.getAttribute('href');
        });
    }

    const form = document.getElementById('start-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        console.log('Username:', username); // For debugging

        // Here you would typically make an AJAX request to your server
        //sendDataToServer(username);
    });


});
