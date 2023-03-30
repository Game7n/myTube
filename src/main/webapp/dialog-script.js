document.getElementById("add-video-button").addEventListener("click", () => {
    document.getElementById("dialog-add-video").classList.add("active");
})

document.getElementById("blackout-dialog-add-video").addEventListener("click", () => {
    document.getElementById("dialog-add-video").classList.remove("active");
})