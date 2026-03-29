const paragraphs = [
"Technology is changing the world rapidly and programming skills help build modern applications.",
"Typing speed improves with regular practice and concentration on accuracy.",
"Web development includes HTML CSS and JavaScript for building interactive websites.",
"Consistent learning and practice help students master coding and typing skills."
]
const textDisplay = document.getElementById("textDisplay")
const typingInput = document.getElementById("typingInput")
const timerDisplay = document.getElementById("timer")
const result = document.getElementById("result")
let time = 40
let timerStarted = false
let timer
if(textDisplay){
let randomIndex = Math.floor(Math.random() * paragraphs.length)
textDisplay.textContent = paragraphs[randomIndex]
}
if(typingInput){
typingInput.addEventListener("input", function(){
if(!timerStarted){
startTimer()
timerStarted = true
}
checkTyping()
})
}
function startTimer(){
timer = setInterval(function(){
time--
timerDisplay.textContent = "Time: " + time
if(time <= 0){
clearInterval(timer)
finishTest()
}
},800)
}
function checkTyping(){
if(typingInput.value === textDisplay.textContent){
clearInterval(timer)
finishTest()
}
}
function finishTest(){
let words = typingInput.value.trim().split(" ").length
result.textContent = "Your Typing Speed is " + words + " Words Per Minute"
localStorage.setItem("typingSpeed",words)
localStorage.setItem("typingTime",40-time)
}
const speed = document.getElementById("speed")
const timeTaken = document.getElementById("timeTaken")
if(speed){
speed.textContent = localStorage.getItem("typingSpeed") + " Words Per Minute"
timeTaken.textContent = localStorage.getItem("typingTime") + " Seconds"
}
const form = document.getElementById("contactForm")
const msg = document.getElementById("msg")
if(form){
form.addEventListener("submit", function(e){
e.preventDefault()
msg.textContent = "Message Sent Successfully"
})
}