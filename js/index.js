const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonMore = document.querySelector('.more')
const buttonLess = document.querySelector('.less')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

const buttonSoundFlorest = document.querySelector('.florest')
const buttonSoundRain = document.querySelector('.rain')
const buttonSoundCoffeeShop = document.querySelector('.coffeeShop')
const buttonSoundFirePit = document.querySelector('.firePit')


let minutes = Number(minutesDisplay.textContent)
let timerTimeOut

function resetControls() {
  fillPlay.classList.remove('selected') 
  fillStop.classList.remove('selected') 
  fillMore.classList.remove('selected') 
  fillLess.classList.remove('selected') 
  FillForest.classList.remove('selected') 
  fillRain.classList.remove('selected') 
  fillCoffeeShop.classList.remove('selected') 
  fillFirePit.classList.remove('selected') 
}

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")

}

function resetTimer() {
  updateTimerDisplay(minutes = 0, 0)
  clearTimeout(timerTimeOut)
}

function countdown() {
  timerTimeOut = setTimeout(function() {
    let seconds =  Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    updateTimerDisplay(minutes, 0)

    if (minutes <= 0) {
      return
    }

    if(seconds <= 0) {
      seconds = 60
      --minutes
    }

    updateTimerDisplay(minutes, String(seconds - 1))

    countdown()
  }, 1000)
}

function MoreFiveMinutes(){
  updateTimerDisplay(minutes = minutes + 5, 0)
}

function LessFiveMinutes(){
  updateTimerDisplay(minutes = minutes - 5, 0)
}

let buttonPress = false

function play() {
  if (buttonPress == false) {
    buttonPress = true
    selectedPlay()
    countdown()}
    else {
      buttonPress = false
      hold()
  }
}

buttonPlay.addEventListener('click', function() {
  play()
  soundClick()
})

buttonStop.addEventListener('click', function() {
  clearTimeout(timerTimeOut)
  resetControls()
  resetTimer()
  selectedStop()
  soundClick()
})

buttonMore.addEventListener('click', function() {
  MoreFiveMinutes()
  selectedMore()
  soundClick()
})

buttonLess.addEventListener('click', function() {
  LessFiveMinutes()
  selectedLess()
  soundClick()
})

const soundForest = new Audio("https://github.com/ThadeuRuhtra/FocusTimer/blob/main/sounds/Floresta.wav?raw=true")
const soundRain = new Audio("https://github.com/ThadeuRuhtra/FocusTimer/blob/main/sounds/Chuva.wav?raw=true")
const soundCoffeeShop = new Audio("https://github.com/ThadeuRuhtra/FocusTimer/blob/main/sounds/Cafeteria.wav?raw=true")
const soundFirePit = new Audio("https://github.com/ThadeuRuhtra/FocusTimer/blob/main/sounds/Lareira.wav?raw=true")
const soundPress = new Audio("https://github.com/ThadeuRuhtra/FocusTimer/blob/main/sounds/SoundPress.wav?raw=true")

let soundPlay = false

function soundClick() {
  soundPress.play()
}

function muteForest() {
  soundRain.pause()
  soundCoffeeShop.pause()
  soundFirePit.pause()
}

function muteRain() {
  soundForest.pause()
  soundCoffeeShop.pause()
  soundFirePit.pause()
}

function muteCoffeeShop() {
  soundForest.pause()
  soundRain.pause()
  soundFirePit.pause()
}

function muteFirePit() {
  soundForest.pause()
  soundRain.pause()
  soundCoffeeShop.pause()
}

function muteAll() {
  soundForest.pause()
  soundRain.pause()
  soundCoffeeShop.pause()
  soundFirePit.pause()
}


function PressForest() {
  if (soundPlay == false) {
    soundPlay = true
    soundForest.play()
    selectedForest()
    muteForest()}
    else {
      soundPlay = false
      resetControls()
      muteAll()
    }
}

function PressRain() {
  if (soundPlay == false) {
    soundPlay = true
    soundRain.play()
    selectedRain()
    muteRain()}
    else {
      soundPlay = false
      resetControls()
      muteAll()
    }
}

function PressCoffeeShop() {
  if (soundPlay == false) {
    soundPlay = true
    soundCoffeeShop.play()
    selectedCoffeeShop()
    muteCoffeeShop()}
    else {
      soundPlay = false
      resetControls()
      muteAll()
    }
}

function PressFirePit() {
  if (soundPlay == false) {
    soundPlay = true
    soundFirePit.play()
    selectedFirePit()
    muteFirePit()}
    else {
      soundPlay = false
      resetControls()
      muteAll()
    }
}

buttonSoundFlorest.addEventListener('click', function() {
  PressForest()
  soundClick()
})

buttonSoundRain.addEventListener('click', function() {
  PressRain()
  soundClick()
})

buttonSoundCoffeeShop.addEventListener('click', function() {
  PressCoffeeShop()
  soundClick()
})

buttonSoundFirePit.addEventListener('click', function() {
  PressFirePit()
  soundClick()
})

const FillForest = document.querySelector('.fillForest')
const fillRain = document.querySelector('.fillRain')
const fillCoffeeShop = document.querySelector('.fillCoffeeShop')
const fillFirePit = document.querySelector('.fillFirePit')

function selectedForest() {
  FillForest.classList.toggle('selected')
  fillRain.classList.remove('selected')
  fillCoffeeShop.classList.remove('selected')
  fillFirePit.classList.remove('selected')
}

function selectedRain() {
  fillRain.classList.toggle('selected')
  FillForest.classList.remove('selected')
  fillCoffeeShop.classList.remove('selected')
  fillFirePit.classList.remove('selected')
}

function selectedCoffeeShop() {
  fillCoffeeShop.classList.toggle('selected')
  FillForest.classList.remove('selected')
  fillRain.classList.remove('selected')
  fillFirePit.classList.remove('selected')
}

function selectedFirePit() {
  fillFirePit.classList.toggle('selected')
  FillForest.classList.remove('selected')
  fillRain.classList.remove('selected')
  fillCoffeeShop.classList.remove('selected')
}

const fillPlay = document.querySelector('.fillPlay')
const fillStop = document.querySelector('.fillStop')
const fillMore = document.querySelector('.fillMore')
const fillLess = document.querySelector('.fillLess')

function selectedPlay() {
  fillPlay.classList.toggle('selected')
  fillStop.classList.remove('selected')
  fillMore.classList.remove('selected')
  fillLess.classList.remove('selected')
}

function selectedStop() {
  fillStop.classList.toggle('selected')
  fillPlay.classList.remove('selected')
  fillMore.classList.remove('selected')
  fillLess.classList.remove('selected')
}

function selectedMore() {
  fillMore.classList.toggle('selected')
  fillPlay.classList.remove('selected')
  fillStop.classList.remove('selected')
  fillLess.classList.remove('selected')
}

function selectedLess() {
  fillLess.classList.toggle('selected')
  fillPlay.classList.remove('selected')
  fillStop.classList.remove('selected')
  fillMore.classList.remove('selected')
}

function reset() {
  updateTimerDisplay(minutes, 0)
  clearTimeout(timerTimeOut)
}

function hold() {
  clearTimeout(timerTimeOut)
}

const mode = document.querySelector('.mode')
const buttonLightMode = document.querySelector('.lightMode')
const buttonDarkMode = document.querySelector('.darkMode')



function pressMode() {
  mode.classList.toggle('dark')
}

function pressLight() {
  buttonLightMode.classList.toggle('hide')
  buttonDarkMode.classList.remove('hide')
}

function pressDark() {
  buttonDarkMode.classList.toggle('hide')
  buttonLightMode.classList.remove('hide')
}


buttonLightMode.addEventListener('click', function(){
  pressMode()
  pressLight()
  soundClick()
})

buttonDarkMode.addEventListener('click', function(){
  pressMode()
  pressDark()
  soundClick()
})

