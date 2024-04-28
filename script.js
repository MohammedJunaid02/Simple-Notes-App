const notesContainer = document.querySelector(".notes-container");
const button = document.querySelector(".btn");

// Function to create delete icon
function createDeleteIcon() {
    let img = document.createElement("img");
    img.src = "images/delete.png";
    return img;
}

button.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    inputBox.className = "input-box";
    inputBox.setAttribute("contentEditable", "true");
    inputBox.appendChild(createDeleteIcon()); // Add delete icon when creating input box
    notesContainer.appendChild(inputBox);
});

notesContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
    }
});

// Prevent selecting image icon with Ctrl+A
document.addEventListener("selectstart", (e) => {
    // Check if Ctrl (or Command) key is pressed and 'A' key is pressed
    if ((e.ctrlKey || e.metaKey)) {
        // Check if the target element is an image
        if (e.target.tagName === "IMG") {
            e.preventDefault(); // Prevent selection of the image
        }
    }
});

// Prevent deletion of image icon with Backspace
notesContainer.addEventListener("keydown", (e) => {
    // Check if Backspace key is pressed and the target is not an image
    if (e.target.tagName !== "IMG") {
        // Check if there's no text selected
        const selection = window.getSelection().toString();
        if (selection) {
            // Prevent default action (deleting text) when Backspace is pressed and no text is selected
            e.preventDefault();
        }
    }
});

