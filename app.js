let amigos = [];

function agregarAmigo() {
  const input = document.getElementById("amigo").value.trim();
  if (input !== "") {
      amigos.push(input);
      document.getElementById("amigo").value = "";
      actualizarLista();
  } else {
      alert("Por favor, inserte un nombre");
  }
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
    document.getElementById("resultado").textContent = "";
}

function sortearAmigo() {
  if (amigos.length > 0) {
      const randomIndex = Math.floor(Math.random() * amigos.length);
      const elegido = amigos[randomIndex];
      document.getElementById("resultado").innerHTML = `<li>Amigo Secreto: ${elegido}</li>`;
  } else {
      alert("No hay amigos en la lista para sortear.");
  }
}