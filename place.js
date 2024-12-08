console.log("file is working!")

let eatButton = document.getElementById("button");

console.log(eatButton)

// thank u thank u athena from shecodes: https://www.shecodes.io/athena/15247-how-to-change-the-src-in-img-after-clicking-button-with-addeventlistener#:~:text=getElementById(%22myButton%22)%3B%20myButton,jpg%22%3B%20%7D)%3B

const image = document.getElementById("sushi");
const button = document.getElementById("button");


eatButton.addEventListener("click", function() {

    if (sushi.src.endsWith("sushieat.jpeg"))  {
        sushi.src = "sushiate.jpeg";
    } else {
        sushi.src = "sushieat.jpeg";
    }
    console.log("clicked!")
    document.body.classList.toggle("ate")
 
});



