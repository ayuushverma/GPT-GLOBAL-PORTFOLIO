 window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
        }
});



  document.querySelector(".back-button").addEventListener("click", function(e) {
    e.preventDefault();
    document.body.classList.add("fade-out");

    setTimeout(() => {
      window.location.href = "index.html";
    }, 100); // wait for fade-out to complete
  });