function getStatus() {
    $.ajax({
        url: "http://193.122.149.200:8080/api/Reservation/report-status",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            pintarStatus(respuesta);
        }
    });

}

function pintarStatus(respuesta) {
    let myTable = "<table>";
    myTable += "<tr>";
    myTable += "<td>" + respuesta.completed + "</td>";
    myTable += "<td>" + respuesta.cancelled + "</td>";
    myTable += "</tr>";

    myTable += "</table>";
    $("#resultado1").html(myTable);

}

function getFechas() {
    $.ajax({
        url: "http://193.122.149.200:8080/api/Reservation/report-dates/{dateOne}/{dateTwo}",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            pintarStatus(respuesta);
        }
    });

}

function pintarFechas() {
    for (i = 0; i < respuesta.length; i++) {
        let myTable = "<table>";
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].dateOne + "</td>";
        myTable += "<td>" + respuesta[i].dateTwo + "</td>";
        myTable += "</tr>";

        myTable += "</table>";
        $("#resultado2").html(myTable);
    }
}

function getClientes() {

    $.ajax({
        url: "http://193.122.149.200:8080/api/Reservation/report-clients",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            pintarStatus(respuesta);
        }
    });

}

function pintarClientes() {
    let myTable = "<table>";
    myTable += "<tr>";
    myTable += "<td>" + respuesta[i].idClient + "</td>";
    myTable += "</tr>";

    myTable += "</table>";
    $("#resultado3").html(myTable);
}
