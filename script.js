const url = "https://my-json-server.typicode.com/mie-du/gik339-ht23/users";

fetch(url)
.then((response) => {
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return response.json(); // Översätt svaret till JSON
})
.then((users) => {
    console.log('Parsed users:', users); // Logga den parsade JSON-datan
    const html = `<p>${users[0].firstname}</p>`; // Använd backticks för template literals
    document.body.insertAdjacentHTML('beforeend', html);
})
.catch((error) => {
    console.error("There was an error with the fetch operation:", error);
});
