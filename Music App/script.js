// script.js
// All interactions are implemented by this javascript file and its source code

//Config
const VALID_USERNAME = "Nkosinathi";
const VALID_PASSWORD = "12345";

//Elements
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('usernameInput');
const passwordInput = document.getElementById('passwordInput');
const loginSection = document.getElementById('loginSection');
const welcomeBox = document.getElementById('welcomeBox');
const loggedUsername = document.getElementById('loggedUsername');

const artistCards = document.querySelectorAll('.artist-card');
const popup = document.getElementById('popup');
const popupContent = document.getElementById('popupContent');
const popupClose = document.getElementById('popupClose');

const themeToggle = document.getElementById('themeToggle');
const body = document.body;

//Login validation 
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const u = usernameInput.value.trim();
  const p = passwordInput.value.trim();

  if (u === VALID_USERNAME && p === VALID_PASSWORD) {
    // success: hide form, show welcome message in same section
    loginForm.classList.add('hidden');
    loggedUsername.textContent = u;
    welcomeBox.classList.remove('hidden');

    // subtle animation
    welcomeBox.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500, easing: 'ease-out' });
  } else {
    // simple visual shake / hint
    loginSection.animate([
      { transform: 'translateX(0)' },
      { transform: 'translateX(-8px)' },
      { transform: 'translateX(8px)' },
      { transform: 'translateX(0)' }
    ], { duration: 300 });
    alert('Username or password incorrect. Hint: Nkosinathi / 12345');
  }
});

//Hover interactions for thumbnails (JS toggles class)
artistCards.forEach(card => {
  const thumb = card.querySelector('.thumb');

  card.addEventListener('mouseenter', () => {
    card.classList.add('hovered');
  });

  card.addEventListener('mouseleave', () => {
    card.classList.remove('hovered');
  });

  //Click on card -> show popup with artist info
  card.addEventListener('click', (ev) => {
    // Avoid clicks on action buttons (play / fav) from opening popup
    const isAction = ev.target.closest('.card-actions');
    if (isAction) return;

    const name = card.dataset.name || 'Unknown Artist';
    showPopup(name, card);
  });

  //Play button visual toggle (no actual audio)
  const playBtn = card.querySelector('.play-btn');
  playBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // prevent parent click
    playBtn.classList.toggle('playing');
    // visual feedback
    if (playBtn.classList.contains('playing')) {
      playBtn.title = "Pause (visual)";
    } else {
      playBtn.title = "Play (visual)";
    }
  });

  //Favorite button toggle
  const favBtn = card.querySelector('.fav-btn');
  favBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    favBtn.classList.toggle('favorited');
    // minor UI pop
    favBtn.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.15)' }, { transform: 'scale(1)' }], { duration: 260 });
  });
});

//Popup controls
function showPopup(artistName, card) {
  popupContent.innerHTML = `
    <h3>${artistName}</h3>
    <p>This is a demo popup for <strong>${artistName}</strong>. You clicked their thumbnail. Use this area to show more info, links, or demo controls.</p>
    <p><small>Card data-name: ${card.dataset.name}</small></p>
  `;
  popup.classList.remove('hidden');
}

popupClose.addEventListener('click', () => {
  popup.classList.add('hidden');
});

popup.addEventListener('click', (e) => {
  if (e.target === popup) popup.classList.add('hidden');
});

//Theme toggle
themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-theme');
  // small animation on toggle
  body.animate([{ opacity: .95 }, { opacity: 1 }], { duration: 320 });
});

//Extra: keyboard shortcut to focus login
document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'l') {
    usernameInput.focus();
    e.preventDefault();
  }
});
