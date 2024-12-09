
console.log("file is working!")

let cookButton = document.getElementById("button");

console.log(cookButton)

// thank u thank u athena from shecodes: https://www.shecodes.io/athena/15247-how-to-change-the-src-in-img-after-clicking-button-with-addeventlistener#:~:text=getElementById(%22myButton%22)%3B%20myButton,jpg%22%3B%20%7D)%3B

const image = document.getElementById("ingredients");
const button = document.getElementById("button");

cookButton.addEventListener("click", function() {

    if (ingredients.src.endsWith("paresmix.jpeg"))  {
        ingredients.src = "pares.png";
    } else {
        ingredients.src = "paresmix.jpeg";
    }
    console.log("clicked!")
    document.body.classList.toggle("ready to eat")
 
});
