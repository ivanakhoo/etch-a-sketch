// TODO
// limit the genDiv num and make the button!

let num = prompt("Enter the dimensions you want for the grid: ", "16");


function genDiv(num) {
    const container = document.querySelector(".container");
    for (var i = 0; i < num; i++) {
        for (var j = 0; j < num; j++) {
            const div = document.createElement("div");
            div.style.border = "1px solid black";
            div.className = "aloha";
            const size = 960 / num;
            div.style.width = `${size}px`; 
            div.style.height = `${size}px`;

            div.addEventListener("mouseenter", () => {
                div.classList.add("highlighted");
            });

            container.appendChild(div);
        }
    }
}

num = Number(num);
if (num > 100) {
    num = 100;
}
genDiv(Number(num));

