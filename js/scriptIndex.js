document.addEventListener("DOMContentLoaded", async function () {
    // Obtén una referencia al elemento HTML donde deseas mostrar los datos
    const container = document.getElementById('comentarios');

    // Realiza la solicitud a la API
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => {
            // Verifica si la solicitud fue exitosa (código de respuesta 200)
            if (!response.ok) {
                throw new Error(`Error al cargar los datos: ${response.status}`);
            }
            // Parsea la respuesta JSON
            return response.json();
        })
        .then(data => {
            // Itera a través de los datos y muestra cada comentario en el contenedor
            data.forEach(comment => {
                const commentElement = document.createElement('div');
                commentElement.innerHTML = `
       <h2>${comment.name}</h2>
       <p><strong>Email:</strong> ${comment.email}</p>
       <p>${comment.body}</p>
       <hr>
     `;
                container.appendChild(commentElement);
            });
        })
        .catch(error => {
            console.error(error);
        });
});






// Realiza la solicitud a la API
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => {
        // Verifica si la solicitud fue exitosa (código de respuesta 200)
        if (!response.ok) {
            throw new Error(`Error al cargar los datos: ${response.status}`);
        }
        // Parsea la respuesta JSON
        return response.json();
    })
    .then(data => {
        // Itera a través de los datos y muestra cada comentario en el contenedor
        data.forEach(comment => {
            const commentElement = document.createElement('div');
            commentElement.innerHTML = `
         <h2>${comment.name}</h2>
         <p><strong>Email:</strong> ${comment.email}</p>
         <p>${comment.body}</p>
         <hr>
       `;
            container.appendChild(commentElement);
        });
    })
    .catch(error => {
        console.error(error);
    });