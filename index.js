let countHome = document.getElementById("count-home")
let countGuest = document.getElementById("count-guest")
let scoreHome = 0;
let scoreGuest = 0;

function add1PointHome() {
    scoreHome += 1
    countHome.textContent = scoreHome
}
function add2PointsHome() {
    scoreHome += 2
    countHome.textContent = scoreHome
}
 function add3PointsHome() {
     scoreHome += 3
     countHome.textContent = scoreHome
 }

function add1PointGuest() {
    scoreGuest +=1
    countGuest.textContent = scoreGuest
}
function add2PointsGuest() {
    scoreGuest +=2
    countGuest.textContent = scoreGuest
}
function add3PointsGuest() {
    scoreGuest +=3
    countGuest.textContent = scoreGuest
}
function restartScore() {
    scoreHome = 0
    scoreGuest = 0
    countHome.textContent = scoreHome
    countGuest.textContent = scoreGuest
}