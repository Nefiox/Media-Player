import MediaPlayer from "@nefiox/mediaplayer";
import AutoPlay from "@nefiox/mediaplayer/lib/plugins/AutoPlay";
import AutoPause from "@nefiox/mediaplayer/lib/plugins/AutoPause";
import Ads from "@nefiox/mediaplayer/lib/plugins/Ads";

const video = document.querySelector("video");
const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause(), new Ads()],
});

const button: HTMLElement = document.querySelector("button");
button.onclick = () => player.togglePlay();

const mute: HTMLElement = document.querySelector(".mute");
mute.onclick = () => player.toggleMute();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./sw.js")
    .catch((error) => console.log(error.message));
}
