function showNav() {
  const navList = document.getElementById('navList');

  if (navList.style.display === 'none') {
    navList.style.display = 'block';
  } else {
    navList.style.display = 'none';
  }
};

document.getElementById('numbers').addEventListener('click', function(event) {
  event.preventDefault();

  document.getElementById('letters').textContent = "12345678910";

  document.getElementById('navList').style.display = 'none';
});

document.getElementById('letter').addEventListener('click', function(event) {
  event.preventDefault();

  document.getElementById('letters').innerHTML = "ABCDEFGHIJKLM<br>NOPQRSTUVWXYZ";

  document.getElementById('navList').style.display = 'none';
});






   