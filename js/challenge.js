let rollingCounter = setInterval(() => counter.innerText ++, 1000)

let counter = document.querySelector('#counter')
const plus = document.querySelector('#plus')
const minus = document.querySelector('#minus')
const increment = document.querySelectorAll('button');
const liObj = {}

// changes #counter value by 1 depending on which button is selected
// button #plus increases #counter by 1 every click
//button #minus decreases #counter by 1 every click
increment.forEach(element => element.addEventListener('click', buttonClicked))

//determines which function to run depending on which button is clicked
function buttonClicked(e){

    if (e.target.id === 'plus') {
      counter.innerText ++
    } else if (e.target.id === 'minus') {
      counter.innerText --
    } else if (e.target.id === 'pause') {
      pauseButton(e)
    } else if (e.target.id === 'heart') {
      heartButton(e)
    } else if (e.target.id === 'submit') {
      formSubmit(e)
    }
}

//clicking on button #heart prints an unordered list item to ul.likes that says 
// "${#counter} has been liked x times" 
// x represents amount of times #heart has been clicked in 1 timer
function heartButton() {
    let timer = counter.innerText
    liObj[timer] = liObj[timer] || 0
    liObj[timer] ++
    liAppend()
  }
  
  function liAppend(){
    document.querySelector("ul.likes").innerHTML = ""
    for (let key in liObj){
      const li = document.createElement("li")
      li.innerText = `${key} has been liked ${liObj[key]} times.`
      document.querySelector("ul.likes").append(li)
    }
  }


// adds p element before the form element, under the "Leave a comment" section
function formSubmit(e) {
  e.preventDefault()
  let p = document.createElement('p')
  p.innerText = document.querySelector('#comment-input').value
  if(p.innerText === "") {
  } else {document.querySelector('form').before(p)
  document.querySelector('#comment-input').value = ""}
}

//#pause button disables and enables all buttons and pauses the rollingCounter
// if #pause.innerText === pause , then set innerText to resume and enable all buttons
// if #pause.innerText === resume, then innerText = pause , disable all buttons, stop rollingCounter
function pauseButton(e) {
  const event = e.target
  if(event.innerText === "pause" ) {
    event.innerText = 'resume'
    console.log(`clicked on pause`)
    increment.forEach(element => element.setAttribute('disabled','disabled'))
    document.querySelector('#pause').removeAttribute('disabled')
    clearInterval(rollingCounter);
  } else if(event.innerText === 'resume') {
    console.log('clicked on resume')
    event.innerText = 'pause'
    increment.forEach(element => element.removeAttribute('disabled'))
    rollingCounter = setInterval(() => counter.innerText ++, 1000)
  }
 
}
