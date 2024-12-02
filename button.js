console.log("file is working")

let backgroundButton = document.getElementById("button");

console.log(backgroundButton)

let spcialLink = document.getElementById("special-link");

backgroundButton.addEventListener("click", function(event) {
    console.log("clicked!")
    document.body.classList.toggle("active")
    spcialLink.classList.toggle("link-changed")
})