class VideoHandler {
    static async getVideosForMainPage() {

        document.getElementById("main-page-button").classList.add("active");

        let promise = await fetch("/myTube-1.0-SNAPSHOT/api/mainPage", {
            method: "GET"
        }).then(resp => resp.json())

        let videos = promise.videos;

        console.log(videos);

        let stringBuilder = "";

        for (let i = 0; i < videos.length; i++) {

            let videoSplit = videos[i].split('/');
            let name = videoSplit[videoSplit.length - 1];

            stringBuilder +=
                "<div class=\"video-outline\">" +
                "   <a href=\"/myTube-1.0-SNAPSHOT/watch?v="+ name +"\" class=\"open-video\">" +
                "       <video class=\"main-page-video\" autoplay=\"autoplay\" controls=\"controls\" width=\"100%\" height=\"100%\">" +
                "           <source src=\"" + videos[i] + "\">" +
                "       </video>" +
                "   </a>" +
                // "   <div class=\"video-name\">" +
                // "       name video" +
                // "   </div>"
                "</div>"

        }

        document.getElementById("main-page").innerHTML = stringBuilder;

        document.querySelector(".content").addEventListener("click", (event) => {
            if (event.target.tagName === "A") {
                event.preventDefault();
                route(event);
            }
        })

    }

    static getVideosForSubscribesPage() {
        document.getElementById("subscribes-button").classList.add("active");
    }

    static getVideosForHistoryPage() {
        document.getElementById("history-button").classList.add("active");
    }

    static async getVideosForWatchingPage() {

        const urlParams = new URLSearchParams(window.location.search);

        console.log(urlParams.get("v"));

        let promise = await fetch("/myTube-1.0-SNAPSHOT/api/mainPage?v=" + urlParams.get("v"), {
            method: "GET"
        }).then(resp => resp.json());

        console.log(promise.response);

        document.querySelector(".video-block").innerHTML =
            "       <div class=\"video-outline\">\n" +
            "            <video class=\"watcing-page-video\" autoplay=\"autoplay\" controls=\"controls\" width=\"100%\" height=\"100%\">\n" +
            "                <source src=\"" + promise.response + "\">\n" +
            "            </video>\n" +
            "        </div>";


    }
}