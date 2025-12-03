function myFunction() {
  const topnav = document.getElementById("myTopnav");
  topnav.classList.toggle("responsive");
  
  // Optional: Close menu when clicking a link (great UX)
  document.querySelectorAll('.topnav a:not(.icon)').forEach(link => {
    link.addEventListener('click', () => {
      topnav.classList.remove('responsive');
    });
  });
}

// Close menu when clicking outside (optional enhancement)
document.addEventListener('click', function(e) {
  const navbar = document.querySelector('.navbar');
  if (!navbar.contains(e.target)) {
    document.getElementById("myTopnav").classList.remove("responsive");
  }
});