const home = document.getElementById('home');
const playlist = document.getElementById('playlist');
const deepCards = document.querySelectorAll('[data-playlist="deep"]');
const playButtons = [document.getElementById('mainPlay'), document.getElementById('playlistPlay')];
const progress = document.getElementById('timelineProgress');
let playing = false, timer;

function showPlaylist() {
  home.classList.add('hidden');
  playlist.classList.remove('hidden');
  document.querySelector('.main').scrollTop = 0;
}
deepCards.forEach(card => card.addEventListener('click', showPlaylist));

document.querySelector('[data-page="home"]').addEventListener('click', () => {
  playlist.classList.add('hidden');
  home.classList.remove('hidden');
  document.querySelector('.main').scrollTop = 0;
});

function togglePlay(){
  playing = !playing;
  playButtons.forEach(b => b.textContent = playing ? 'Ⅱ' : '▶');
  if(timer) clearInterval(timer);
  if(playing){
    let width = parseFloat(progress.style.width || '28');
    timer = setInterval(()=>{
      width += .12;
      if(width > 100) width = 0;
      progress.style.width = width + '%';
    },200);
  }
}
playButtons.forEach(b => b.addEventListener('click', togglePlay));

document.getElementById('likeBtn').addEventListener('click', e=>{
  e.currentTarget.textContent = e.currentTarget.textContent === '♡' ? '♥' : '♡';
});
document.getElementById('playerLike').addEventListener('click', e=>{
  e.currentTarget.textContent = e.currentTarget.textContent === '♡' ? '♥' : '♡';
});

document.querySelectorAll('.card-play').forEach(btn=>{
  btn.addEventListener('click', e=>{
    e.stopPropagation();
    playing = true;
    playButtons.forEach(b => b.textContent='Ⅱ');
  });
});
