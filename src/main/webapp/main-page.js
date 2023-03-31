class Video {
    static async getVideosForMainPage() {

        const path = window.location.pathname;

        if (routes[path][1] !== "") {
            let promise = await fetch("/myTube-1.0-SNAPSHOT/api/video", {
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
        } else {
            document.querySelector(".outline").style.color = "white";
        }
    }
}
