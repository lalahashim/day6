document.addEventListener("keydown", function(event) {
    const key = event.key;
    const button = document.querySelector(`button[data-key="${key}"], button[data-alt="${key}"]`);

    if (button) {
        handleKeyEvent(button)
        button.classList.add("active");

        setTimeout(() => {
            button.classList.remove("active");
        }, 200);
    }
});

let screenContent = "";
const screen = document.querySelector(".screen");
const updateScreen = () => {
    screen.textContent = screenContent;
};

const handleKeyEvent = (event) => {
    const key = event.getAttribute("data-key");

    if (key === "C") {
        screenContent = "";
    } else if (key === "←") {
        screenContent = screenContent.slice(0, -1);
    } else if (key === "=") {
        try {
            screenContent = "= " + eval(screenContent).toString();
        } catch {
            screenContent = "Error";
        }
    } else {
        screenContent += key;
    }    
    updateScreen();
};

document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
        handleKeyEvent(button);
        button.classList.add("active");
        setTimeout(() => {
            button.classList.remove("active");
        }, 200);
    });
});

