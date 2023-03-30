document.querySelector(".menu").addEventListener("click", (event) => {
    if(event.target.tagName === "A"){
        event.preventDefault();
        route(event);
    }
})

const route = function (event) {
    window.history.pushState({}, "", event.target.href);
    handleLocation();
}

let routes = {
    "/myTube-1.0-SNAPSHOT/" : "/myTube-1.0-SNAPSHOT/main-page.html",
    "/myTube-1.0-SNAPSHOT/subscribes" : "/myTube-1.0-SNAPSHOT/subscribes.html",
    "/myTube-1.0-SNAPSHOT/history" : "/myTube-1.0-SNAPSHOT/history.html"
}

const handleLocation = async () => {

    const path = window.location.pathname;
    let html;

    if(routes[path] !== undefined) {
        html = await fetch(routes[window.location.pathname]).then(data => data.text());

        let promise = await fetch()

        document.querySelector(".outline").innerHTML = html;
        document.querySelector(".outline").style.color = "white";
    }
}

window.onpopstate = handleLocation;
window.route = route;
handleLocation();

document.getElementById("send-video").addEventListener("change", () => {
    let formData = new FormData();
    formData.append("video", document.getElementById("send-video").files[0]);

    let promise = fetch("/myTube-1.0-SNAPSHOT/api/video",{
        method: "POST",
        body: formData
    });

    console.log(promise);
})