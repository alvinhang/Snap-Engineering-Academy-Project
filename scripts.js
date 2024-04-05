/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */


const carMakes = {
    "Audi": "https://upload.wikimedia.org/wikipedia/commons/9/92/Audi-Logo_2016.svg",
    "BMW": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/1015px-BMW.svg.png",
    "Cheverolet": "https://di-uploads-pod2.dealerinspire.com/biggerschevy/uploads/2018/02/2013-Chevrolet-BowTie.jpg",
    "Dodge": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Dodge_logo.svg",
    "Ford": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/1200px-Ford_logo_flat.svg.png",
    "Honda": "https://upload.wikimedia.org/wikipedia/commons/3/38/Honda.svg",
    "Jeep": "https://upload.wikimedia.org/wikipedia/commons/0/0d/Jeep_logo.svg",
    "Mazda": "https://upload.wikimedia.org/wikipedia/commons/3/3f/Mazda_logo.svg",
    "Mercedes": "https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg",
    "Nissan": "https://upload.wikimedia.org/wikipedia/commons/2/23/Nissan_2020_logo.svg",
    "Porsche": "https://upload.wikimedia.org/wikipedia/de/7/70/Porsche_Logo.svg",
    "Subaru": "https://upload.wikimedia.org/wikipedia/commons/4/47/Subaru_logo.svg",
    "Tesla": "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
    "Toyota": "https://upload.wikimedia.org/wikipedia/commons/e/e7/Toyota.svg",
    "Volkswagen": "https://upload.wikimedia.org/wikipedia/commons/6/6d/Volkswagen_logo_2019.svg"
};
// Your final submission should have much more data than this, and 
// you should use more than just an array of strings to store it all.



function createCard(title, imageURL) {
    const card = document.createElement("div");
    card.classList.add("card");

    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");

    const cardTitle = document.createElement("h2");
    cardTitle.textContent = title;

    const image = document.createElement("img");
    image.src = imageURL;
    image.alt = title + " Logo";

    cardContent.appendChild(cardTitle);
    cardContent.appendChild(image);
    card.appendChild(cardContent);

    return card;
}

function addCard() {
    const title = prompt("Enter the car make:");
    const imageURL = prompt("Enter the image URL for the car make:");
    
    if (title && imageURL) {
        // Add the new car make to the carMakes object
        carMakes[title] = imageURL;
        
        // Refresh the displayed cards
        showCards();
    } else {
        alert("Please provide both a title and an image URL.");
    }
}

function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";

    for (const [title, imageURL] of Object.entries(carMakes)) {
        const nextCard = createCard(title, imageURL); // Create card for the current car make
        cardContainer.appendChild(nextCard); // Add new card to the container
    }
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
    console.log("Button Clicked!")
    alert("I guess I can kiss heaven goodbye, because it got to be a sin to look this good!");
}

function removeLastCard() {
    delete carMakes[Object.keys(carMakes).pop()]; // Remove last item in titles array
    showCards(); // Call showCards again to refresh
}
