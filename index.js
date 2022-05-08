const startBtn = document.getElementById('start-btn');
const start = document.getElementById('start-view');

const homeBtn = document.getElementById('home-btn');
const game = document.getElementById('game-view');

const attackBtn1 = document.getElementById('attack-btn-1');
const attackBtn2 = document.getElementById('attack-btn-2');

const health1 = document.getElementById('health-1');
const health2 = document.getElementById('health-2');

const win1 = document.getElementById('win1');
const win2 = document.getElementById('win2');

startBtn.addEventListener('click', () => {
  start.style.display = 'none';
  game.style.display = 'block';
  health1.textContent = 10;
  health2.textContent = 10;

  attackBtn1.disabled = false;
  attackBtn2.disabled = true;
});

homeBtn.addEventListener('click', () => {
  game.style.display = 'none';
  start.style.display = 'block';
  document.getElementById('winner').textContent = 'Player 1 won!';
});

function home(player) {
  game.style.display = 'none';
  start.style.display = 'block';

  if (player === 1) {
    let wins = document.getElementById('win1').innerHTML;
    wins++;

    win1.textContent = wins;

    if (wins === 3) {
      console.log('Player 1 won!');
      document.getElementById('winner').textContent = 'Player 1 won!';
    }
  } else {
    let wins = document.getElementById('win2').innerHTML;
    wins++;

    win2.textContent = wins;

    if (wins === 3) {
      console.log('Player 2 won!');
      document.getElementById('winner').textContent = 'Player 2 won!';
    }
  }
}

function getHealth(health) {
  const randomNumber = Math.floor(Math.random() * 6);
  return health - randomNumber;
}

attackBtn1.addEventListener('click', () => {
  let health = health2.innerHTML;
  const player2Health = getHealth(health);

  if (player2Health <= 0) {
    home(1);
  }

  health2.innerHTML = player2Health;
  attackBtn1.disabled = true;
  attackBtn2.disabled = false;
});

attackBtn2.addEventListener('click', () => {
  let health = health1.innerHTML;
  const player1Health = getHealth(health);

  if (player1Health <= 0) {
    home(2);
  }

  health1.innerHTML = player1Health;
  attackBtn2.disabled = true;
  attackBtn1.disabled = false;
});
