

function Emisor(codigo, nombre, direccion, ciudad, tipo) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.direccion = direccion;
    this.ciudad = ciudad;
    this.tipo = tipo;
}


var registroEmisor = [
    new Emisor("1", "Juan Perez", "Chillogallo", "Quito", "Sucursal Centro"),
    new Emisor("2", "Pedro Andrade", "Las Cuadras", "Quito", "Sucursal Sur "),
    new Emisor("3", "Joaquin Martinez", "Pintado", "Quito", "Concesionario Chevrolet"),
    new Emisor("4", "Tomas Caiza", "El Labrador", "Quito", "Sucursal Norte"),
]
document.getElementById("table").style.visibility="hidden";


document.getElementById("enviar")
    .addEventListener("click", function () {

        var emisorNombre = document.getElementById('nombre').value;
        
        console.log('Sucursal : ' + emisorNombre)

        var emisor = registroEmisor.find(data =>
            data.nombre === emisorNombre
        );

        if (typeof emisor === "undefined") {

            document.forma.direccionOb.value = "";
            document.forma.ciudadOb.value = "";
            document.forma.tipoOb.value = "";

            alert("Sucursal Invalida");

        } else {

           
            document.forma.nombre.value=emisor.nombre;
            document.forma.direccionOb.value = emisor.direccion;
            document.forma.ciudadOb.value = emisor.ciudad;
            document.forma.tipoOb.value = emisor.tipo;
            console.log(emisor.codigo + " " + emisor.nombre + " " + emisor.direccion + " " + emisor.ciudad);

    

            var valorPieza = document.getElementById("piezaOb").value;
            var valorCantidad = document.getElementById("cantidadOb").value;
            var valorPedido = document.getElementById("pedidoOb").value;
 
            console.log(valorPieza);
            console.log(valorCantidad);
            console.log(valorPedido);


            var tabla = document.getElementById("table");
            
            var tr = document.createElement('tr');

            var td1 = document.createElement('td');
            tabla.appendChild(tr);
            td1.appendChild(document.createTextNode(emisor.codigo));
            tr.appendChild(td1);
            var td2 = document.createElement('td');
            td2.appendChild(document.createTextNode(emisor.nombre));
            tr.appendChild(td2);
            var td3 = document.createElement('td');
            td3.appendChild(document.createTextNode(emisor.direccion));
            tr.appendChild(td3);
            tabla.appendChild(tr);
            var td4 = document.createElement('td');
            td4.appendChild(document.createTextNode(emisor.ciudad));
            tr.appendChild(td4);
            var td5 = document.createElement('td');
            td5.appendChild(document.createTextNode(emisor.tipo));
            tr.appendChild(td5);
            tabla.appendChild(tr);
            var td6 = document.createElement('td');
            td6.appendChild(document.createTextNode(valorPieza));
            tr.appendChild(td6);
            tabla.appendChild(tr);
            var td7 = document.createElement('td');
            td7.appendChild(document.createTextNode(valorCantidad));
            tr.appendChild(td7);
            var td8 = document.createElement('td');
            td8.appendChild(document.createTextNode(valorPedido));
            tr.appendChild(td8);
            tabla.appendChild(tr);

  
       
        }
        document.getElementById("table").style.visibility="visible";
    });
   
  




