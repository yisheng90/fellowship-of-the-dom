console.log('Linked.')

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
]

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
]

var lands = ['The Shire', 'Rivendell', 'Mordor']
var body = document.querySelector('body')

// Part 1
var element
function makeMiddleEarth () {
  element = $('<section>').appendTo(body)
  element.attr('id', 'middle-earth')
  lands.forEach(function (land) {
    element.append('<article><h1>' + land + '</h1></article>')
  })
}
  /* element = document.createElement('section')
  element.id = 'middle-earth'
  document.body.appendChild(element)

  lands.forEach(function (land) {
    console.log(land)
    document.getElementById('middle-earth').appendChild(document.createElement('article')).appendChild(document.createElement('h1')).innerHTML = land
  }) */

  // create a section tag with an id of middle-earth
  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body

makeMiddleEarth()

// Part 2

function makeHobbits () {
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  // give each hobbit a class of hobbit
  $('#middle-earth article:first-child').append('<ul>')
  hobbits.forEach(function (hobbit) {
    $('article:first-child ul').append('<li class="hobbit">' + hobbit + '</li>')
  })
  /*
  document.getElementsByTagName('article')[x].appendChild(document.createElement('ul'))
  hobbits.forEach(function (hobbit) {
    element = document.getElementsByTagName('ul')[x].appendChild(document.createElement('li'))
    element.innerHTML = hobbit
    element.className = 'hobbit'
  }) */
}
makeHobbits()
// Part 3

function keepItSecretKeepItSafe () {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
   // add the ring as a child of Frodo

  for (var i = 0; i < hobbits.length; i++) {
    group = $('li:nth-child(' + i + ')')
    console.log(group.text)
    if (group.text().match('Frodo Baggins')) {
      group.append('<div id="the-ring" class="magic-imbued-jewelry">')
    }
  }
  /*
  element = document.createElement('div')
  element.id = 'the-ring'
  element.className = 'magic-imbued-jewelry'

  var group = document.getElementsByClassName('hobbit')
  for (var i = 0; i < (group.length); i++) {
    group = group[i]
    if (group.innerHTML.includes('Frodo')) {
      group.appendChild(element)
    }
  }
//  document.getElementById('the-ring').addEventListener('click', nazgulScreech()) */
}
// keepItSecretKeepItSafe()

// Part 4

function makeBuddies () {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
  $('article:nth-child(2)').append('<ul>')
  buddies.forEach(function (buddy) {
    $('article:nth-child(2) ul').append('<li>' + buddy + '</li>')
  })

  /* element = document.createElement('aside').appendChild(document.createElement('ul'))

  var group
  for (var i = 0; i < lands.length; i++) {
    group = document.getElementsByTagName('h1')[i]
    console.log(group.innerHTML.toLowerCase())
    if (group.innerHTML.toLowerCase().includes('rivendell')) {
      group.parentNode.appendChild(element)
    }
  }

  buddies.forEach(function (buddy) {
    document.getElementsByTagName('ul')[1].appendChild(document.createElement('li')).innerHTML = buddy
  }) */
}

makeBuddies()

// Part 5

function beautifulStranger () {
  // change the 'Strider' textnode to 'Aragorn'
  /* for (var i = 0; i < (buddies.length + hobbits.length); i++) {
    element = document.getElementsByTagName('li')[i]
    if (element.innerHTML === 'Strider') {
      element.innerHTML = 'Aragorn'
    }
  } */
  element = $('li')
  console.log(element.length)
  for (var i = 0; i < element.length; i++) {
    if ($('li:nth-child(' + i + ')').text().includes('Strider')) {
      $('li:nth-child(' + i + ')').text('Aragorn')
    }
  }
  // element = $('li')
  // console.log(element.length);
  // for(var i =0; i <e element.length; i++) {
  //  if (li[i].text() === 'Strider') {
  //    li.text('Aragorn')
//    }
//  }
}

beautifulStranger()

// Part 6

function leaveTheShire () {
  // assemble the hobbits and move them to Rivendell
/*
  var toBeRemoved
  // toBeRemoved = document.getElementsByClass('hobbits')[0]
  element = document.getElementsByTagName('article')[0]
  element.removeChild(element.children[1])
  makeHobbits(x)
  keepItSecretKeepItSafe() */

  $('article:first-child ul').appendTo('article:nth-child(2)')
}

leaveTheShire()

// Part 7
fellowship = hobbits.concat(buddies)
function forgeTheFellowShip () {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  /* // after each character is added make an alert that they have joined your party
  element = document.getElementsByTagName('h1')

  for (var i = 0; i < lands.length; i++) {
    if (element[i].innerHTML.toLowerCase() === 'rivendell') {
      fellowship = element[i].parentNode.appendChild(document.createElement('div'))
      fellowship.innerHTML = 'the-fellowship'
      fellowship.appendChild(document.createElement('ul'))
      hobbits.forEach(function (hobbit) {
        fellowship.lastChild.appendChild(document.createElement('li')).innerHTML = hobbit
        alert(hobbit + ' is joining your party')
      })
      buddies.forEach(function (buddy) {
        fellowship.lastChild.appendChild(document.createElement('li')).innerHTML = buddy
        alert(buddy + ' is joining your party')
      })
    } */
  $('article:nth-child(2)').append('<div id="the-fellowship">the-fellowship<ul></ul></div>')

  console.log(fellowship)
  fellowship.forEach(function (fellow) {
    alert(fellow + 'has joined your fellowship')
    $('article:nth-child(2) div ul').append('<li>' + fellow + '</li>')
  })
}

forgeTheFellowShip()

// Part 8

function theBalrog () {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
  /* element = document.getElementsByTagName('li')

  for (var i = 0; i < element.length; i++) {
    if (element[i].innerHTML.toLowerCase().includes('gandalf')) {
      element[i].innerHTML = 'Gandalf the White'
      element[i].style.cssText = 'background: white; border: 2px solid grey;'
    }
  } */
  element = $('li')
  console.log(element.length)
  console.log($(' ul:nth-child(2) li:first-child').text())
  for (var i = 1; i <= 4; i++) {
    for (var j = 1; j <= 5; j++) {
    // console.log($('li:nth-child(' + (i + 1) + ')').text())
      console.log('')
      if ($('ul:nth-child(' + i + ') li:nth-child(' + j + ')').text() === 'Gandalf the Grey') {
        $('ul:nth-child(' + i + ') li:nth-child(' + j + ')').text('Gandalf the White')
      .css(
        'background', 'white'
      )
      }
    }
  }
}

theBalrog()
// Part 9

function hornOfGondor () {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
/*  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
  alert("The gordor has been blown!!, Boromier's been killed by Uruk-hai")
  element = document.getElementsByTagName('li')
  for (var i = 0; i < element.length; i++) {
    console.log(element[i].parentNode.parentNode.tagName)
    if (element[i].parentNode.parentNode.tagName === 'DIV' && element[i].innerHTML.toLowerCase().includes('boromir')) {
      console.log(element[i])
      element[i].parentNode.removeChild(element[i])
    } else if (element[i].innerHTML.toLowerCase().includes('boromir')) {
      element[i].style.cssText = 'text-decoration: line-through;'
    }
  } */
  alert("The gordor has been blown!!, Boromier's been killed by Uruk-hai")
  $('ul:nth-child(2) li:nth-child(5)').css('text-decoration', 'line-through')
  $('#the-fellowship ul li:last-child').remove()
}
hornOfGondor()

// Part 10

function itsDangerousToGoAlone () {
  /* // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
  $('<div>').appendTo('h1:last-of-type')
  $('h1:last-of-type.div').attr('id', 'mount-doom')
  $('<li>Frodo Baggins</li>').appendTo('h1:last-of-type >div')
  */
  $('article:last-child').append('<div id="mount-doom"><ul></ul></div>')
  element = $('#the-fellowship ul li')
  $('#the-fellowship ul li:first-child').appendTo('#mount-doom ul')
  $('#the-fellowship ul li:first-child').appendTo('#mount-doom ul')
}

itsDangerousToGoAlone()

// Part 11

function weWantsIt () {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
  $('article:last-child').append('<div id="gollum"></div>')
  $('.hobbits div').appendTo('#gollum')
  $('#gollum').appendTo('#mount-doom')
}
weWantsIt()
// Part 12

function thereAndBackAgain () {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
  $('#gollum').remove()
  $('article:nth-child(2) ul:nth-child(3)').appendTo('article:first-child')
  $('article:nth-child(2) ul:nth-child(2)').remove()
}
thereAndBackAgain()
