const highScoresList = document.getElementById('highScoresList');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

highScoresList.innerHTML = highScores.map (score => {
    return `<li class="highScore"> ⭐ ${score.name} - ${score.score}</li>`;
}).join("");