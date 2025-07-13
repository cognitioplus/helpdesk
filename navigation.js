document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
    this.classList.add('active');
    document.querySelectorAll('main > section').forEach(sec => sec.style.display = 'none');
    document.getElementById(this.id.replace('-link', '-section')).style.display = '';
  });
});
