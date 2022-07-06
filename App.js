let titulo = document.getElementById("bienvenida")
const nombreUsuario = prompt("Estás en Porteros Futsal! Ingresá tu nombre:");

titulo.innerText = "Te damos la bienvenida a Porteros Futsal " +nombreUsuario+"! Estas son las ofertas que tenemos para vos.";

let parrafo = document.createElement("p");

parrafo.innerHTML = "<h2>Debido a la situación actual nuestra tienda online se encuentra desactivada hasta nuevo aviso</h2>";

document.body.append(parrafo);


function mostrarProductos() {
    const contenedor = document.getElementById("contenedor-protecciones");

    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `<div class="card text-bg-light mb-5" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${producto.img}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${producto.nombre}</h5>
              <p class="card-text">${producto.desc}</p>
            </div>
          </div>
        </div>
        <div class="card-footer bg-transparent border-success">${producto.precio}</div>
      </div>`;
        contenedor.appendChild(div);
    });
}

mostrarProductos();
nombreUsuario();





