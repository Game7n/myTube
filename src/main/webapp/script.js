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
    "/myTube-1.0-SNAPSHOT/" : ["/myTube-1.0-SNAPSHOT/main-page.html", "/myTube-1.0-SNAPSHOT/api/video"],
    "/myTube-1.0-SNAPSHOT/subscribes" : ["/myTube-1.0-SNAPSHOT/subscribes.html", ""],
    "/myTube-1.0-SNAPSHOT/history" : ["/myTube-1.0-SNAPSHOT/history.html", ""]
}

const handleLocation = async () => {

    const path = window.location.pathname;
    let html;

    if(routes[path] !== undefined) {
        html = await fetch(routes[path][0]).then(data => data.text());

        document.querySelector(".outline").innerHTML = html;

        if(routes[path][1] !== "") {
            let promise = await fetch(routes[path][1], {
                method: "GET"
            }).then(res => res.json())

            let videos = promise.videos;

            console.log(videos);

            let stringBuilder = "";

            for (let i = 0; i < videos.length; i++) {
                stringBuilder += "<div class=\"video-outline\">" +
                    "<video class=\"video\" autoplay=\"autoplay\" controls=\"controls\" width=\"100%\" height=\"100%\">" +
                    "<source src=\"" + videos[i] + "\">" +
                    "</video>" +
                    "</div>"

            }

            document.getElementById("main-page").innerHTML = stringBuilder;
        }else{
            document.querySelector(".outline").style.color = "white";
        }
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