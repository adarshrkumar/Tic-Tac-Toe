let pieces = [
  'X', 
  'O', 
//  '🗿'
]
let SPACES = [
  '', 
  'one', 
  'two', 
  'three', 
  'four', 
  'five', 
  'six', 
  'seven', 
  'eight', 
  'nine', 
]
let i = 0

var one = document.querySelector('#one')
var two = document.querySelector('#two')
var three = document.querySelector('#three')
var four = document.querySelector('#four')
var five = document.querySelector('#five')
var six = document.querySelector('#six')
var seven = document.querySelector('#seven')
var eight = document.querySelector('#eight')
var nine = document.querySelector('#nine')

function selectSpace(space) {
  return document.querySelector(`.${space}`)
}

function addOnClick(move, piece) {
  document.querySelector(`#${SPACES[piece]}`).setAttribute('onclick', `moves(${move + 1}, ${piece})`)
}

function changeOnClicks(move) {
  addOnClick(move, 1)
  addOnClick(move, 2)
  addOnClick(move, 3)
  addOnClick(move, 4)
  addOnClick(move, 5)
  addOnClick(move, 6)
  addOnClick(move, 7)
  addOnClick(move, 8)
  addOnClick(move, 9)
}

function checkI() {
  if (i >= pieces.length) {
    i = 0
  }
}

function moves(move, sp) {
  var space = document.querySelector(`#${SPACES[sp]}`)
  if (move !== 9) {
    if (!!space.innerHTML === false) {
      space.innerHTML = pieces[i]
      changeOnClicks(move)
      space.setAttribute('onclick', '')
      checkI()
      check(pieces[i])
      i++
      if (i >= pieces.length) i = 0
    }
  }
  else if (!!space.innerHTML === false) {
    space.innerHTML = pieces[i]
    i++
    checkI()
    setTimeout(end('Tie!'), 1000)
  }

}

function check(piece) {
  var hasWon
  if (
    one.innerHTML === `${piece}` && 
    two.innerHTML === `${piece}` && 
    three.innerHTML === `${piece}`
  ) {
    hasWon = true
  }
  if (
    four.innerHTML === `${piece}` && 
    five.innerHTML === `${piece}` && 
    six.innerHTML === `${piece}`
  ) {
    hasWon = true
  }
  if (
    seven.innerHTML === `${piece}` && 
    eight.innerHTML === `${piece}` && 
    nine.innerHTML === `${piece}`
  ) {
    hasWon = true
  }
  if (
    one.innerHTML === `${piece}` && 
    four.innerHTML === `${piece}` && 
    seven.innerHTML === `${piece}`
  ) {
    hasWon = true
  }
  if (
    two.innerHTML === `${piece}` && 
    five.innerHTML === `${piece}` && 
    eight.innerHTML === `${piece}`
  ) {
    hasWon = true
  }
  if (
    three.innerHTML === `${piece}` && 
    six.innerHTML === `${piece}` && 
    nine.innerHTML === `${piece}`
  ) {
    hasWon = true
  }
  if (
    one.innerHTML === `${piece}` && 
    five.innerHTML === `${piece}` && 
    nine.innerHTML === `${piece}`
  ) {
    hasWon = true
  }
  if (
    three.innerHTML === `${piece}` && 
    five.innerHTML === `${piece}` && 
    seven.innerHTML === `${piece}`
  ) {
    hasWon = true
  }
  if (Boolean(hasWon) !== false) {
    end(`${piece} won!`)
  }
}

function end(message) {
  document.getElementsByClassName('modal')[0].showModal()
  document.getElementsByClassName('message')[0].innerHTML = message
  document.body.innerHTML = document.getElementsByClassName('modal')[0].innerHTML
  document.body.querySelectorAll('span').forEach(e => {
    e.setAttribute('onclick', '')
  })
}