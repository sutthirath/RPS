# RPS (Rock Paper Scissors)

## User Stories
* User sees gameboard
    * User sees printerd instructions so that they know how to play.
    * User can start the game.
    * User sees controls for choosing weapon and starting.
    * User can see current store standings 
    * User has ability to turn off sound
* User can click a button to choose weapon and simultaneously start the contest

## UI Notes
Main screen will have instructions and images of weapons to choose from. Clicking on one starts the contest.

## Pseudocode
* Store thee user's selection
* Randomly select weapon for AI
* Determine winner
    * If weapons are the same, result is draw
    * Keep track of what each weapon beats
* Modify scores values
* Reset for another round

## Nice Things
* Add countdown timer before winner is announced
* Best of three storing
* Audio - countdown, winner/loser
* Animations

## State of the APP
* playerWeapon = holds player's weapon
* computerWeapon = holds cp's weapon
* variables to hold round score and match score
* what weapons to choose
    * what weapons do those weapons beat

## Cached Elements
* Weapons images 
* Score text elements (round and match)
* Sound toggle
* Reset button
* Text element for the countdown

## Events
* DOM content loaded
    * Grab DOM refs
    * Attach event listeners
    * Optional - start audio
* Clicks
    * Store weapon selection
    * Randomly select CP's weapon choice
    * Start the countdown - setInterval()
    * Compare weapon variables to determine winners
    * Display winner
    * Update score
    * Display or enable reset button or auto?