const url = "http://localhost:3000/users";

fetch(url)
    .then((response) => {
        console.log(response);
        return response.json(); // Översätt svaret till JSON
    })
    .then((users) => {
        // Skapa ul-elementet
        const ul = document.createElement('ul');

        // Loopa igenom användarna och skapa li-element för varje användare
        users.forEach(user => {
            const li = document.createElement('li'); // Skapa ett li-element

            // Skapa innehållet för varje li-element
            li.innerHTML = `Förnamn: ${user.firstName} Efternamn: ${user.lastName} <br> Användarnamn: ${user.username}`; // Skriv ut användarens namn och användarnamn


            li.style.backgroundColor = user.color; // Sätt bakgrundsfärgen från användarens color-egenskap
            ul.appendChild(li); // Lägg till li-elementet i ul-elementet
        });

        // Lägg till ul-elementet på sidan
        document.body.appendChild(ul);
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });
