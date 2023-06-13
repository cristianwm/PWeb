function mostrarHobbies() {
    var hobbies = "Hobbies: Academia, Música, Jogos";
    var hobbiesElement = document.getElementById("hobbies");
    hobbiesElement.textContent = hobbies;
    hobbiesElement.style.display = "block";
  }
function mostrarmais() {
    var mostrarmais = "mostrarmais: Academia, Música, Jogos";
    var mostrarmaisElement = document.getElementById("mostrarmais");
    mostrarmaisElement.textContent = mostrarmais;
    mostrarmaisElement.style.display = "block";
  }



  window.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('nav a');
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function(e) {
        e.preventDefault();
        var targetId = this.getAttribute('href');
        var targetElement = document.querySelector(targetId);
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      });
    }
  });
  