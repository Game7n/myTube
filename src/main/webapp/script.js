document.querySelector(".menu").addEventListener("click", (event) => {

    if (event.target.tagName === "A") {

        event.preventDefault();
        route(event);
    }
})

const route = function (event) {
    window.history.pushState(null, null, event.target.href);
    handleLocation();
}


let routes = {
    "/myTube-1.0-SNAPSHOT/": ["/myTube-1.0-SNAPSHOT/mainPage/main-page.html",() => VideoHandler.getVideosForMainPage()],
    "/myTube-1.0-SNAPSHOT/subscribes": ["/myTube-1.0-SNAPSHOT/subscribesPage/subscribes-page.html", () => VideoHandler.getVideosForSubscribesPage()],
    "/myTube-1.0-SNAPSHOT/history": ["/myTube-1.0-SNAPSHOT/historyPage/history-page.html", () => VideoHandler.getVideosForHistoryPage()],
    "/myTube-1.0-SNAPSHOT/watch": ["/myTube-1.0-SNAPSHOT/watchingPage/watching-page.html", () => VideoHandler.getVideosForWatchingPage()]
}

const handleLocation = async () => {

    let buttons = document.getElementsByClassName("menu el");
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }

    const path = window.location.pathname;
    console.log(path);
    let html;

    if (routes[path] !== undefined) {
        html = await fetch(routes[path][0]).then(data => data.text());
        console.log(html);
        document.querySelector(".outline").innerHTML = html;

        await routes[path][1]();
    }
}

window.onpopstate = handleLocation;
// window.route = route;
handleLocation();