document.getElementById("add-video-button").addEventListener("click", () => {

    document.getElementById("dialog-add-video").classList.add("active");

    document.getElementById("send-video").addEventListener("change", () => {
        let formData = new FormData();
        formData.append("video", document.getElementById("send-video").files[0]);

        let promise = fetch("/myTube-1.0-SNAPSHOT/api/mainPage", {
            method: "POST",
            body: formData
        });
    });

    document.getElementById("blackout-dialog-add-video").addEventListener("click", () => {
        document.getElementById("dialog-add-video").classList.remove("active");
    });
})