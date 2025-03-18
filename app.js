// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

//////validar nombre ingresado
function agregarAmigo() {
  //opteniendo el nombre
  let NuevoAmigo = document.getElementById('amigo').value;
  //validar si esta vacio
  if (NuevoAmigo === "") {
    alert('Por favor, inserte un nombre.');
  }
  else
  //si no esta vacio
  {
    //agregando a al array
    amigos.push(NuevoAmigo);
    // limpiarCaja
    document.querySelector('#amigo').value = '';
    actualizarLista();
    return;
  }
  //aca se crea los li
  function actualizarLista() {
//borro datos de la lista para no duplicar
    let listaDespegable = document.getElementById('listaAmigos');
    listaDespegable.innerHTML = "";
    //recorrer arreglo nombres
    for (let i = 0; i < amigos.length; i++) {
      console.log(amigos[i]);
      const li = document.createElement('li')
      li.textContent = amigos[i];
      const liPadre = document.getElementById('listaAmigos');
      liPadre.appendChild(li);
      console.log("si pasa");

    }

  }
}

function sortearAmigo() {

  if (amigos.length==0) {
    alert('No tiene nombres ingresados.');
  }
  else
  {
    //generando numero aleatorio
    let indiceAleatorio =  Math.floor(Math.random()*amigos.length);
    //borrando la lista y asignado el nombre ganador
    let listaDespegable = document.getElementById('listaAmigos');
    listaDespegable.innerHTML = amigos[indiceAleatorio];

  }

}

