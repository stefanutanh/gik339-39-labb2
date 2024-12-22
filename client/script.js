const url = "http://localhost:3000/users";

fetch(url)
    .then((response) => {
        console.log("Svar från servern:", response); // Loggar svaret från servern
        return response.json(); // Översätt svaret till JSON
    })

    .then((users) => {
        console.log("Användardata:", users); // Loggar den hämtade användardatan
        
        // Skapar ul-elementet
        const ul = document.createElement('ul');
        console.log("Skapade ul-elementet:", ul); // Loggar det skapade ul-elementet
    
        // Loopa igenom användarna och skapar li-element för varje användare
        users.forEach(user => {
            const li = document.createElement('li'); // Skapa ett li-element
            console.log("Skapade li-element för användare:", user.username); // Loggar användarnamnet som bearbetas
            
            // Skapar innehållet för varje li-element
            li.innerHTML = `Förnamn: ${user.firstName} // Efternamn: ${user.lastName} // Användarnamn: ${user.username}`; // Skriv ut användarens namn och användarnamn
            li.style.backgroundColor = user.color; // Sätter bakgrundsfärgen från användarens color-egenskap    
            li.style.fontSize = "0.8em"; // Sätter storleken på texten       
            ul.appendChild(li); // Lägger till li-elementet i ul-elementet
        });
        
        document.body.appendChild(ul); // Lägger till ul-elementet på sidan
    })
    .catch((error) => {
        console.error("Error fetching data:", error); // Loggar eventuella fel vid fetch
    });
