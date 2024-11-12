function playMusic() {
  const audio = document.getElementById("birthdaySong");
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}
