import MediaPlayer from './mediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
const video = document.querySelector("video");
const player = new MediaPlayer({
  el:video, 
  plugins: [
    //new AutoPlay()
]});
const btnPlayPause = document.getElementById("play_pause");
const btnMuteUnmute = document.getElementById("mute_unmute");
btnPlayPause.onclick = () => player.togglePlay();
btnMuteUnmute.onclick = () => player.toggleMute();