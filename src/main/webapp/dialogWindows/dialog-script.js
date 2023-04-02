document.getElementById("add-video-button").addEventListener("click", () => {

    // document.querySelector(".template").innerHTML =
    //     "<div class=\"dialog-wrapper\" id=\"dialog-add-video\">\n" +
    //     "    <div class=\"blackout\" id=\"blackout-dialog-add-video\"></div>\n" +
    //     "    <div class=\"dialog-content\">\n" +
    //     "        <input id=\"send-video\" type=\"file\" accept=\"video/mp4,video/x-m4v,video/*\"/>\n" +
    //     "    </div>\n" +
    //     "</div>";

    let divDialogWrapper = document.createElement('div');
    divDialogWrapper.className = "dialog-wrapper";
    divDialogWrapper.id = "dialog-add-video";
    divDialogWrapper.innerHTML =
        "<div class=\"blackout\" id=\"blackout-dialog-add-video\"></div>\n" +
        "  <div class=\"dialog-content\">\n" +
        "    <input id=\"send-video\" type=\"file\" accept=\"video/mp4,video/x-m4v,video/*\"/>\n" +
        "</div>";

    document.querySelector(".template").append(divDialogWrapper);

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