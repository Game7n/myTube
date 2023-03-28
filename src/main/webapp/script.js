document.querySelector(".menu").addEventListener("click", (event) => {
    if(event.target.tagName === "A"){
        event.preventDefault();
        route(event);
    }
})

const route = function (event) {
    window.history.pushState({}, "", event.target.href);
}

window.route = route;

document.getElementById("send-video").addEventListener("change", () => {
    let formData = new FormData();
    formData.append("video", document.getElementById("send-video").files[0]);

    let promise = fetch("/myTube-1.0-SNAPSHOT/video",{
        method: "POST",
        body: formData
    });

    console.log(promise);
})