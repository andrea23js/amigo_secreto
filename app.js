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
  
}

