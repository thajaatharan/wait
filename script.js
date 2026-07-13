const rain = document.querySelector('#sorryRain');
if (rain) {
  setInterval(() => {
    const word = document.createElement('span');
    word.textContent = 'sorry';
    word.style.left = `${8 + Math.random() * 80}%`;
    word.style.top = `${6 + Math.random() * 85}%`;
    word.style.setProperty('--turn', `${-12 + Math.random() * 24}deg`);
    rain.appendChild(word);
  }, 3000);
}

const yes = document.querySelector('#yesButton');
const no = document.querySelector('#noButton');
const response = document.querySelector('#response');
if (yes) yes.addEventListener('click', () => {
  response.textContent = 'Your Favourite Monkey is sending the gentlest, longest hug. Thank you for hearing my heart. ♡';
  yes.textContent = 'hug received ♡';
});
if (no) no.addEventListener('click', () => {
  response.textContent = 'Of course. Your feelings matter. Take all the time you need—I will still be here.';
});
