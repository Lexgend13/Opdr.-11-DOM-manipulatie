const Button = document.getElementById("knop")
const Title = document.getElementById("title")


function color() {
    const colors = ["red","orange","yellow","green","blue"]
    randomColor = colors[Math.floor(Math.random()*colors.length)];
    return randomColor
}

knop.addEventListener("click", function() {
    Title.innerHTML = "Bangerik!";
    Title.style.color = color();
})