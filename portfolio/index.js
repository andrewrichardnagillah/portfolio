 /**navBar */
const menu =document.querySelector('.menu');
const closeMenu =document.querySelector('.closeMenu');
const openMenu =document.querySelector('.openMenu');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    menu.style.display = 'flex';
    menu.style.top = '0';
};
function close(){
    menu.style.top = '-100%';

};
/**end of navBar */
/**typing effect */
const textDisplay = document.getElementById('text')
const phrases = [" I am Andrew Nagila.", "A software engineer.", "Junior data scientist."]
let i = 0
let j = 0 
let currentPhrase = []
let isDeleting = false
let isEnd = false

function loop () {
  isEnd = false
  textDisplay.innerHTML = currentPhrase.join('')

  if (i < phrases.length) {

    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j])
      j++
      textDisplay.innerHTML = currentPhrase.join('')
    }

    if(isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j])
      j--
      textDisplay.innerHTML = currentPhrase.join('')
    }

    if (j == phrases[i].length) {
      isEnd = true
      isDeleting = true
    }

    if (isDeleting && j === 0) {
      currentPhrase = []
      isDeleting = false
      i++
      if (i === phrases.length) {
        i = 0
      }
    }
  }
  const spedUp = Math.random() * (80 -50) + 50
  const normalSpeed = Math.random() * (300 -200) + 200
  const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed
  setTimeout(loop, time)
}

loop()

/**projects  */


/***contact */
const displayText = document.getElementById('contact')
const texts = ["Potential customer", "Fellow developer."]
let t = 0
let q = 0 
let currentText = []
let isDeletingText = false
let isEndText = false

function loopText () {
  isEndText= false
  displayText.innerHTML = currentText.join('')

  if (t < texts.length) {

    if (!isDeletingText && q <= texts[t].length) {
      currentPhrase.push(phrases[t][j])
      q++
      displayText.innerHTML = currentText.join('')
    }

    if(isDeletingText && j <= texts[i].length) {
      currentText.pop(texts[t][j])
      q--
      displayText.innerHTML = currentText.join('')
    }

    if (q== texts[t].length) {
      isEndText = true
      isDeletingText = true
    }

    if (isDeletingText && q === 0) {
      currentText = []
      isDeletingText = false
      t++
      if (t === texts.length) {
        t = 0
      }
    }
  }
  const spedUpText = Math.random() * (80 -50) + 50
  const normalSpeedText = Math.random() * (300 -200) + 200
  const timeText = isEndText ? 2000 : isDeletingText ? spedUpT : normalSpeedText
  setTimeout(loopText, time)
}

loopText()
/**footer */
let footerDate = document.getElementById('currentYear');
footerDate.innerText=`Andrew Nagila @  ${new Date().getFullYear} `



const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const today = new Date();
const dayOfWeek = daysOfWeek[today.getDay()];
console.log('Today is ' + dayOfWeek);