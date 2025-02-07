
const containerEl = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
    const colorContEls = document.createElement("div");
    colorContEls.classList.add("color-container");
    containerEl.appendChild(colorContEls)
}

const colorContEls = document.querySelectorAll(".color-container")
generateColors()
function generateColors() {
    colorContEls.forEach((colorContEl)=>{
        const newColorCode = randomColor();
        
        colorContEl.style.backgroundColor = "#" + newColorCode;
        colorContEl.innerHTML = "#" + newColorCode
    })
}

function randomColor() {
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let colorCode = ""
    for (let index = 0; index<colorCodeLength; index++) {
        const randomNum = Math.floor(Math.random()*chars.length);
        
        colorCode += chars.substring(randomNum,randomNum+1)
    }
    return colorCode;
}
randomColor()
