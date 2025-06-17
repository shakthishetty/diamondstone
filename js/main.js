// This file is intentionally left blank.


document.addEventListener('DOMContentLoaded', function() {
    // Load the navbar
    fetch('components/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
        });
    
    // Load the header
    fetch('components/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
        });

        fetch('components/slider.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('slider-container').innerHTML = data;
        });


        fetch('components/collections.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('collections-container').innerHTML = data;
        });

        fetch('components/application.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('application-container').innerHTML = data;
        });

        fetch('components/finishes.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('finishes-container').innerHTML = data;
        });

        fetch('components/whyChooseUs.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('whyChooseUs-container').innerHTML = data;
        });

        fetch('components/project.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('project-container').innerHTML = data;
        });

        
        fetch('components/address.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('address-container').innerHTML = data;
        });

        fetch('components/blogs.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('blogs-container').innerHTML = data;
        });

        fetch('components/resources.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('resources-container').innerHTML = data;
        });

        fetch('components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        });

      
});