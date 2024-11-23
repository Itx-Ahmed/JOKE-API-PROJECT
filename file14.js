const mycontainer = document.getElementById("container"); 
const myid = document.getElementById("joke"); 
const myjokes = document.getElementById("myjokes"); 

myjokes.addEventListener('click', async function() {
    try {
        // Fetch joke from the API
        const response = await fetch('https://icanhazdadjoke.com/', {
            headers: {
                'Accept': 'application/json' // Ensures we receive the response in JSON format
            }
        });

        const jokeData = await response.json(); // Parse the JSON data
        console.log(jokeData); // Log the full response to the console

        // Display the joke in the "joke" element
        myid.textContent = jokeData.joke;
    } catch (error) {
        console.log("Something went wrong...", error); // Handle errors properly
    }
});
