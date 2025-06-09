const corpo = document.getElementById("corpo-do-presente");
const tampa = document.getElementById("tampa-do-presente");
const titulo = document.getElementById("titulo");

let isDragging = false;
let offsetX, offsetY;

tampa.addEventListener("mousedown", (e) => {
  isDragging = true;

  corpo.src = "assets/corpo-aberto.png";
  titulo.textContent = "Obrigado...";

  const rect = tampa.getBoundingClientRect();
  offsetX = e.clientX - rect.left;
  offsetY = e.clientY - rect.top;
  
  tampa.style.cursor = "grabbing";

  setTimeout(() => {
    document.title = "Uma surpresinha para ocê!";
    titulo.style.color = "rgb(255, 224, 156";
    titulo.textContent = "Eu realmente achei que nunca ia sair!";
    corpo.src = "assets/cachorrinho.png";
    document.getElementById("latido").play();
    tampa.style.pointerEvents = "none";
    tampa.style.userSelect = "none";
  }, 5000);
  setTimeout(() => {
    titulo.textContent = "Mas você me achou! (❁´◡`❁)";
    document.getElementById("latido").play();
  }, 10000);
  setTimeout(() => {
    titulo.textContent = "Você pode abrir minha cartinha?";
    document.getElementById("latido").play();
  }, 15000);
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  const containerRect = document.getElementById("container").getBoundingClientRect();
  const newLeft = e.clientX - containerRect.left - offsetX;
  const newTop = e.clientY - containerRect.top - offsetY;

  tampa.style.left = `${newLeft}px`;
  tampa.style.top = `${newTop}px`;
});

document.addEventListener("mouseup", () => {
  if (isDragging) {
    isDragging = false;
    tampa.style.cursor = "grab";
  }
});
