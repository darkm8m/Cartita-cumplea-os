// Leer mensaje personalizado desde los parámetros de la URL
const urlSearchParams = new URLSearchParams(window.location.search);
const messageCustom = urlSearchParams.get('message');

if (messageCustom) {
  const mainMessageElement = document.querySelector('#mainMessage');
  mainMessageElement.textContent = decodeURI(messageCustom);
}

// El tutorial comienza aquí
const btnOpenElement = document.querySelector('#open');
const btnCloseElement = document.querySelector('#close');

btnCloseElement.disabled = true;

const audio = document.getElementById('miCancion');

audio.addEventListener('canplaythrough', () => {
  console.log("El audio se ha cargado correctamente.");
});

audio.addEventListener('error', (event) => {
  console.error("Error al cargar el audio:", event);
});

btnOpenElement.addEventListener('click', () => {
  btnOpenElement.disabled = true;
  btnCloseElement.disabled = false;
  const coverElement = document.querySelector('.cover');
  coverElement.classList.add('open-cover');

  // Reproducir la canción
  audio.play().then(() => {
    console.log("Reproducción iniciada correctamente.");
  }).catch(error => {
    console.error("Error al reproducir el audio:", error);
  });

  setTimeout(() => {
    coverElement.style.zIndex = -1;

    const paperElement = document.querySelector('.paper');
    paperElement.classList.remove('close-paper');
    paperElement.classList.add('open-paper');

    // Animación del corazón
    const heartElement = document.querySelector('.heart');
    heartElement.style.display = 'block';
  }, 500);
});

btnCloseElement.addEventListener('click', () => {
  btnOpenElement.disabled = false;
  btnCloseElement.disabled = true;

  const coverElement = document.querySelector('.cover');
  const paperElement = document.querySelector('.paper');
  paperElement.classList.remove('open-paper');
  paperElement.classList.add('close-paper');

  // Pausar la canción
  audio.pause();

  setTimeout(() => {
    coverElement.style.zIndex = 0;
    coverElement.classList.remove('open-cover');

    // Animación del corazón
    const heartElement = document.querySelector('.heart');
    heartElement.style.display = 'none';
  }, 500);
});
