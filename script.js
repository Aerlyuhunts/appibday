// Smooth scrolling
const anchors = document.querySelectorAll('a[href^="#"]');
anchors.forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Heart Confetti on Click
document.body.addEventListener('click', e => {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement('div');
    heart.textContent = '❤';
    heart.style.position = 'absolute';
    heart.style.left = e.clientX + 'px';
    heart.style.top = e.clientY + 'px';
    heart.style.fontSize = Math.random() * 10 + 10 + 'px';
    heart.style.color = ['#ffafbd', '#a6c1ee', '#d32f2f'][Math.floor(Math.random() * 3)];
    heart.style.animation = 'confetti 1s ease-out forwards';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1000);
  }
});

const style = document.createElement('style');
style.innerHTML = `
  @keyframes confetti {
    0% { opacity: 1; transform: translateY(0) scale(1); }
    100% { opacity: 0; transform: translateY(100px) scale(0.5); }
  }
`;
document.head.appendChild(style);

// Login logic
const loginForm = document.getElementById('login-form');
const mainContent = document.getElementById('main-content');
const loginContainer = document.getElementById('login-container');
const loginError = document.getElementById('login-error');
const audio = new Audio('song.mp3');

loginForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'marielcondat' && password === '071005') {
    loginContainer.style.display = 'none';
    mainContent.style.display = 'block';
    audio.play();
  } else {
    loginError.textContent = 'Invalid credentials. Please try again.';
  }
});
