///GET, POST, PUT Y DELETE

function getCliente() {
    $.ajax({
        url: "http://localhost:8080/api/Client/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            pintarCliente(respuesta);
        }

    });

}

function postCliente() {

    if ($("#email").val().length == 0 ||
        $("#password").val().length == 0 ||
        $("#name").val().length == 0 ||
        $("#age").val().length == 0
    ) {
        alert("Todos los campos son obligatorios para crear el cliente");
    } else {
        let cajas = {
            email: $("#email").val(),
            password: $("#password").val(),
            name: $("#name").val(),
            age: $("#age").val()
        };
        $.ajax({
            url: "http://localhost:8080/api/Client/save",
            type: "POST",
            datatype: "JSON",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(cajas),
            success: function (respuesta) {
                alert("Se creo correctamente el Cliente");
                window.location.reload();
            }
        });
    }
}


function putCliente(idBotonActualizar) {
    console.log(idBotonActualizar);

    if ($("#email").val().length == 0 ||
        $("#password").val().length == 0 ||
        $("#name").val().length == 0 ||
        $("#age").val().length == 0
    ) {
        alert("Todos los campos son obligatorios para actualizar el cliente");
    } else {
        let cajas = {
            id: idBotonActualizar,
            email: $("#email").val(),
            password: $("#password").val(),
            name: $("#name").val(),
            age: $("#age").val()

        };
        $.ajax({
            url: "http://localhost:8080/api/Client/update",
            type: "PUT",
            datatype: "JSON",
            contentType: "application/JSON",
            data: JSON.stringify(cajas),
            success: function (respuesta) {
                alert("Se actualizo correctamente el Cliente");
                window.location.reload();
            }
        });
    }
}


function deleteCliente(idBotonBorrar) {
    let myData = {
        id: idBotonBorrar
    }

    $.ajax({
        url: "http://localhost:8080/api/Client/" + idBotonBorrar,
        type: "DELETE",
        datatype: "JSON",
        contentType: "application/JSON",
        data: JSON.stringify(myData),
        success: function (respuesta) {
            alert("Se borro correctamente el Cliente");
            window.location.reload();
        }

    });
}

/////////////////////////////////////////////////
function pintarCliente(respuesta) {
    let myTable = "<table>";
    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].idClient + "</td>";
        myTable += "<td>" + respuesta[i].email + "</td>";
        myTable += "<td>" + respuesta[i].password + "</td>";
        myTable += "<td>" + respuesta[i].name + "</td>";
        myTable += "<td>" + respuesta[i].age + "</td>";
        myTable += "<td><button class='text-neutral-900 bg-red-500 border-0  focus:outline-none  hover:bg-indigo-600 rounded text-lg' onclick='putCliente(" + respuesta[i].idClient + ")'>Actualizar</button>";
        myTable += "<td><button class='text-neutral-900 bg-red-500 border-0  focus:outline-none  hover:bg-indigo-600 rounded text-lg' onclick='deleteCliente(" + respuesta[i].idClient + ")'>Borrar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultado1").html(myTable);
}
