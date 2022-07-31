var localStorageHighScore = localStorage.getItem('score');
var localStorageName = localStorage.getItem('name');
document.getElementById('highScoresBody').innerHTML=localStorageName + " High Score is " + localStorageHighScore;