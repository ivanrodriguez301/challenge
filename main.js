document.getElementById("registroForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value
    const apellido = document.getElementById("apellido").value
    const fechaNacimiento = document.getElementById("fechaNacimiento").value

    const data = {
        nombre: nombre,
        apellido: apellido,
        fechaNacimiento: fechaNacimiento
    };

    fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("respuesta").innerHTML = JSON.stringify(data, null, 2)
    })
    .catch(error => {
        console.error("Error al enviar la solicitud:", error)
    });
});
