// Create 16 div by 16 div

function genDiv(num) {
    const container = document.querySelector(".container");
    for (var i = 0; i < num; i++) {
        for (var j = 0; j < num; j++) {
            const div = document.createElement("div");
            div.style.border = "1px solid black";
            div.className = "aloha";
            const size = 320 / num;
            div.style.width = `${size}px`; 
            div.style.height = `${size}px`;

            div.addEventListener("mouseenter", () => {
                div.classList.toggle("highlighted");
            });

            container.appendChild(div);
        }
    }
}

genDiv(16);

